import Link from "next/link";
import { faTrash, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/Diary/Confessions.module.css";
import style from "../../styles/Home/Image.module.css";
function cutWords(words, num) {
  return words.length <= num ? words : words.substring(words, num) + "...";
}
function handleMonth(month) {
  switch (month) {
    case "January":
      return 1;
    case "February":
      return 2;
    case "March":
      return 3;
    case "April":
      return 4;
    case "May":
      return 5;
    case "June":
      return 6;
    case "July":
      return 7;
    case "August":
      return 8;
    case "September":
      return 9;
    case "October":
      return 10;
    case "November":
      return 11;
    default:
      return 12;
  }
}
function Date(date) {
  let _date = date.split(" ");
  let day =
    _date[0].length == 4
      ? _date[0].charAt(0) + _date[0].charAt(1)
      : _date[0].charAt(0);
  let month = handleMonth(_date[1]);
  let year =
    _date[2].charAt(0) +
    _date[2].charAt(1) +
    _date[2].charAt(2) +
    _date[2].charAt(3);
  return `${day}/${month}/${year}`;
}
function Confessions({ confessions, handleDelete, delIcon }) {
  // _id, date, time, title, yourConfession, editHistory
  return (
    <div
      className={style.scrollBar}
      style={{ opacity: delIcon ? "30%" : "100%" }}
    >
      {confessions.map((confession) => {
        return (
          <div key={confession._id} className={styles.confessionBox}>
            <div className={styles.titleFavorite}>
              <h1 className={styles.title}>{confession.title}</h1>
              <FontAwesomeIcon
                icon={faStar}
                color={confession.starred ? "yellow" : "white"}
                className={styles.star}
              />
            </div>
            <Link href={`/message/${confession._id}`}>
              <a style={{ textDecoration: "none" }}>
                <div className={styles.confession}>
                  <p>
                    {cutWords(confession.yourConfession, 250)}
                    <span style={{ color: "green" }}>
                      {confession.yourConfession.length > 250 ? "see more" : ""}
                    </span>
                  </p>
                </div>
              </a>
            </Link>
            <div className={styles.dateEditedDelete}>
              <h5 className={styles.date}>{Date(confession.date)}</h5>
              <h5 className={styles.edited}>
                Edited:{" "}
                <span>
                  {confession.editHistory.length == 0
                    ? "none"
                    : confession.editHistory.length}
                </span>
              </h5>
              <FontAwesomeIcon
                icon={faTrash}
                color="red"
                onClick={() => handleDelete(confession)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Confessions;
