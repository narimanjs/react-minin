import Button from '../Button/Button';
import styles from './TabsSecion.module.css';
function TabsSection({ active, onChange }) {
  return (
    <section className={styles['tab']}>
      <Button
        isActive={active === 'main'}
        onClikkk={() => onChange('main')}
      >
        Главная
      </Button>
      <Button
        isActive={active === 'feedback'}
        onClikkk={() => onChange('feedback')}
      >
        Обратная связь
      </Button>
    </section>
  );
}

export default TabsSection;
