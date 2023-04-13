import express from 'express';
import cors from 'cors';
import { alumnoRouter } from './app/routers/alumno.router';
import { documentoRouter } from './app/routers/document.router';

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: true }));

app.use('/alumnos', alumnoRouter);
app.use('/documentos', documentoRouter);

const port = process.env.PORT || 3333;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/alumnos/all`);
});
server.on('error', console.error);
