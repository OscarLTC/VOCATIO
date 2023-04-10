import './alumnos.scss';

/* eslint-disable-next-line */
export interface AlumnosProps {}

export function Alumnos(props: AlumnosProps) {
  const usuarios = [
    {
      id: 1,
      nombres: 'Juan',
      apellidos: 'Pérez',
      tipoDocumento: 'DNI',
      documento: '12345678',
      celular: '987654321',
    },
    {
      id: 2,
      nombres: 'María',
      apellidos: 'Gómez',
      tipoDocumento: 'Pasaporte',
      documento: 'A1234567',
      celular: '987123456',
    },
    {
      id: 3,
      nombres: 'Carlos',
      apellidos: 'López',
      tipoDocumento: 'Carnet de Extranjería',
      documento: 'X98765432',
      celular: '912345678',
    },
    // Agrega más objetos con datos adicionales según tus necesidades
  ];

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
          <button className="py-2 px-5 rounded-lg text-white bg-[#57c5a0] hover:bg-[#81d1b6]">
            Crear alumno
          </button>
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
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr className="hover:bg-slate-100 ">
                  <td className="p-2 rounded-l-lg">{usuario.id}</td>
                  <td>{usuario.nombres}</td>
                  <td>{usuario.apellidos}</td>
                  <td>{usuario.tipoDocumento}</td>
                  <td>{usuario.documento}</td>
                  <td>{usuario.celular}</td>
                  <td className="rounded-r-lg p-2">
                    <div className="flex justify-center gap-4">
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
                      <div className="p-1 bg-slate-200 rounded text-slate-400 hover:text-[#57c5a0]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path>
                        </svg>
                      </div>
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

export default Alumnos;
