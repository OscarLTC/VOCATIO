import { useState } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { IoPeopleSharp } from 'react-icons/io5';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  const [selcted, setSelected] = useState('personas');

  return (
    <div className="fixed todo:hidden  h-screen  shadow-lg lg:block w-80">
      <div className=" h-full bg-white">
        <div className="flex items-center justify-center pt-6">
          <Link to="/" onClick={() => setSelected('alumnos')}>
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
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
