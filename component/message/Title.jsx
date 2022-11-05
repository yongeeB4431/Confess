import Link from "next/link";
import Cookie from "js-cookie";
import style from "../../styles/Message/Title.module.css";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Title({ title, editHistory, id }) {
  let name = Cookie.get("username");
  return (
    <div className={style.container}>
      <Link href={`/edit/${id}`}>
        <a style={{ textDecoration: "none" }}>
          <FontAwesomeIcon
            icon={faHistory}
            color={editHistory.length < 4 ? "green" : "red"}
            className={style.history}
          />
          <sub
            style={{
              fontStyle: "italic",
              fontSize: "12px",
              fontWeight: "bold",
              color: "gray",
              fontFamily: "Open Sans",
            }}
          >
            {editHistory.length}
          </sub>
        </a>
      </Link>
      <h1 className={style.title}>{title}</h1>
      <Link
        href={
          editHistory.length < 4 ? `/edit/confession/${id}` : `/message/${id}`
        }
      >
        <span
          className={style.edit}
          style={{ background: editHistory.length ? "green" : "red" }}
        >
          edit
        </span>
      </Link>
    </div>
  );
}

export default Title;
