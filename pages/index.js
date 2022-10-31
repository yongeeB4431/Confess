import Head from "next/head"
import Title from "../component/Home/title";
import Picture from "../component/Home/Image";
import Write from "../component/Home/WriteIcon";
import BottomNavigator from '../component/Home/BottomNavigator'
import Audio from "../component/Home/Audio";
import {
	faPencil
  } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Home/Title.module.css";




function Homes(){
  const src = "https://dl.dropbox.com/s/q4tw1qorwwoi5kc/Crying%20Alone%20-%20Sad%20%26%20Emotional%20Piano%20Song%20Instrumental.mp3?dl=0"
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Title leftSide={<Write iconName={faPencil} link="/write" />}>
      <Audio styling={styles.Audio} source={src} />
      </Title>
     <Picture />
     <BottomNavigator  />
     </div>
  )
}



export default Homes;