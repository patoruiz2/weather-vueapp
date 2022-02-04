"use strict";
import express from 'express';
import route from './routes/route.js';
import cors from 'cors';
const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');//configurar para que cualquier cliente(*) haga peticiones ajax
  res.header('Access-Control-Allow-Headers', 'Authorization', 'X-API-KEY', 'Origin',
    'X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
})
app.use(cors());

app.use('/api', route);

export default app;