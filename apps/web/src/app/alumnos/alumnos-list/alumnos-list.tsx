import './alumnos-list.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Alumno } from '../../models/alumno.model';

/* eslint-disable-next-line */
export interface AlumnosListProps {}

export function AlumnosList(props: AlumnosListProps) {
  const [alumnos, setAlumnos] = useState<Array<Alumno>>();

  const onDeleteClick = (id: number) => {
    toast.loading('Eliminando alumno');
    axios.delete(`http://localhost:3333/alumnos/${id}`).then(() => {
      getAlumnos();
      toast.dismiss();
      toast.success('Se eliminó correctamente');
    });
  };

  const getAlumnos = () => {
    axios
      .get('http://localhost:3333/alumnos/all')
      .then((res) => setAlumnos(res.data));
  };

  useEffect(() => {
    getAlumnos();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-5xl ">Lista de Alumnos</h1>
      <div className="p-8 mt-5">
        <div className="flex justify-between ">
          <div className="my-auto flex gap-3">
            <span className="text-lg self-center">Buscar alumno: </span>
            <input
              type="text"
              className="bg-gray-200 rounded px-2 outline-none"
            />
            <span className="rounded bg-[#57c5a0] hover:bg-[#81d1b6] p-1 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
              </svg>
            </span>
          </div>
          <Link to="/alumnos/save">
            <button className="py-2 px-5 rounded-lg text-white bg-[#57c5a0] hover:bg-[#81d1b6]">
              Crear alumno
            </button>
          </Link>
        </div>
        <div className="mt-10 ">
          <table className="w-full p-4">
            <thead className="justify-between border-y border-gray-600">
              <tr className="text-gray-400">
                <th className="p-2">ID</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Tipo de documento</th>
                <th>Documento</th>
                <th>Celular</th>
                <th>Correo</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {alumnos
                ?.sort((a: any, b: any) => a.id - b.id)
                .map((alumno: Alumno) => (
                  <tr className="hover:bg-slate-100" key={alumno.id}>
                    <td className="p-2 rounded-l-lg">{alumno.id}</td>
                    <td>{alumno.name}</td>
                    <td>{alumno.lastName}</td>
                    <td>{alumno.docType}</td>
                    <td>{alumno.docNumber}</td>
                    <td>{alumno.phoneNumber}</td>
                    <td>{alumno.emailAddress}</td>
                    <td className="rounded-r-lg p-2">
                      <div className="flex justify-center gap-4">
                        <Link to={`/alumnos/${alumno.id}`}>
                          <div className="p-1 bg-slate-200 rounded text-slate-400 hover:text-[#57c5a0]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M8.707 19.707 18 10.414 13.586 6l-9.293 9.293a1.003 1.003 0 0 0-.263.464L3 21l5.242-1.03c.176-.044.337-.135.465-.263zM21 7.414a2 2 0 0 0 0-2.828L19.414 3a2 2 0 0 0-2.828 0L15 4.586 19.414 9 21 7.414z"></path>
                            </svg>
                          </div>
                        </Link>
                        <button
                          onClick={(e) => onDeleteClick(parseInt(alumno.id))}
                          className="p-1 bg-slate-200 rounded text-slate-400 hover:text-[#57c5a0]"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AlumnosList;
