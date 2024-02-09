import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

function Modal({ children, open }) {
  const [modalRoot, setModalRoot] = useState(null);

  useEffect(() => {
    const modalRoot = document.createElement('div');
    modalRoot.classList.add('modal-root');
    document.body.appendChild(modalRoot);
    setModalRoot(modalRoot);

    return () => {
      document.body.removeChild(modalRoot);
    };
  }, []);

  if (!modalRoot) return null;

  return createPortal(
    <dialog
      open={open}
      className='effect'
    >
      {children}
    </dialog>,
    modalRoot
  );
}

export default Modal;
