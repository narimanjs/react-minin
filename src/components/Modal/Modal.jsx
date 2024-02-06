import React from 'react';

function Modal({ children }) {
  return <dialog open> {children}</dialog>;
}

export default Modal;
