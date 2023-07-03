import { useState } from 'react';
import './navbar.scss';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  HiBuildingOffice2,
  HiOutlineClipboardDocumentList,
} from 'react-icons/hi2';
import { RiLogoutBoxLine, RiSurveyFill } from 'react-icons/ri';
import { IoPeopleSharp } from 'react-icons/io5';
import { MdPendingActions } from 'react-icons/md';
import path from 'path';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../store/user/user.atom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  const setUset = useSetRecoilState(userState);

  const location = useLocation();
  const navigate = useNavigate();
  const pathParts = location.pathname.split('/');
  const currentPath = pathParts[1];
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const [selcted, setSelected] = useState(
    currentPath != '' ? currentPath : 'encuestas'
  );

  const onLogoutClick = () => {
    setUset(null);
    navigate('/login');
  };

  return (
    <>
      <div className="fixed hidden   h-screen  shadow-lg lg:block w-60">
        <div className=" h-full bg-white  py-10 ">
          <div className="flex items-center justify-center">
            <Link to="/" onClick={() => setSelected('encuestas')}>
              <img className="w-20" src="/src/assets/img/image.png" />
            </Link>
          </div>
          <nav className="mt-6">
            <div>
              <Link
                to="/personas"
                className={
                  selcted === 'personas'
                    ? 'flex items-center justify-start w-full p-4 my-2 font-thin text-[#5a6268] uppercase transition-colors duration-200 border-r-4 border-[#5a6268] bg-gradient-to-r from-white to-[#b7c1c1]'
                    : 'flex items-center justify-start w-full p-4 my-2 font-thin text-[#194058] uppercase transition-colors duration-200 hover:text-[#5a6268]'
                }
                onClick={() => {
                  setSelected('personas');
                }}
              >
                <span className="text-left">
                  <IoPeopleSharp size={24} />
                </span>
                <span className="mx-4 text-xs font-normal">Personas</span>
              </Link>
              <Link
                to="/empresas"
                className={
                  selcted === 'empresas'
                    ? 'flex items-center justify-start w-full p-4 my-2 font-thin text-[#5a6268] uppercase transition-colors duration-200 border-r-4 border-[#5a6268] bg-gradient-to-r from-white to-[#b7c1c1]'
                    : 'flex items-center justify-start w-full p-4 my-2 font-thin text-[#194058] uppercase transition-colors duration-200 hover:text-[#5a6268]'
                }
                onClick={() => setSelected('empresas')}
              >
                <span className="text-left">
                  <HiBuildingOffice2 size={24} />
                </span>
                <span className="mx-4 text-xs font-normal">Empresas</span>
              </Link>
              <Link
                to="/encuestas"
                className={
                  selcted === 'encuestas'
                    ? 'flex items-center justify-start w-full p-4 my-2 font-thin text-[#5a6268] uppercase transition-colors duration-200 border-r-4 border-[#5a6268] bg-gradient-to-r from-white to-[#b7c1c1]'
                    : 'flex items-center justify-start w-full p-4 my-2 font-thin text-[#194058] uppercase transition-colors duration-200 hover:text-[#5a6268]'
                }
                onClick={() => setSelected('encuestas')}
              >
                <span className="text-left">
                  <MdPendingActions size={24} />
                </span>
                <span className="mx-4 text-xs font-normal">
                  PROGRAMAR ENCUESTAS
                </span>
              </Link>
              <Link
                to="/reportes"
                className={
                  selcted === 'reportes'
                    ? 'flex items-center justify-start w-full p-4 mt-2 mb-6 font-thin text-[#5a6268] uppercase transition-colors duration-200 border-r-4 border-[#5a6268] bg-gradient-to-r from-white to-[#b7c1c1]'
                    : 'flex items-center justify-start w-full p-4 mt-2 mb-6 font-thin text-[#194058] uppercase transition-colors duration-200 hover:text-[#5a6268]'
                }
                onClick={() => setSelected('reportes')}
              >
                <span className="text-left">
                  <HiOutlineClipboardDocumentList size={24} />
                </span>
                <span className="mx-4 text-xs font-normal">REPORTES</span>
              </Link>
            </div>
          </nav>
          <div className="text-center pt-6  border-t border-black  flex  items-center justify-center">
            <button
              onClick={onLogoutClick}
              className=" w-full bg-gradient-to-r shadow m-1 text-black p-4  flex "
            >
              <RiLogoutBoxLine className="mr-3" size={24} />
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
      <div className="lg:hidden block bg-[aliceblue]">
        <div className="flex justify-end py-5 px-5">
          {isMenuHidden ? (
            <AiOutlineMenu size={25} onClick={() => setIsMenuHidden(false)} />
          ) : (
            <AiOutlineClose size={25} onClick={() => setIsMenuHidden(true)} />
          )}
        </div>
        <div
          className={
            !isMenuHidden
              ? 'fixed left-0 select-none top-0 w-[60%] h-full border-r border-gray-600 bg-white ease-in-out duration-500'
              : 'fixed left-[-100%] top-0  h-full   select-none ease-out duration-1000'
          }
        >
          <Link
            to="/"
            onClick={() => {
              setSelected('encuestas');
              setIsMenuHidden(true);
            }}
          >
            <img
              className="w-20 mx-auto my-10"
              src="/src/assets/img/image.png"
            />
          </Link>
          <ul className="uppercase">
            <li className="border-b border-gray-300">
              <Link
                to="/personas"
                className={
                  selcted === 'personas'
                    ? 'flex items-center justify-start w-full p-4 font-thin text-[#5a6268] uppercase transition-colors duration-200 border-r-4 border-[#5a6268] bg-gradient-to-r from-white to-[#b7c1c1]'
                    : 'flex items-center justify-start w-full p-4 font-thin text-[#194058] uppercase transition-colors duration-200 hover:text-[#5a6268]'
                }
                onClick={() => {
                  setSelected('personas');
                  setIsMenuHidden(true);
                }}
              >
                <span className="text-left">
                  <IoPeopleSharp size={24} />
                </span>
                <span className="mx-4 text-xs font-normal">Personas</span>
              </Link>
            </li>
            <li className="border-b border-gray-300">
              <Link
                to="/empresas"
                className={
                  selcted === 'empresas'
                    ? 'flex items-center justify-start w-full p-4 font-thin text-[#5a6268] uppercase transition-colors duration-200 border-r-4 border-[#5a6268] bg-gradient-to-r from-white to-[#b7c1c1]'
                    : 'flex items-center justify-start w-full p-4 font-thin text-[#194058] uppercase transition-colors duration-200 hover:text-[#5a6268]'
                }
                onClick={() => {
                  setSelected('empresas');
                  setIsMenuHidden(true);
                }}
              >
                <span className="text-left">
                  <HiBuildingOffice2 size={24} />
                </span>
                <span className="mx-4 text-xs font-normal">Empresas</span>
              </Link>
            </li>
            <li className=" border-b border-gray-300">
              <Link
                to="/encuestas"
                className={
                  selcted === 'encuestas'
                    ? 'flex items-center justify-start w-full p-4  font-thin text-[#5a6268] uppercase transition-colors duration-200 border-r-4 border-[#5a6268] bg-gradient-to-r from-white to-[#b7c1c1]'
                    : 'flex items-center justify-start w-full p-4  font-thin text-[#194058] uppercase transition-colors duration-200 hover:text-[#5a6268]'
                }
                onClick={() => {
                  setSelected('encuestas');
                  setIsMenuHidden(true);
                }}
              >
                <span className="text-left">
                  <MdPendingActions size={24} />
                </span>
                <span className="mx-4 text-xs font-normal">
                  PROGRAMAR ENCUESTAS
                </span>
              </Link>
            </li>
            <li className="border-b border-gray-300">
              <Link
                to="/reportes"
                className={
                  selcted === 'reportes'
                    ? 'flex items-center justify-start w-full p-4 font-thin text-[#5a6268] uppercase transition-colors duration-200 border-r-4 border-[#5a6268] bg-gradient-to-r from-white to-[#b7c1c1]'
                    : 'flex items-center justify-start w-full p-4 font-thin text-[#194058] uppercase transition-colors duration-200 hover:text-[#5a6268]'
                }
                onClick={() => {
                  setSelected('reportes');
                  setIsMenuHidden(true);
                }}
              >
                <span className="text-left">
                  <HiOutlineClipboardDocumentList size={24} />
                </span>
                <span className="mx-4 text-xs font-normal">REPORTES</span>
              </Link>
            </li>
            <li className="p-4">
              <div className="text-center pt-6  border-t border-black  flex  items-center justify-center">
                <button
                  onClick={onLogoutClick}
                  className=" w-full bg-gradient-to-r shadow m-1 text-black p-4  flex "
                >
                  <RiLogoutBoxLine className="mr-3" size={24} />
                  Cerrar Sesión
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
