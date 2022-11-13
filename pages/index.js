import { server } from "../config/index";
import Head from "next/head";
import Title from "../component/Home/title";
import Picture from "../component/Home/Image";
import User from "../component/Home/User";
import BottomNavigator from "../component/Home/BottomNavigator";
import styles from "../styles/Home/Title.module.css";
import Cookie from "js-cookie";
import Audio from "../component/Home/Audio";

function Homes({ response }) {
  let name = Cookie.get("name");
  let data = response.message.filter((data) => data.name == name);
  const src =
    "https://dl.dropbox.com/s/kzov0kl645gvavj/Whitney%20Houston%20-%20I%20Will%20Always%20Love%20You%20%28Official%204K%20Video%29.mp3?dl=0";
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Title leftSide={<User data={data} />}>
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
