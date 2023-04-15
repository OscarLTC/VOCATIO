import { Request, Response } from 'express';
import { Vocatio } from '../config/Vocatio';

export async function getStudents(req: Request, res: Response) {
  try {
    const connection = await Vocatio.getConnection();
    const [rows] = await connection.execute(
      'select s.id, name, lastName, emailAddress, description as docType, docNumber, phoneNumber FROM student s inner join document_type dt on s.docType = dt.id'
    );
    await connection.end();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ mensaje: error });
  }
}

export async function getStudentById(req: Request, res: Response) {
  try {
    const connection = await Vocatio.getConnection();
    const id = req.params.id;
    const [rows] = await connection.execute(
      'SELECT * FROM student s INNER JOIN document_type dt ON s.docType = dt.id WHERE s.id = ?',
      [id]
    );
    await connection.end();
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ mensaje: error });
  }
}

export async function createStudent(req: Request, res: Response) {
  try {
    const connection = await Vocatio.getConnection();
    const { name, lastName, emailAddress, docType, docNumber, phoneNumber } =
      req.body;
    const [result]: any = await connection.execute(
      'INSERT INTO student (name, lastName, emailAddress, docType, docNumber, phoneNumber) VALUES (?, ?, ?, ?, ?, ?)',
      [name, lastName, emailAddress, docType, docNumber, phoneNumber]
    );
    await connection.end();
    res.json({
      result: result.insertId,
      mensaje: 'Alumno creado exitosamente',
    });
  } catch (error) {
    res.status(500).json({ mensaje: error });
  }
}

export async function updateStudent(req: Request, res: Response) {
  try {
    const connection = await Vocatio.getConnection();
    const id = req.params.id;
    const { name, lastName, emailAddress, docType, docNumber, phoneNumber } =
      req.body;
    await connection.execute(
      'UPDATE student SET name = ?, lastName = ?, emailAddress = ?, docType = ?, docNumber = ?, phoneNumber = ? WHERE id = ?',
      [name, lastName, emailAddress, docType, docNumber, phoneNumber, id]
    );
    await connection.end();
    res.json({ mensaje: 'Alumno actualizado exitosamente' });
  } catch (error) {
    res.status(500).json({ mensaje: error });
  }
}

export async function deleteStudent(req: Request, res: Response) {
  try {
    const connection = await Vocatio.getConnection();
    const id = req.params.id;
    await connection.execute('DELETE FROM student WHERE id = ?', [id]);
    await connection.end();
    res.json({ mensaje: 'Alumno eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ mensaje: error });
  }
}
