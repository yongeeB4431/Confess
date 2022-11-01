import style from "../../styles/Message/Confession.module.css";
import { Typewriter } from "react-simple-typewriter";
import styles from "../../styles/Home/Image.module.css";

function Confession({ confession }) {
  return (
    <div className={styles.scrollBar}>
      <div className={style.container}>
        <p>
          <Typewriter typeSpeed={300} words={[confession]} />
        </p>
      </div>
    </div>
  );
}

export default Confession;
