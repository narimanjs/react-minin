import { useState, useEffect } from 'react';
import styles from './Header.module.css';

import logo from './../../vite.svg';

export default function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Функция для обновления времени
    const updateTime = () => {
      setCurrentTime(new Date());
    };

    // Устанавливаем интервал обновления времени (в данном случае, каждую секунду)
    const intervalId = setInterval(updateTime, 1000);

    // Очищаем интервал при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []);
  return (
    <header className={styles['header']}>
      <div className={styles['leftContent']}>
        <img
          src={logo}
          alt='logo'
        />
        <h2 className={styles['header-title']}>Nariman University</h2>
      </div>
      <div className={styles['rightContent']}>
        <span>Time: {currentTime.toLocaleTimeString()}</span>
      </div>
    </header>
  );
}
