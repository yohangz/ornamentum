import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import { Request, Response } from 'express-serve-static-core';
import * as express from 'express';
import * as WSS from 'ws';
import * as http from 'http';

import { join } from 'path';
import { readFileSync } from 'fs';

import { queryDataByFieldExpression, queryDataByFieldCollection } from './server/query';

process.on('uncaughtException', function (exception) {
  console.log('node process crashed: ', exception);
});

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();
const server = http.createServer(app);

const wss = new WSS.Server({ server });

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
  res.status(200).json(queryDataByFieldExpression(data, parsedOffset, parsedLimit, fields));
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

// Web socket endpoint
wss.on('connection', (ws: WSS) => {
  try {
    ws.on('message', (message: string) => {
      const query = JSON.parse(message);
      const result = queryDataByFieldCollection(data, query['offset'], query['limit'], query['fields'] || query['filter']);
      ws.send(JSON.stringify(result));
    });

    ws.on('close', () => {
      console.log('[WS] closing connection');
    });
  } catch (e) {
    console.log('[WS] connection crash');
  }
});

// Start up the Node server
server.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
