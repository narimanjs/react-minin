import React from 'react';
import Button from './Button/Button';
import Modal from './Modal/Modal';

function EffectSection() {
  return (
    <section>
      <h3>Effects</h3>
      <Button>Открыть информацию</Button>
      <Modal>
        <h3>Hello from Modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ipsam
          harum facere optio iure soluta, sint, cupiditate eum repellat tempora
          atque minus perspiciatis neque pariatur? Natus aliquam recusandae
          maxime earum.
        </p>
      </Modal>
    </section>
  );
}

export default EffectSection;
