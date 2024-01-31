import styles from './Button.module.css';
import cn from 'classnames';
function Button({ children, onClikkk, isActive }) {
  return (
    <button
      className={cn(styles.button, { [styles.active]: isActive })}
      onClick={onClikkk}
    >
      {children}
    </button>
  );
}

export default Button;
