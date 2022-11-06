import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/Delete/Delete.module.css";
function Delete({ del }) {
  return (
    <div className={styles.container}>
      <h3>
        Are you sure you want to delete{" "}
        <span style={{ opacity: "80%" }}>"{del.title}"?</span>
      </h3>
      <div className={styles.iconContainer}>
        <div className={styles.icon}>
          <FontAwesomeIcon
            icon={faCheck}
            className={styles.delete}
            onClick={del.handleCheck}
          />
          <FontAwesomeIcon
            icon={faX}
            className={styles.cancel}
            onClick={del.handleX}
          />
        </div>
      </div>
    </div>
  );
}

export default Delete;
