import StarIcon from './image/icon-star.svg';
import styles from './raiting.module.css';
import cn from 'classnames';
import {useStore} from '../layout.context.jsx';
import {useEffect, useRef, useState} from 'react';

export default function Rating() {

  const [disable, setDisable] = useState(true);
  const {active, setActive, state, setState} = useStore();
  const ref = useRef();
  const ratingRang = [1, 2, 3, 4, 5];

  useEffect(() => {
    if (active !== 0) {
      setDisable(false);
    }
  }, [active]);

  useEffect(() => {
    const clickOutside = (event) => {
      // Проверяем, что клик произошел вне компонента
      if (ref.current && !ref.current.contains(event.target)) {
        // Сбрасываем состояние компонента, например, закрываем его
        setDisable(true);
        setActive(0);
      }
      if (active !== 0) {
        setDisable(false);
      }
    };

    // Добавляем слушатель для глобального события клика
    document.addEventListener('click', clickOutside);
    // Удаляем слушатель при размонтировании компонента
    return () => {
      document.removeEventListener('click', clickOutside);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <img className={styles.round} src={StarIcon} alt="star"/>
      <h1>How did we do?</h1>
      <p>
                Please let us know how we did with your support request. All feedback is appreciated to help us
                improve our offering!
      </p>
      <ul ref={ref}>
        {ratingRang.map((r) =>
          <li
            key={r}
            onClick={() => setActive(r)}
            className={cn(styles.round, {
              [styles.ratingRangActive]: active === r
            })}>
            {r}
          </li>
        )}
      </ul>
      <button disabled={disable} onClick={() => setState(!state)}>submit</button>
    </div>
  );
}