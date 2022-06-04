import { Server } from './client';
import { environment } from './environments/environment';
import { Router } from './app/router';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import express from 'express';
import { join } from 'node:path';
import { VersionTable } from './app/version-table';

const server = new Server();
const app = server.getServer();

app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
app.use(cors());
app.get('/api/versions', VersionTable);
app.use(express.static(join(__dirname, 'assets')));
app.use('/api', Router);

server
  .setPort(environment.PORT)
  .start(() => console.log('Port: ' + environment.PORT));
