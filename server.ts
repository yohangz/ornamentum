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
  const offset = Number(req.query.offset);
  const limit = Number(req.query.limit);
  const selected = data.slice(offset, offset + limit);
  const count = data.length;

  res.status(200).json({
    data: selected,
    offset: offset,
    limit: limit,
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
