import { useState } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  const [selcted, setSelected] = useState('alumnos');

  return (
    <div className="fixed todo:hidden  h-screen  shadow-lg lg:block w-80">
      <div className=" h-full bg-white">
        <div className="flex items-center justify-center pt-6">
          <Link to="/" onClick={() => setSelected('alumnos')}>
            <img className="w-24" src="/src/assets/logo_principal_color.png" />
          </Link>
        </div>
        <nav className="mt-6">
          <div>
            <Link
              to="/alumnos"
              className={
                selcted === 'alumnos'
                  ? 'flex items-center justify-start w-full p-4 my-2 font-thin text-[#57c5a0] uppercase transition-colors duration-200 border-r-4 border-[#57c5a0] bg-gradient-to-r from-white to-[#d0ffef]'
                  : 'flex items-center justify-start w-full p-4 my-2 font-thin text-[#003552] uppercase transition-colors duration-200 hover:text-[#57c5a0]'
              }
              onClick={() => setSelected('alumnos')}
            >
              <span className="text-left">
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M2 7v1l11 4 9-4V7L11 4z"></path>
                  <path d="M4 11v4.267c0 1.621 4.001 3.893 9 3.734 4-.126 6.586-1.972 7-3.467.024-.089.037-.178.037-.268V11L13 14l-5-1.667v3.213l-1-.364V12l-3-1z"></path>
                </svg>
              </span>
              <span className="mx-4 text-sm font-normal">Alumnos</span>
            </Link>
            <Link
              to="/empresas"
              className={
                selcted === 'empresas'
                  ? 'flex items-center justify-start w-full p-4 my-2 font-thin text-[#57c5a0] uppercase transition-colors duration-200 border-r-4 border-[#57c5a0] bg-gradient-to-r from-white to-[#d0ffef]'
                  : 'flex items-center justify-start w-full p-4 my-2 font-thin text-[#003552] uppercase transition-colors duration-200 hover:text-[#57c5a0]'
              }
              onClick={() => setSelected('empresas')}
            >
              <span className="text-left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  fill="currentColor"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 10h-2V4h1V2H4v2h1v6H3a1 1 0 0 0-1 1v9h20v-9a1 1 0 0 0-1-1zm-7 8v-4h-4v4H7V4h10v14h-3z"></path>
                  <path d="M9 6h2v2H9zm4 0h2v2h-2zm-4 4h2v2H9zm4 0h2v2h-2z"></path>
                </svg>
              </span>
              <span className="mx-4 text-sm font-normal">Empresas</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
