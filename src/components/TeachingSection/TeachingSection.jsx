import WayToTeach from '../WayToTeach/WayToTeach';
import styles from './TeachingSearch.module.css';
import { ways } from './../../data';

const TeachingSection = () => {
  return (
    <>
      <section className={styles['section']}>
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
    </>
  );
};

export default TeachingSection;
