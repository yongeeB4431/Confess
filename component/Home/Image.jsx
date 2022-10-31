import style from "../../styles/Home/Image.module.css";
import Confess from "./Confession";

function Img() {
  return (
    <div className={style.scrollBar}>
      <div className={style.image}>
        <Confess />
      </div>
    </div>
  );
}

export default Img;
