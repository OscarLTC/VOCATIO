import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { doctypeState } from '../../store/doctype/doctype.atom';
import { enterpriseState } from '../../store/enterprise/enterprise.atom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Enterprise } from '../../models/enterprise.model';
import { peopleState } from '../../store/people/people.atom';
import { environment } from '../../../environments/environment';
import { DocType } from '../../models/doctype.model';

interface PeopleFormProps {
  formState: number;
}

export const PeopleForm = (props: PeopleFormProps) => {
  const [docTypes, setDocTypes] = useRecoilState(doctypeState);
  const [entreprises, setEnterprises] = useRecoilState(enterpriseState);
  const setPeople = useSetRecoilState(peopleState);
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
      docType_id: 1,
      docNumber: '',
      phoneNumber: '',
      enterprise_id: 1,
    },
  });

  const { id } = useParams();
  const docType = watch('docType_id');

  const validateInput = (value: any) => {
    if (docType == 1) {
      if (value.length < 8 || value.length > 8) {
        return 'El valor debe tener exactamente 8 caracteres';
      }
    }
    return true;
  };

  const onSubmit = (data: any) => {
    send_data(props.formState, data);
  };

  const send_data = (value: number, person: any) => {
    if (value === 1) {
      toast.loading('Creando persona');
      axios.post(`${environment.apiUrl}/person/save`, person).then(() => {
        toast.remove();
        toast.success('Persona creada');
        reset();
      });
    } else if (value === 2) {
      toast.loading('Actualizando persona');
      axios.put(`${environment.apiUrl}/person/${id}`, person).then(() => {
        reset();
        toast.remove();
        toast.success('Datos actualizados');
      });
    }
    setPeople(null);
  };

  useEffect(() => {
    if (props.formState === 2) {
      const getPerson = () => {
        axios.get(`${environment.apiUrl}/person/${id}`).then((res) => {
          setValue('name', res.data.name);
          setValue('lastName', res.data.lastName);
          setValue('emailAddress', res.data.emailAddress);
          setValue('docType_id', res.data.doc_type.id);
          setValue('docNumber', res.data.docNumber);
          setValue('phoneNumber', res.data.phoneNumber);
          setValue('enterprise_id', res.data.enterprise.id);
        });
      };
      getPerson();
    }

    if (!docTypes) {
      const getDocTypes = async () => {
        await axios.get(`${environment.apiUrl}/doctype/all`).then((res) => {
          setDocTypes(res.data.sort((a: any, b: any) => a.id - b.id));
          setValue('enterprise_id', res.data[0].id);
        });
      };
      getDocTypes();
    }

    if (!entreprises) {
      const getEnterprises = () => {
        axios.get(`${environment.apiUrl}/enterprise/all`).then((res) => {
          setEnterprises(res.data.sort((a: any, b: any) => a.id - b.id));
        });
      };
      getEnterprises();
    }
  }, []);
  return (
    <div className="sm:p-8 p-2">
      <h1 className="text-4xl ">
        {props.formState === 1 ? 'Crear persona' : 'Actualizar persona'}
      </h1>
      <div className="mt-10">
        <form
          className="max-w-xl bg-white mx-auto max-sm:text-sm shadow px-5 py-10 rounded-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-4 items-center  place-content-center">
            <span className="w-44 text-start ">Nombres:</span>
            <input
              {...register('name', {
                required: true,
                pattern: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/,
              })}
              className={`w-52 bg-gray-200 p-2 rounded outline-none ${
                errors.name && 'outline-red-400 outline-1'
              }`}
              type="text"
              placeholder="Juan"
            />
          </div>
          <div className="flex gap-4 items-center mt-5 place-content-center">
            <span className="w-44 text-start">Apellidos:</span>
            <input
              {...register('lastName', {
                required: true,
                pattern: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/,
              })}
              className={`w-52 bg-gray-200 p-2 rounded outline-none ${
                errors.lastName && 'outline-red-400 outline-1'
              }`}
              type="text"
              placeholder="Perez"
            />
          </div>
          <div className="flex gap-4 items-center mt-5 place-content-center">
            <span className="w-44 text-start">Correo:</span>
            <input
              {...register('emailAddress', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              className={`w-52 bg-gray-200 p-2 rounded outline-none ${
                errors.emailAddress && 'outline-red-400 outline-1'
              }`}
              type="text"
              placeholder="juan@gmail.com"
            />
          </div>

          <div className="flex gap-4 items-center mt-5 place-content-center">
            <span className="w-44 text-start ">Tipo de documento:</span>
            <select
              {...register('docType_id', { required: true })}
              defaultValue={'docType'}
              className="w-52 bg-gray-200 p-2 rounded outline-none"
            >
              {docTypes?.map((doc: DocType) => (
                <option key={doc.id} value={doc.id}>
                  {doc.description}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-4 items-center mt-5 place-content-center">
            <span className="w-44 text-start">Número de documento:</span>
            <input
              {...register('docNumber', {
                required: true,
                pattern: docType == 1 ? /^[0-9]+$/i : /^[A-Za-z0-9]+$/i,
                validate: validateInput,
              })}
              className={`w-52 bg-gray-200 p-2 rounded outline-none ${
                errors.docNumber && 'outline-red-400 outline-1'
              }`}
              type="text"
              placeholder="78654321"
            />
          </div>
          <div className="flex gap-4 items-center mt-5 place-content-center">
            <span className="w-44 text-start">Número de celular:</span>
            <input
              {...register('phoneNumber', {
                required: true,
                minLength: 9,
                maxLength: 9,
                pattern: /^[9][0-9]*$/,
              })}
              className={`w-52 bg-gray-200 p-2 rounded outline-none ${
                errors.phoneNumber && 'outline-red-400 outline-1'
              }`}
              type="text"
              placeholder="987654321"
            />
          </div>
          <div className="flex gap-4 items-center mt-5 place-content-center">
            <span className="w-44 text-start">Empresa:</span>
            <select
              {...register('enterprise_id', { required: true })}
              defaultValue={'docType'}
              className="w-52 bg-gray-200 p-2 rounded outline-none"
            >
              {entreprises?.map((enterprise: Enterprise) => (
                <option key={enterprise.id} value={enterprise.id}>
                  {enterprise.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-around mt-10 gap-4">
            <Link to="/personas">
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
    </div>
  );
};
