import write from "../../styles/Home/WriteIcon.module.css";
import { useRouter } from "next/router";
import Head from "next/head";
import { useState } from "react";
import Title from "../Home/title";
import Input from "./Input";
import BottomNavigator from "../Home/BottomNavigator";
import Audio from "../Home/Audio";
import styles from "../../styles/Home/Title.module.css";
import style from "../../styles/Input/Write.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { DateAndTime } from "../../functions/DateAndTime";
function Write({ data }) {
  const { query, push } = useRouter();
  const [yourConfession, setYourConfession] = useState(data.yourConfession);
  const [activeNavBar, setActiveNavBar] = useState(true);

  // confirm title and confession length before sending into database
  const src =
    "https://dl.dropbox.com/s/8377unyfvmh3zs1/Beautiful%20Sad%20Piano%20Instrumental%20Song%20-%20Everywhere.mp3?dl=0";

  const handleEdit = async () => {
    const d = new DateAndTime();
    const { Date: date, day, time } = d.handleData();
    let previousData = {
      yourConfession: data.yourConfession,
      date: data.date,
      day: data.day,
      time: data.time,
    };
    let newData = {
      yourConfession,
      date,
      day,
      time,
    };
    const DATA = await fetch(`/api/confession/edit/${query.id}`, {
      method: "POST",
      body: JSON.stringify(previousData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await DATA.json();
    let newestData = await fetch(`/api/confession/newData/${query.id}`, {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await newestData.json();
    push("/diary");
  };
  return (
    <main className={style.container}>
      <Head>
        <title>write</title>
      </Head>
      <Title leftSide={<Audio styling={styles.Audio} source={src} />}>
        <div
          className={write.iconContainer}
          onClick={Object.keys(data).length > 0 && handleEdit}
        >
          <div className={write.centerPencil}>
            <FontAwesomeIcon
              className={write.icon}
              icon={faPaperPlane}
              //   onClick={TCL && sendData}
            />
          </div>
        </div>
      </Title>
      <Input
        setActiveNavBar={setActiveNavBar}
        data={data}
        setYourConfession={setYourConfession}
        yourConfession={yourConfession}
      />
      {activeNavBar && <BottomNavigator />}
    </main>
  );
}

export default Write;
