import { useRecoilState, useSetRecoilState } from 'recoil';
import './enterprises-form.scss';
import { bussinesLineState } from '../../store/bussinesline/bussinesline.atom';
import { enterpriseState } from '../../store/enterprise/enterprise.atom';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import { useEffect } from 'react';
import { BussinesLine } from '../../models/bussinesLine.model';

/* eslint-disable-next-line */
export interface EnterprisesFormProps {
  formState: number;
}

export function EnterprisesForm(props: EnterprisesFormProps) {
  const [bussinesLine, setBussinesLine] = useRecoilState(bussinesLineState);
  const setEnterprises = useSetRecoilState(enterpriseState);
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      contactName: '',
      phoneContact: '',
      emailContact: '',
      bussinesLine_id: 1,
    },
  });

  const { id } = useParams();

  const onSubmit = (data: any) => {
    send_data(props.formState, data);
  };

  const send_data = (value: number, enterprise: any) => {
    if (value === 1) {
      toast.loading('Creando empresa');
      axios
        .post(`${environment.apiUrl}/enterprise/save`, enterprise)
        .then(() => {
          toast.remove();
          toast.success('Empresa creada');
          reset();
        });
    } else if (value === 2) {
      toast.loading('Actualizando empresa');
      axios
        .put(`${environment.apiUrl}/enterprise/${id}`, enterprise)
        .then(() => {
          reset();
          toast.remove();
          toast.success('Datos actualizados');
        })
        .catch(() => {
          toast.remove();
          toast.error('Error al actualizar');
        });
    }
    setEnterprises(null);
  };

  useEffect(() => {
    if (props.formState === 2) {
      const getEnterprise = () => {
        axios.get(`${environment.apiUrl}/enterprise/${id}`).then((res) => {
          setValue('name', res.data.name);
          setValue('contactName', res.data.contactName);
          setValue('phoneContact', res.data.phoneContact);
          setValue('emailContact', res.data.emailContact);
          setValue('bussinesLine_id', res.data.bussines_line.id);
        });
      };
      getEnterprise();
    }

    if (!bussinesLine) {
      const getBussinesLine = () => {
        axios
          .get(`${environment.apiUrl}/bussinesline/all`)
          .then((res) =>
            setBussinesLine(res.data.sort((a: any, b: any) => a.id - b.id))
          );
      };
      getBussinesLine();
    }
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-5xl ">
        {props.formState === 1 ? 'Crear empresa' : 'Actualizar empresa'}
      </h1>
      <div className="mt-24">
        <form
          className="max-w-xl bg-white mx-auto shadow px-5 py-10 rounded-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-4 items-center place-content-center">
            <span className="w-44 text-start">Nombre de empresa:</span>
            <input
              {...register('name', {
                required: true,
                pattern: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ0-9\s]+$/,
              })}
              className={`w-52 bg-gray-200 p-2 rounded outline-none ${
                errors.name && 'outline-red-400 outline-1'
              }`}
              type="text"
              placeholder="Empresa 1"
            />
          </div>
          <div className="flex gap-4 items-center mt-5 place-content-center">
            <span className="w-44 text-start">Nombre de contacto:</span>
            <input
              {...register('contactName', {
                required: true,
                pattern: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/,
              })}
              className={`w-52 bg-gray-200 p-2 rounded outline-none ${
                errors.contactName && 'outline-red-400 outline-1'
              }`}
              type="text"
              placeholder="Juan Perez"
            />
          </div>
          <div className="flex gap-4 items-center mt-5 place-content-center">
            <span className="w-44 text-start">Celular:</span>
            <input
              {...register('phoneContact', {
                required: true,
                minLength: 9,
                maxLength: 9,
                pattern: /^[9][0-9]*$/,
              })}
              className={`w-52 bg-gray-200 p-2 rounded outline-none ${
                errors.phoneContact && 'outline-red-400 outline-1'
              }`}
              type="text"
              placeholder="987654321"
            />
          </div>
          <div className="flex gap-4 items-center mt-5 place-content-center">
            <span className="w-44 text-start">Email:</span>
            <input
              {...register('emailContact', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              className={`w-52 bg-gray-200 p-2 rounded outline-none ${
                errors.emailContact && 'outline-red-400 outline-1'
              }`}
              type="text"
              placeholder="juan@gmail.com"
            />
          </div>
          <div className="flex gap-4 items-center mt-5 place-content-center">
            <span className="w-44 text-start">Giro de Negocio:</span>
            <select
              {...register('bussinesLine_id', { required: true })}
              defaultValue={'docType'}
              className="w-52 bg-gray-200 p-2 rounded outline-none"
            >
              {bussinesLine?.map((bussineLine: BussinesLine) => (
                <option key={bussineLine.id} value={bussineLine.id}>
                  {bussineLine.description}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-around mt-10 gap-4">
            <Link to="/empresas">
              <button className="rounded-lg bg-[#e26e6e] py-1 px-4 text-white hover:bg-[#c55757]">
                Regresar
              </button>
            </Link>
            <button className="rounded-lg bg-[#57c5a0] py-1 px-4 text-white hover:bg-[#518b7e]">
              {props.formState === 1 ? 'Crear' : ' Actualizar'}
            </button>
          </div>
        </form>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default EnterprisesForm;
