import { useState } from 'react';
import WayToTeach from '../WayToTeach/WayToTeach';
import Button from '../Button/Button';
import { ways, differences } from './../../data';

const TeachingSection = () => {
  const [contentType, setContentType] = useState();

  function handleClick(type) {
    setContentType(type);
  }
  return (
    <>
      <section>
        <h3>Наш подход к обучению: </h3>
        <ul>
          {ways.map(way => (
            <WayToTeach
              key={way.title}
              {...way}
            />
          ))}
        </ul>
      </section>
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

export default TeachingSection;
