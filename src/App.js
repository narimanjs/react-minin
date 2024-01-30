import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import WayToTeach from './components/WayToTeach/WayToTeach';
import { ways, differences } from './data';
import React from 'react';
import { useState } from 'react';

function App() {
  const [contentType, setContentType] = useState();

  function handleClick(type) {
    setContentType(type);
  }
  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Наш подход к обучению: </h3>
          <ul>
            {ways.map(way => (
              <WayToTeach
                key={ways.title}
                {...ways}
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
        {/* {contentType ? (
          <p>{differences[contentType]}</p>
        ) : (
          <div>Нажми на кнопку</div>
        )} */}
        {!contentType && <p>Нажми на кнопку</p>}
        {contentType && <p>{differences[contentType]}</p>}
      </main>
    </div>
  );
}

export default App;
