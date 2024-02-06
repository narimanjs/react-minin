import Button from '../Button/Button';
import styles from './TabsSection.module.css';
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
      <Button
        isActive={active === 'effect'}
        onClikkk={() => onChange('effect')}
      >
        effect
      </Button>
    </section>
  );
}

export default TabsSection;
