import { FC, ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ children }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black opacity-75 z-10"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg z-20">
        {children}
        <div className="flex justify-end mt-4">
        </div>
      </div>
    </>
  );
};

export default Modal;
