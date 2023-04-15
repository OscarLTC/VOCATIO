import { Request, Response } from "express";
import { Vocatio } from "../config/Vocatio";


export async function getDocumentos(req: Request, res: Response) {
    try {
      const connection = await Vocatio.getConnection();
      const [rows] = await connection.execute('select * from document_type');
      await connection.end();
      res.json(rows);
    } catch (error) {
      res.status(500).json({ mensaje: error });
    }
}
