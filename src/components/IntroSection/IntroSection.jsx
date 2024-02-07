import styles from './IntroSection.module.css';
function IntroSection() {
  return (
    <section>
      <h1 className={styles['centered']}>Nariman University</h1>
      <h3 style={{ color: '#666', padding: '10px ', textAlign: 'center' }}>
        Университет frontend-разработки, который насыщает IT-сферу
        квалифицированными программистами
      </h3>
      <div className={styles['parent']}>
        block 1<div className={styles['child']}>block 2</div>
      </div>
      <div className={styles['flex']}>
        <div className={styles['elem']}>elem 1</div>
        <div className={styles['elem']}>elem 2</div>
        <div className={styles['elem']}>elem 3</div>
      </div>
    </section>
  );
}

export default IntroSection;
