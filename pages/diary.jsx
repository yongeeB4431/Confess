import Cookie from "js-cookie";
import { useState, useRef, useEffect } from "react";
import Diary from "../component/Diary/Diary";
import { server } from "../config/index";

function diary({ confessions, _users }) {
  const [confess, setConfess] = useState([]);
  const [deleteData, setDeleteData] = useState({});
  let name = Cookie.get("name");
  let user = _users.message.filter((user) => user.name == name);
  const update = useRef((value) => {
    setTimeout(() => {
      setDeleteData(value);
    }, 0);
  }).current;
  useEffect(() => {
    setConfess(confessions.confession);
  }, [confessions.confession.length]);
  return (
    <>
      <Diary
        data={confess}
        deleteData={deleteData}
        setDeleteData={update}
        setConfess={setConfess}
        confess={confess}
        _user={user}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const response = await fetch(`${server}${req.headers.host}/api/find`);
  const data = await response.json();
  const users = await fetch(`${server}${req.headers.host}/api/users/find`);
  let _users = await users.json();
  return {
    props: { confessions: data, _users },
  };
}
export default diary;
