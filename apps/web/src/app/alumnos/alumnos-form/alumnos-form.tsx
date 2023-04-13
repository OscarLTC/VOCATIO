import { useForm } from 'react-hook-form';
import './alumnos-form.scss';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Documento } from '../../models/documento.model';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

/* eslint-disable-next-line */
export interface AlumnosFormProps {
  formState: number;
}

export function AlumnosForm(props: AlumnosFormProps) {
  const [docTypes, setDocTypes] = useState<Array<Documento>>();
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
      lastName: '',
      emailAddress: '',
      docType: 1,
      docNumber: '',
      phoneNumber: '',
    },
  });

  const { id } = useParams();

  const onSubmit = (data: any) => {
    send_data(props.formState, data);
  };

  const send_data = (value: number, alumno: any) => {
    if (value === 1) {
      toast.loading('Creando alumno');
      axios.post('http://localhost:3333/alumnos/save', alumno).then(() => {
        toast.remove();
        toast.success('Alumno creado');
        reset();
      });
    } else if (value === 2) {
      console.log(alumno);
      axios.put(`http://localhost:3333/alumnos/${id}`, alumno).then(() => {
        reset();
        toast.remove();
        toast.success('Alumno actualizado');
      });
    }
  };

  useEffect(() => {
    if (props.formState === 2) {
      const getAlumno = () => {
        axios.get(`http://localhost:3333/alumnos/${id}`).then((res) => {
          setValue('name', res.data.name);
          setValue('lastName', res.data.lastName);
          setValue('emailAddress', res.data.emailAddress);
          setValue('docType', res.data.docType);
          setValue('docNumber', res.data.docNumber);
          setValue('phoneNumber', res.data.phoneNumber);
        });
      };
      getAlumno();
    }

    const getDocumentos = () =>
      axios
        .get('http://localhost:3333/documentos/all')
        .then((res) => setDocTypes(res.data));

    getDocumentos();
  }, []);
  return (
    <div className="p-4">
      <h1 className="text-5xl ">
        {props.formState === 1 ? 'Crear alumno' : 'Actualizar alumno'}
      </h1>
      <div className="mt-28">
        <form
          className="max-w-xl mx-auto shadow p-5 rounded-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-4 items-center place-content-center">
            <span className="w-44 text-start">Nombres:</span>
            <input
              {...register('name', { required: true })}
              className={`bg-gray-200 p-2 rounded outline-none ${
                errors.name && 'outline-red-400'
              }`}
              type="text"
              placeholder="Juan"
            />
          </div>
          <div className="flex gap-4 items-center mt-5 place-content-center">
            <span className="w-44 text-start">Apellidos:</span>
            <input
              {...register('lastName', { required: true })}
              className="bg-gray-200 p-2 rounded outline-none"
              type="text"
              placeholder="Perez"
            />
          </div>
          <div className="flex gap-4 items-center mt-5 place-content-center">
            <span className="w-44 text-start">Correo:</span>
            <input
              {...register('emailAddress', { required: true })}
              className="bg-gray-200 p-2 rounded outline-none"
              type="text"
              placeholder="juan@gmail.com"
            />
          </div>
          <div className="flex gap-4 items-center mt-5 place-content-center">
            <span className="w-44 text-start">Tipo de documento:</span>
            <select
              {...register('docType', { required: true })}
              defaultValue={'docType'}
              className="bg-gray-200 py-2 px-5 rounded outline-none"
            >
              {docTypes
                ?.sort((a: any, b: any) => a.id - b.id)
                .map((doc) => (
                  <option key={doc.id} value={doc.id}>
                    {doc.description}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex gap-4 items-center mt-5 place-content-center">
            <span className="w-44 text-start">Número de documento:</span>
            <input
              {...register('docNumber', { required: true })}
              className="bg-gray-200 p-2 rounded outline-none"
              type="text"
              placeholder="78654321"
            />
          </div>
          <div className="flex gap-4 items-center mt-5 place-content-center">
            <span className="w-44 text-start">Número de celular:</span>
            <input
              {...register('phoneNumber', { required: true })}
              className="bg-gray-200 p-2 rounded outline-none"
              type="text"
              placeholder="987654321"
            />
          </div>
          <div className="flex justify-around mt-10 gap-4">
            <Link to="/alumnos">
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
export default AlumnosForm;
