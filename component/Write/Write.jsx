import write from "../../styles/Home/WriteIcon.module.css";
import Router from "next/router";
import Head from "next/head";
import { useState } from "react";
import Title from "../Home/title";
import Input from "./Input";
import BottomNavigator from "../Home/BottomNavigator";
import Audio from "../Home/Audio";
import styles from "../../styles/Home/Title.module.css";
import style from "../../styles/Input/Write.module.css";
import { Request } from "../../request/request";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { DateAndTime } from "../../functions/DateAndTime";
import Cookie from "js-cookie";

function Write() {
  const [title, setTitle] = useState("");
  const [yourConfession, setYourConfession] = useState("");
  const [activeNavBar, setActiveNavBar] = useState(true);
  const d = new DateAndTime();
  let TCL = title.length >= 7 && yourConfession.length >= 10;
  function sendData() {
    const { day, Date, time } = d.handleData();
    const name = Cookie.get("name");
    new Request("/api/confession/create").createNewCofession(
      day,
      Date,
      time,
      title,
      yourConfession,
      name
    );
    Router.push("/diary");
  }

  // confirm title and confession length before sending into database

  const src =
    "https://dl.dropbox.com/s/8377unyfvmh3zs1/Beautiful%20Sad%20Piano%20Instrumental%20Song%20-%20Everywhere.mp3?dl=0";

  return (
    <main className={style.container}>
      <Head>
        <title>write</title>
      </Head>
      <Title leftSide={<Audio styling={styles.Audio} source={src} />}>
        <div className={write.iconContainer}>
          <div className={write.centerPencil}>
            <FontAwesomeIcon
              className={write.icon}
              icon={faPaperPlane}
              onClick={TCL && sendData}
            />
          </div>
        </div>
      </Title>
      <Input
        inputProps={{ title, yourConfession, setTitle, setYourConfession }}
        setActiveNavBar={setActiveNavBar}
      />
      {activeNavBar && <BottomNavigator />}
    </main>
  );
}

export default Write;
