import { useRouter } from "next/router";
import Delete from "../Delete/Delete";
import { useState, useEffect } from "react";
import BottomNav from "../Home/BottomNavigator";
import Confessions from "./Confessions";
import FixedTop from "./FixedTop";
import Head from "next/head";
import DataNotFound from "../DataNotFound/DataNotFound";

function Diary({ data }) {
  const [order, setOrder] = useState([]);
  // const [del, setDel] = useState(false)
  const [delIcon, setDelIcon] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [confession, setConfession] = useState({});

  const handleDelete = async ({ _id, title }) => {
    setDelIcon(true);
    setConfession({ _id, title });
  };
  const handleToggle = () => {
    if (!toggle) {
      setOrder((prevData) => [...prevData].reverse());
      setToggle(!toggle);
    } else {
      setOrder((prevData) => [...prevData]);
      setToggle(!toggle);
    }
  };

  const handleX = () => {
    setDelIcon(false);
  };

  const handleCheck = async () => {
    await fetch(`/api/confession/delete/${confession._id}`);
    setDelIcon(false);
    setOrder(order.filter((o) => o._id !== confession._id));
  };
  useEffect(() => {
    setOrder([...data]);
  }, [data.length]);
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };
  return (
    <>
      <Head>
        <title>confessions</title>
      </Head>
      <FixedTop handleToggle={handleToggle} toggle={toggle} />
      {data.length > 0 ? (
        <Confessions
          confessions={order}
          handleDelete={handleDelete}
          delIcon={delIcon}
        />
      ) : (
        <DataNotFound />
      )}
      {delIcon && (
        <Delete del={{ handleCheck, handleX, title: confession.title }} />
      )}
      <BottomNav />
    </>
  );
}

export default Diary;
