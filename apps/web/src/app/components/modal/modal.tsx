import { useEffect, useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import './modal.scss';

/* eslint-disable-next-line */
export interface ModalProps {
  isOpen: boolean;
  item: string;
  message: string;
  onClose?: () => void;
  onConfirm?: () => void;
}

export function Modal(props: ModalProps) {
  const [isVisible, setIsVisible] = useState(props.isOpen);

  useEffect(() => {
    setIsVisible(props.isOpen);
  }, [props.isOpen]);

  const closeModal = () => {
    setIsVisible(false);
    props.onClose && props.onClose();
  };

  const confirmDelete = () => {
    props.onConfirm && props.onConfirm();
    closeModal();
  };

  return isVisible ? (
    <div className="fixed inset-0 z-50 overflow-y-auto backdrop-blur-md">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-gray-900 opacity-75"></div>
        <div className="relative bg-white w-1/4 rounded-lg">
          <TiDelete color="#e26e6e" size={70} className="mx-auto mt-2" />
          <div className="p-4">
            <h2 className="font-semibold">{props.message}</h2>
          </div>
          <div className="flex justify-around p-6">
            <button
              className="rounded-lg bg-[#e26e6e] py-1 px-4 text-white hover:bg-[#c55757]"
              onClick={closeModal}
            >
              Cancelar
            </button>
            <button
              className="rounded-lg bg-[#57c5a0] py-1 px-4 text-white hover:bg-[#518b7e]"
              onClick={confirmDelete}
            >
              Eliminar {props.item}
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default Modal;
