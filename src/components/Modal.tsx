import { FC, ReactNode } from 'react';


interface ModalProps {
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ children }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black opacity-75 z-10"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 p-4 rounded-lg z-20">
      <h1 className='text-white text-3xl font-bold my-8 text-center'>Veja o vídeo em sua rede social favorita!</h1>
        {children}
        <div className="flex justify-end mt-4">
        </div>
      </div>
    </>
  );
};

export default Modal;
