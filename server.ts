import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import { Request, Response } from 'express-serve-static-core';
import * as express from 'express';

import { join } from 'path';
import { readFileSync } from 'fs';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 8080;
const DIST_FOLDER = process.env.DIST_FOLDER ? join(process.cwd(), process.env.DIST_FOLDER) : process.cwd();

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/ornamentum-demo/server/main');

// Fetch data and cache
const data: Array<any> = JSON.parse(readFileSync(join(DIST_FOLDER, 'server/data.json'), 'utf8'));
const dataCount = data.length;

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// Example data route
app.get('/api/data', (req: Request, res: Response) => {
  const offset = Number(req.query.offset);
  const limit = Number(req.query.limit);

  res.status(200).json({
    data: data.slice(offset, offset + limit),
    offset: offset,
    limit: limit,
    count: dataCount
  });
});

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), {
  maxAge: '30d'
}));

// All regular routes use the Universal engine
app.get('*', (req: Request, res: Response) => {
  res.render('index', { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
