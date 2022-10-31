import styles from "../../styles/Diary/FixedTop.module.css";
import Audio from "../Home/Audio";

import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FixedTop({ handleToggle, toggle }) {
  const src =
    "https://dl.dropbox.com/s/4gqatxg4zrc8hgz/Westlife%20-%20Queen%20Of%20My%20Heart%20%28Official%20Video%29%20%281%29.mp3?dl=0";
  return (
    <main className={styles.fixedTop}>
      <div className={styles.Container}>
        <h1>
          Inbox
          <FontAwesomeIcon icon={faMessage} className={styles.icon} />
        </h1>
        <div className={styles.select}>
          <h5 className={styles.order} onClick={handleToggle}>
            {toggle ? "Oldest first" : "Newest first"}
          </h5>
        </div>

        <div className={styles.AudioPadding}>
          <Audio source={src} styling={styles.Audio} />
        </div>
      </div>
    </main>
  );
}

export default FixedTop;
