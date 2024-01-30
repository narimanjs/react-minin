import { useState } from 'react';
import styles from './Header.module.css';

import logo from './../../vite.svg';

export default function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());
  setInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

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
