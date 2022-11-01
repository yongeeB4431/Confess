import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Edit/Header.module.css";
import Link from "next/link";
function Header({ title, editLength, id }) {
  return (
    <div className={styles.container}>
      <Link href={`/message/${id}`}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          color="white"
          className={styles.arrow}
        />
      </Link>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.editLength}>
        <h3>{editLength}</h3>
      </div>
    </div>
  );
}

export default Header;
