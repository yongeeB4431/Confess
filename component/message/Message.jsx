import Head from "next/head";
import Confession from "./Confession";
import Header from "./Header";
import Title from "./Title";
import BottomNav from "../Home/BottomNavigator";

function Message({ confession }) {
  const {
    time,
    day,
    date,
    editHistory,
    title,
    yourConfession,
    starred,
    _id,
    musicLink,
  } = confession;
  return (
    <main>
      <Head>
        <title>confession</title>
      </Head>
      <Header
        time={time}
        day={day}
        date={date}
        starred={starred}
        id={_id}
        musicLink={musicLink}
      />
      <Title title={title} editHistory={editHistory} id={_id} />
      <Confession confession={yourConfession} />
      <BottomNav />
    </main>
  );
}

export default Message;
