import mysql, { Connection, createConnection } from 'mysql2/promise'

export class Vocatio {
    // Método para obtener la conexión a la base de datos
    public static async getConnection(): Promise<Connection> {
      try {
        const connection = await createConnection({
          host: 'localhost',
          user: 'root',
          password: '2160',
          database: 'vocatio',
        });
        return connection;
      } catch (error) {
        console.error('Error en la conexión a la base de datos:', error);
        throw error;
      }
    }
  }