import { useState } from 'react';
import './navbar.scss';
import { Link, useLocation, useParams } from 'react-router-dom';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { RiSurveyFill } from 'react-icons/ri';
import { IoPeopleSharp } from 'react-icons/io5';
import { MdPendingActions } from 'react-icons/md';
import path from 'path';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const currentPath = pathParts[1];
  const [selcted, setSelected] = useState(
    currentPath != '' ? currentPath : 'personas'
  );

  return (
    <div className="fixed todo:hidden  h-screen  shadow-lg lg:block w-80">
      <div className=" h-full bg-white">
        <div className="flex items-center justify-center pt-6">
          <Link to="/" onClick={() => setSelected('personas')}>
            <img
              className="w-24"
              src="/src/assets/img/logo_principal_color.png"
            />
          </Link>
        </div>
        <nav className="mt-6">
          <div>
            <Link
              to="/personas"
              className={
                selcted === 'personas'
                  ? 'flex items-center justify-start w-full p-4 my-2 font-thin text-[#57c5a0] uppercase transition-colors duration-200 border-r-4 border-[#57c5a0] bg-gradient-to-r from-white to-[#d0ffef]'
                  : 'flex items-center justify-start w-full p-4 my-2 font-thin text-[#003552] uppercase transition-colors duration-200 hover:text-[#57c5a0]'
              }
              onClick={() => setSelected('personas')}
            >
              <span className="text-left">
                <IoPeopleSharp size={24} />
              </span>
              <span className="mx-4 text-sm font-normal">Personas</span>
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
                <HiBuildingOffice2 size={24} />
              </span>
              <span className="mx-4 text-sm font-normal">Empresas</span>
            </Link>
            <Link
              to="/encuestas"
              className={
                selcted === 'encuestas'
                  ? 'flex items-center justify-start w-full p-4 my-2 font-thin text-[#57c5a0] uppercase transition-colors duration-200 border-r-4 border-[#57c5a0] bg-gradient-to-r from-white to-[#d0ffef]'
                  : 'flex items-center justify-start w-full p-4 my-2 font-thin text-[#003552] uppercase transition-colors duration-200 hover:text-[#57c5a0]'
              }
              onClick={() => setSelected('encuestas')}
            >
              <span className="text-left">
                <MdPendingActions size={24} />
              </span>
              <span className="mx-4 text-sm font-normal">
                PROGRAMAR ENCUESTAS
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
