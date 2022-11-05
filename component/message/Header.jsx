import { useState } from "react";
import style from "../../styles/Message/Header.module.css";
import Audio from "../Home/Audio";
import styles from "../../styles/Home/Title.module.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header({ day, date, starred, id, time, musicLink }) {
  const [star, setStar] = useState(starred);
  let src =
    "https://dl.dropbox.com/s/odwgcxty6ht11jr/Y2Mate.is%20-%20IF%20ONLY%20YOU%20KNEW%20HOW%20MUCH%20I%20LOVE%20YOU%20%20by%20Efisio%20Cross-PkG3yxQDLBI-160k-1660320316071.mp3?dl=0";
  const updateStarred = async (id) => {
    await fetch(`/api/confession/starred/${id}`, {
      method: "POST",
      body: JSON.stringify({ starred: !star }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setStar(!star);
  };
  return (
    <div className={style.container}>
      <Audio source={musicLink || src} styling={styles.Audio} />

      <h2>
        <sub style={{ color: "crimson" }}>{time}</sub>{" "}
        <span className={style.day}>{day},</span> {date}
      </h2>
      <FontAwesomeIcon
        icon={faStar}
        color={star ? "yellow" : "white"}
        onClick={() => updateStarred(id)}
      />
    </div>
  );
}

export default Header;
