import { server } from "../config/index";
import Head from "next/head";
import Title from "../component/Home/title";
import Picture from "../component/Home/Image";
import Write from "../component/Home/WriteIcon";
import BottomNavigator from "../component/Home/BottomNavigator";
import styles from "../styles/Home/Title.module.css";
import Cookie from "js-cookie";
import Audio from "../component/Home/Audio";

function Homes({ response }) {
  let name = Cookie.get("name");
  let data = response.message.filter((data) => data.name == name);
  console.log(response);
  const src =
    "https://dl.dropbox.com/s/q4tw1qorwwoi5kc/Crying%20Alone%20-%20Sad%20%26%20Emotional%20Piano%20Song%20Instrumental.mp3?dl=0";
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Title leftSide={<Write data={data} />}>
        <Audio styling={styles.Audio} source={src} />
      </Title>
      <Picture />
      <BottomNavigator />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const host = req.headers.host;
  let data = await fetch(`${server}${host}/api/users/find`);
  let response = await data.json();
  return {
    props: {
      response,
    },
  };
}
export default Homes;
