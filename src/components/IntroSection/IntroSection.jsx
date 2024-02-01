import styles from './IntroSection.module.css';
function IntroSection() {
  return (
    <section>
      <h1 className={styles['centered']}>Nariman University</h1>
      <h3 style={{ color: '#666', padding: '10px ', textAlign: 'center' }}>
        Университет frontend-разработки, который насыщает IT-сферу
        квалифицированными программистами
      </h3>
    </section>
  );
}

export default IntroSection;
