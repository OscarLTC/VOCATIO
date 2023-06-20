import './state.scss';

/* eslint-disable-next-line */
export interface StateProps {
  stateId: number;
}

export function State(props: StateProps) {
  return props.stateId === 1 ? (
    <div className="text-xs w-fit px-2 py-1 text-slate-700 mx-auto bg-slate-300 rounded-lg">
      <div>Programado</div>
    </div>
  ) : props.stateId === 2 ? (
    <div className="text-xs w-fit px-2 py-1 text-white mx-auto bg-[#2aa645] rounded-lg">
      <div>Activo</div>
    </div>
  ) : props.stateId === 3 ? (
    <div className="text-xs w-fit px-2 py-1 text-white mx-auto bg-[#ff8b94] rounded-lg">
      <div>Finalizado</div>
    </div>
  ) : props.stateId === 4 ? (
    <div className="text-xs w-fit px-2 py-1 text-white mx-auto bg-[#2e3d28] rounded-lg">
      <div>Cancelado</div>
    </div>
  ) : null;
}

export default State;
