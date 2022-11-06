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

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    _data.message.map((data) => {
      if (data.user == username && data.password == password) {
        setMessage("");
        Cookie.set("name", data.name);
        setAuthenticate(true);
        return;
      }
    });
    if (authenticate) {
      setMessage("Authenticating User");
      Router.push("/");
    } else {
      setMessage("username or password is incorrect");
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
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={handlePassword}
          />
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
    const data = await fetch(`${server}${host}/api/users/find`);
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
