import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Router from "next/router";
import styles from "../styles/Login/Login.module.css";
import { useState } from "react";
import Cookie from "js-cookie";
import { server } from "../config/index";
function Login({ _data }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [authenticate, setAuthenticate] = useState(false);
  const [visibility, setVisibility] = useState(false);

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    let User = _data.message.filter(
      (data) => data.user == username && data.password == password
    );
    if (User.length == 1) {
      Cookie.set("name", User[0].name);
      setMessage("Authenticating User");
      Router.push("/");
    } else {
      setMessage("Username or password is incorrect");
    }
  };

  return (
    <main className={styles.container}>
      <h2>Confession</h2>
      <div>
        <div className={styles.formFields}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={handleUserName}
            autoComplete="off"
            autoCorrect="off"
          />
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              width: "100vw",
            }}
          >
            <input
              type={visibility ? "text" : "password"}
              placeholder="password"
              value={password}
              onChange={handlePassword}
              style={{ width: "50%", background: "#000000" }}
              maxLength="16"
              autoComplete="off"
              autoCorrect="off"
            />
            <FontAwesomeIcon
              icon={visibility ? faEyeSlash : faEye}
              onClick={() => setVisibility(!visibility)}
              className={styles.icon}
            />
          </div>
          <button className={styles.button} onClick={handleSubmit}>
            submit
          </button>
        </div>
        <p className={styles.paragraph}>{message}</p>
      </div>
    </main>
  );
}
export async function getServerSideProps(context) {
  try {
    const { req } = context;
    const host = req.headers.host;
    const path = `${server}${host}/api/users/find`;
    const data = await fetch(path);
    const _data = await data.json();
    return {
      props: {
        _data: _data,
      },
    };
  } catch (err) {
    return {
      props: {
        _data: [],
      },
    };
  }
}
export default Login;
