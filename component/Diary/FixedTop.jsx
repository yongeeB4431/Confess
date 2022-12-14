import Router from "next/router";
import styles from "../../styles/Diary/FixedTop.module.css";
import Audio from "../Home/Audio";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookie from "js-cookie";

function FixedTop({ handleToggle, toggle, _user }) {
  const name = Cookie.get("name");
  const src =
    "https://dl.dropbox.com/s/kzov0kl645gvavj/Whitney%20Houston%20-%20I%20Will%20Always%20Love%20You%20%28Official%204K%20Video%29.mp3?dl=0";
  return (
    <main className={styles.fixedTop}>
      <div className={styles.Container}>
        <h1
          style={{ cursor: "pointer" }}
          onClick={() => {
            Router.push(`/profile/${_user[0]._id}`);
          }}
        >
          {name}
          <FontAwesomeIcon icon={faMessage} className={styles.icon} />
        </h1>
        <div className={styles.select}>
          <h5 className={styles.order} onClick={handleToggle}>
            {toggle ? "Oldest First" : "Newest First"}
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
