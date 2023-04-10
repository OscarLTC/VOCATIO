import './empresas.scss';

/* eslint-disable-next-line */
export interface EmpresasProps {}

export function Empresas(props: EmpresasProps) {
  return (
    <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
      <h1>Welcome to Empresas!</h1>
    </div>
  );
}

export default Empresas;
