import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "next/router";
import Link from "next/link";
import Cookie from "js-cookie";
import style from "../../styles/Message/Title.module.css";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Title({ title, editHistory, id, user }) {
  const handleEdit = () => {
    let CName = Cookie.get("name");
    if (CName == user) {
      if (editHistory.length < 4) {
        Router.push(`/edit/confession/${id}`);
      } else {
        Router.push(`/message/${id}`);
      }
    } else {
      toast.info(`Can't edit confession written by ${user}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <div className={style.container}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
      <div onClick={handleEdit}>
        <span
          className={style.edit}
          style={{
            background: editHistory.length ? "green" : "red",
            cursor: "pointer",
          }}
        >
          edit
        </span>
      </div>
    </div>
  );
}

export default Title;
