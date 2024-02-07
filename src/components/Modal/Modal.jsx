import styles from './Modal.module.css';

function Modal({ children }) {
  return (
    <dialog
      open
      className={styles['effect']}
    >
      {' '}
      {children}
    </dialog>
  );
}

export default Modal;
