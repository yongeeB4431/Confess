import Link from "next/link";
import Cookie from "js-cookie";
import style from "../../styles/Message/Title.module.css";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Title({ title, editHistory, id }) {
  let name = Cookie.get("username");
  console.log(name);
  return (
    <div className={style.container}>
      <Link href={`/edit/${id}`} prefetch={true}>
        <a style={{ textDecoration: "none" }}>
          <FontAwesomeIcon
            icon={faHistory}
            color={editHistory.length > 0 ? "green" : "red"}
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
        href={{
          pathname: "/write",
          query: { id },
        }}
      >
        <span className={style.edit}>edit</span>
      </Link>
    </div>
  );
}

export default Title;
