import { Router } from 'express';
import {
  createStudent,
  deleteStudent,
  getStudentById,
  getStudents,
  updateStudent,
} from '../controllers/student.controller';

export const studentRouter = Router();

studentRouter.get('/all', getStudents);
studentRouter.get('/:id', getStudentById);
studentRouter.post('/save', createStudent);
studentRouter.put('/:id', updateStudent);
studentRouter.delete('/:id', deleteStudent);
