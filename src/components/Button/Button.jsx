import styles from './Button.module.css';
import cn from 'classnames';
function Button({ children, onClikkk, isActive, disabled, ...props }) {
  return (
    <button
      {...props}
      className={cn(styles.button, { [styles.active]: isActive })}
      onClick={onClikkk}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
