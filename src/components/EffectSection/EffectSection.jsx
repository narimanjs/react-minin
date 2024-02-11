import React, { useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

import styles from './EffectSection.module.css';

export default function EffectSection() {
  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(true);
  }
  function closeModal() {
    setModal(false);
  }
  return (
    <section className={styles['section']}>
      <h3>Effects</h3>
      <Button onClikkk={openModal}>Открыть информацию</Button>
      <Modal open={modal}>
        <div className={styles['effect']}>
          <h3>Hello from Modal</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ipsam
            harum facere optio iure soluta, sint, cupiditate eum repellat
            tempora atque minus perspiciatis neque pariatur? Natus aliquam
            recusandae maxime earum.
          </p>
        </div>
        <Button onClikkk={closeModal}>Close Modal</Button>
      </Modal>
    </section>
  );
}
