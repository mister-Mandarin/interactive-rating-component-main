import styles from './App.module.css';
import Rating from './raitiing/rating.jsx';
import Success from './success/success.jsx';
import {useStore} from './layout.context.jsx';

export default function App() {

  const {state} = useStore();

  return (
    <div className={styles.wrapper}>
      {state ? <Rating/> : <Success/>}
    </div>
  )
}
