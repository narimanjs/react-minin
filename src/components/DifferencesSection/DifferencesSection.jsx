import { useState } from 'react';
import Button from '../Button/Button';
import { differences } from './../../data';

const DifferencesSection = () => {
  const [contentType, setContentType] = useState();

  function handleClick(type) {
    setContentType(type);
  }
  return (
    <>
      <section>
        <h3>Чем ты отличаемся от других?</h3>
        <Button
          isActive={contentType === 'way'}
          onClikkk={() => handleClick('way')}
        >
          Подход
        </Button>
        <Button
          isActive={contentType === 'easy'}
          onClikkk={() => handleClick('easy')}
        >
          Доступность
        </Button>
        <Button
          isActive={contentType === 'program'}
          onClikkk={() => handleClick('program')}
        >
          Концентрация
        </Button>
      </section>
      {!contentType && <p>Нажми на кнопку</p>}
      {contentType && <p>{differences[contentType]}</p>}
    </>
  );
};

export default DifferencesSection;
