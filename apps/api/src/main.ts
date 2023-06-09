import express from 'express';
import cors from 'cors';
import { studentRouter } from './app/routers/student.router';
import { documentRouter } from './app/routers/document.router';

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: true }));

app.use('/student', studentRouter);
app.use('/document', documentRouter);

const port = process.env.PORT || 3333;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/student/all`);
});
server.on('error', console.error);
