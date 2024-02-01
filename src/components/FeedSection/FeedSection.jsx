import Button from '../Button/Button';
import style from './FeedSection.module.css';

const FeedSection = () => {
  return (
    <section>
      <h3 className={style['feedback']}>Обратная связь</h3>
      <form>
        <label htmlFor='name'>Ваше имя</label>
        <input
          type='text'
          id='name'
          className={style['control']}
        />
      </form>
      <label htmlFor='reason'>Причина обращения</label>
      <select
        id='reason'
        className={style['control']}
      >
        <option value='error'>Ошибка</option>
        <option value='help'>Помощь</option>
        <option value='suggest'>Предложение</option>
      </select>
      <Button>Отправить</Button>
    </section>
  );
};

export default FeedSection;
