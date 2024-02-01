import cn from 'classnames';
import styles from './ButtonSecondary.module.css';
const ButtonSecondary = ({ children, onClick, isActive }) => {
  return (
    <button
      className={cn(styles.button, { [styles.active]: isActive })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
