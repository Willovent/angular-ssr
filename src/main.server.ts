import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
const { AppServerModuleNgFactory } = require('./aot/src/app/app.server.module.ngfactory');
import * as express from 'express';
import 'zone.js';
import { readFileSync } from 'fs';

enableProdMode();

const app: express.Application = express();

const ngEngine = (filePath, options, callback) => {
  const file = readFileSync(filePath).toString();
  renderModuleFactory(AppServerModuleNgFactory, {
    document: file,
    url: options.req.url
  })
    .then(body => {
      callback(null, body);
    });
};

app.engine('html', ngEngine);

app.set('view engine', 'html');
app.set('views', '.');

app.use(express.static('.', { index: false }));

app.get('*', (request, response) => {
  response.render('index', { req: request });
});

app.listen(8000, () => {
  console.log('listening...');
});
