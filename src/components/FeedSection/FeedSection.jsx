import { useState } from 'react';
import Button from '../Button/Button';
import style from './FeedSection.module.css';

const FeedSection = () => {
  const [form, setForm] = useState({
    name: '',
    hasError: false,
    reason: 'help',
  });

  function handleNameChange(event) {
    setForm(prev => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }));
  }
  return (
    <section>
      <h3 className={style['feedback']}>Обратная связь</h3>
      <form>
        <label htmlFor='name'>Ваше имя</label>
        <input
          type='text'
          id='name'
          className={style['control']}
          value={form.name}
          style={{
            border: form.hasError ? '1px solid red' : null,
          }}
          onChange={handleNameChange}
        />
      </form>
      <label htmlFor='reason'>Причина обращения</label>
      <select
        id='reason'
        className={style['control']}
        value={form.reason}
        onChange={event =>
          setForm(prev => ({ ...prev, reason: event.target.value }))
        }
      >
        <option value='error'>Ошибка</option>
        <option value='help'>Нужна помощь</option>
        <option value='suggest'>Предложение</option>
      </select>
      <Button
        disabled={form.hasError}
        isActive={!form.hasError}
      >
        Отправить
      </Button>
    </section>
  );
};

export default FeedSection;
