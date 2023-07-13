import styles from './success.module.css'
import successIcon from './image/illustration-thank-you.svg';
import {useStore} from '../layout.context.jsx';

export default function Success() {

  const {active, setActive, state, setState} = useStore();

  return (
    <div className={styles.wrapper}>
      <img className={styles.successIcon} src={successIcon} alt=""/>
      <span className={styles.subTitle}>You selected {active} out of 5</span>
      <h1>Thank you!</h1>
      <p>
                We appreciate you taking the time to give a rating. If you ever need more support,
                don’t hesitate to get in touch!
      </p>
      <button onClick={() => {
        setState(!state);
        setActive(0);
      }}>again
      </button>
    </div>
  );
} 