import { useState, useRef, useEffect } from "react";
import Diary from "../component/Diary/Diary";
import { server } from "../config/index";

function diary({ confessions }) {
  const [confess, setConfess] = useState([]);
  const [deleteData, setDeleteData] = useState({});
  const update = useRef((value) => {
    setTimeout(() => {
      setDeleteData(value);
    }, 0);
  }).current;
  useEffect(() => {
    setConfess(confessions.confession);
  }, []);
  console.log(confess);
  return (
    <>
      <Diary
        data={confess}
        deleteData={deleteData}
        setDeleteData={update}
        setConfess={setConfess}
        confess={confess}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const response = await fetch(`${server}${req.headers.host}/api/find`);
  const data = await response.json();
  return {
    props: { confessions: data },
  };
}
export default diary;
