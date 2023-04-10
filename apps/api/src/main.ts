import express from 'express';
import * as path from 'path';
import { alumnoRouter } from './app/routers/alumno.router';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/alumnos', alumnoRouter);

const port = process.env.PORT || 3333;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/alumnos/all`);
});
server.on('error', console.error);
