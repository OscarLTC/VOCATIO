import { useForm } from 'react-hook-form';
import { useState } from 'react';

import './sign-in.scss';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../store/user/user.atom';
import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface SignInProps {}

export function SignIn(props: SignInProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isError, setIsError] = useState(false);

  const setUser = useSetRecoilState(userState);

  const navigate = useNavigate();

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    axios
      .post(`${environment.apiUrl}/users/login`, data)
      .then((res) => {
        setUser(res.data.user);
        navigate('/');
      })
      .catch(() => setIsError(true));
  };

  const onInputChage = () => {
    setIsError(false);
  };

  return (
    <div className="bg-[url('/src/assets/img/motivo_3.png')] bg-contain  h-[100vh] w-[100vw] flex">
      <form
        className="rounded text-center h-fit self-center mx-auto bg-white p-5 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <img
          className="mx-auto my-4 border-2 border-black p-3 rounded"
          width={100}
          src="/src/assets/img/logo_principal_color.png"
          alt=""
        />
        <div className="flex   gap-4 items-center  pt-4  place-content-center">
          <span className="w-44 text-start ">Nombre de Usuario:</span>
          <input
            {...register('username', {
              required: true,
            })}
            className={`w-52 bg-gray-200 p-2 rounded outline-none ${
              errors.username && 'outline-red-400 outline-1'
            }`}
            type="text"
            placeholder=""
            onChange={onInputChage}
          />
        </div>
        <div className="flex gap-4 items-center  place-content-center">
          <span className="w-44 text-start">Contraseña:</span>
          <div className="flex mt-3 items-center  place-content-end ">
            <input
              {...register('password', {
                required: true,
              })}
              className={`w-52 bg-gray-200  p-2 rounded outline-none ${
                errors.password && 'outline-red-400 outline-1'
              }`}
              type={!showPassword ? 'password' : 'text'}
              placeholder=""
              onChange={onInputChage}
            />
            <button
              type="button"
              className="absolute pr-2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={22} />
              ) : (
                <AiOutlineEye size={22} />
              )}
            </button>
          </div>
        </div>
        {isError && (
          <p className="text-red-600 mt-4">Usuario y/o contraseña incorrecto</p>
        )}
        <button className="rounded mt-10 mx-auto bg-green-600 py-1 px-10 text-white ">
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default SignIn;
