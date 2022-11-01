import Link from "next/link";
import style from "../../styles/Home/WriteIcon.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Write(props) {
  return (
    <div className={style.iconContainer}>
      <div className={style.centerPencil}>
        <Link href={props.link} prefetch={true}>
          <FontAwesomeIcon
            icon={props.iconName}
            className={style.icon}
            onClick={props.sendData}
          />
        </Link>
      </div>
    </div>
  );
}

export default Write;
