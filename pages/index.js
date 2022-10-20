import Title from "./component/Home/title";
import Image from "./component/Home/Image";
import Write from "./component/Home/WriteIcon";
import BottomNavigator from './component/Home/BottomNavigator'
import Audio from "./component/Home/Audio";
import {
	faPencil
  } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Home/Title.module.css";
import holdon from '../pages/static/audio/hold_on.mp3'


function Homes(){
  return (
   
    <div>
      <Title leftSide={<Write iconName={faPencil} link="/write" />}>
      <Audio styling={styles.Audio} source={holdon}/>
      </Title>
     <Image />
     <BottomNavigator />
     </div>
  )
}

export default Homes;