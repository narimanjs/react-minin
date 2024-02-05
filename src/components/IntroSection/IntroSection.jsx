import styles from './IntroSection.module.css';
function IntroSection() {
  // Promise.reject('a')
  //   .catch(p => p + 'b')
  //   .catch(p => p + 'c')
  //   .then(p => p + 'd')
  //   .finally(p => p + 'e')
  //   .then(p => console.log(p));

  const obj = {
    x: 10,
    y: 20,
  };
  const prop = Object.keys(obj).reverse().join(' ');
  obj.xy = 30;
  obj.yx = 40;
  obj.x10y20 = 50;
  obj.y20x10 = 60;
  const result = obj[prop];
  console.log(result);
  console.log(0 || (1 && 2) || 3);

  function foo() {}
  foo.x = 10;
  console.log('foo', foo.x);
  return (
    <section>
      <h1 className={styles['centered']}>Nariman University</h1>
      <h3 style={{ color: '#666', padding: '10px ', textAlign: 'center' }}>
        Университет frontend-разработки, который насыщает IT-сферу
        квалифицированными программистами
      </h3>
      <div className={styles['parent']}>
        block 1<div className={styles['block2']}>block 2</div>
      </div>
      <div className={styles['flex']}>
        <div>elem 1</div>
        <div>elem 2</div>
        <div>elem 3</div>
      </div>
    </section>
  );
}

export default IntroSection;
