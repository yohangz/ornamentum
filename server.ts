import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import { Request, Response } from 'express-serve-static-core';
import * as express from 'express';
import * as WSS from 'ws';

import { join } from 'path';
import { readFileSync } from 'fs';

import forOwn from 'lodash/forOwn';
import get from 'lodash/get';
import orderBy from 'lodash/orderBy';

process.on('uncaughtException', function (exception) {
  console.log('node process crashed: ', exception);
});

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const wss = new WSS.Server({ port: 40510 });

const PORT = process.env.PORT || 8080;
const DIST_FOLDER = process.env.DIST_FOLDER ? join(process.cwd(), process.env.DIST_FOLDER) : process.cwd();

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/ornamentum-demo/server/main');

// Fetch data and cache
const data: Array<any> = JSON.parse(readFileSync(join(DIST_FOLDER, 'server/data.json'), 'utf8'));

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine(
  'html',
  ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [provideModuleMap(LAZY_MODULE_MAP)]
  })
);

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// Example data route
app.get('/api/data', (req: Request, res: Response) => {
  const { offset = 0, limit = 10, ...fields } = req.query;
  const parsedOffset = Number(offset);
  const parsedLimit = Number(limit);

  const filters = [];
  const sort = {
    fields: [],
    orders: []
  };

  forOwn(fields, (value: string, key: string): void => {
    if (value === '') {
      return;
    }

    const fieldPair = value.split('|');

    const filterValue = fieldPair[0];
    if (filterValue !== '') {
      filters.push({
        field: key,
        values: String(filterValue).split(',')
      });
    }

    const sortOrder = fieldPair[1];
    if (sortOrder) {
      sort.fields.push(key);
      sort.orders.push(sortOrder);
    }
  });

  let result = data.filter((item) => {
    return filters.every((filter) => {
      const value = get(item, filter.field);

      return filter.values.some((filterItem) => {
        const filterValue = String(filterItem).toLowerCase();
        const fieldValue = String(value).toLowerCase();
        return fieldValue.includes(filterValue);
      });
    });
  });

  if (sort.orders.length) {
    result = orderBy(result, sort.fields, sort.orders);
  }

  const selected = result.slice(parsedOffset, parsedOffset + parsedLimit);
  const count = result.length;

  res.status(200).json({
    data: selected,
    offset: parsedOffset,
    limit: parsedLimit,
    count: count
  });
});

// Server static files from /browser
app.get(
  '*.*',
  express.static(join(DIST_FOLDER, 'browser'), {
    maxAge: '30d'
  })
);

// All regular routes use the Universal engine
app.get('*', (req: Request, res: Response) => {
  res.render('index', { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});

wss.on('connection', (ws: WSS) => {
  let offset = 0;

  // connection is up.
  // sample data will be emitted to the client side in a 2000ms interval
  setInterval(() => {
    offset += 20;
    if (offset >= 100) {
      offset = 0;
    }

    const selected = data.slice(offset, offset + 20);
    ws.send(JSON.stringify(selected));
  }, 2000);
});
