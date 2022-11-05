import Router from "next/router";
import { useState } from "react";
import Cookie from "js-cookie";
import { server } from "../config/index";
function Login({ response }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    response.message.map((data) => {
      if (data.user == username && data.password == password) {
        Cookie.set("name", data.name);
        setMessage("Authenticating User");
        Router.push("/");
        setPassword("");
        return;
      } else {
        setMessage("username or password is incorrect");
      }
    });
  };

  return (
    <main>
      <h2>Confession</h2>
      <div>
        <div className="flex">
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
          <button type="submit" onClick={handleSubmit}>
            submit
          </button>
        </div>
        <p>{message}</p>
      </div>
      <style jsx>
        {`
          main {
            width: 100%;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
          h2 {
            color: transparent;
            text-transform: uppercase;
            font-family: "Open Sans";
            text-align: center;
            opacity: 30%;
            letter-spacing: 0.2em;
            background: linear-gradient(crimson, transparent);
            background-clip: text;
            -webkit-background-clip: text;
          }
          .flex {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .flex input {
            width: 50%;
            height: 25px;
            margin: 10px 0;
            background: transparent;
            border: none;
            outline: none;
            box-shadow: 1px 1px 5px rgba(220, 20, 60, 0.5);
            border-radius: 10px;
            padding: 10px;
            color: crimson;
            font-size: 20px;
            font-family: "Fira Code";
            transition: all 1s linear 0.5s;
          }
          .flex input:hover {
            box-shadow: 1px 1px 5px purple;
            color: white;
            opacity: 50%;
          }
          .flex input::placeholder {
            color: gray;
            font-family: "Fira Code";
            font-style: italic;
            font-size: 18px;
          }
          button {
            border-radius: 20px;
            padding: 9px;
            border: none;
            font-size: 16px;
            font-family: "Open Sans";
            color: white;
            background: rgba(220, 20, 60, 0.5);
            transition: all 1s linear 0.5s;
          }
          button:hover {
            background: transparent;
            color: crimson;
            box-shadow: 1px 1px 5px rgba(220, 20, 60, 0.5);
          }
          p {
            color: red;
            text-align: center;
            margin: 10px 0;
            font-family: "Fira Code";
            opacity: 70%;
          }
        `}
      </style>
    </main>
  );
}
export async function getServerSideProps(context) {
  const { req } = context;
  const host = req.headers.host;
  try {
    let data = await fetch(`${server}${host}/api/users/find`);
    let response = await data.json();
    return {
      props: {
        response,
      },
    };
  } catch (err) {
    return {
      props: 1,
    };
  }
}
export default Login;
