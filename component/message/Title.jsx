import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "next/router";
import Link from "next/link";
import Cookie from "js-cookie";
import style from "../../styles/Message/Title.module.css";
import { faHistory, faPencil } from "@fortawesome/free-solid-svg-icons";
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

  function handleHistory() {
    if (editHistory.length == 0) {
      toast.info(
        `Can't view the history of '${title}' because it has never been edited`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      return;
    }
    Router.push(`/edit/${id}`);
  }
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
      <div onClick={handleHistory}>
        <FontAwesomeIcon
          icon={faHistory}
          color={!editHistory.length == 0 ? "green" : "red"}
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
      </div>
      <h1 className={style.title}>{title}</h1>
      <FontAwesomeIcon
        icon={faPencil}
        color={!editHistory.length == 0 ? "green" : "red"}
        className={style.history}
        style={{ fontSize: "26px" }}
        onClick={handleEdit}
      />
      {/* <div onClick={handleEdit}>
        <span
          className={style.edit}
          style={{
            background: editHistory.length ? "green" : "red",
            cursor: "pointer",
          }}
        >
          edit
        </span>
      </div> */}
    </div>
  );
}

export default Title;
