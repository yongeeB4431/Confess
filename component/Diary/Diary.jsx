import Cookie from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NProgress from "nprogress";
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
  const handleDelete = async ({ _id, title, user }) => {
    let CName = Cookie.get("name");
    if (user == CName) {
      setDelIcon(true);
      setConfession({ _id, title, user });
    } else {
      toast.warn(`Can't delete confession written by ${user}`, {
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
    NProgress.start();
    await fetch(`/api/confession/delete/${confession._id}`);
    setDelIcon(false);
    setOrder(order.filter((o) => o._id !== confession._id));
    NProgress.done();
  };
  useEffect(() => {
    setOrder([...data]);
  }, [data.length]);

  return (
    <>
      <Head>
        <title>confessions</title>
      </Head>
      <ToastContainer />
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
        <Delete
          del={{
            handleCheck,
            handleX,
            title: confession.title,
          }}
        />
      )}
      <BottomNav />
    </>
  );
}

export default Diary;
