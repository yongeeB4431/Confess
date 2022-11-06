import Image from "next/image";
import { useRouter } from "next/router";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { server } from "../../config";
function Picture({ data }) {
  const router = useRouter();
  return (
    <>
      <main>
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{
            margin: "20px 20px",
            fontSize: "30px",
            color: "white",
            position: "relative",
            zIndex: "10",
          }}
          onClick={() => router.back()}
        />
        <div>
          <img src={data.data[0].picture} />
        </div>
      </main>
      <style jsx>
        {`
          div {
            position: absolute;
            top: 50%;
            width: 100%;
            transform: translateY(-50%);
          }
          img {
            background: red;
            max-width: 100%;
            width: 100%;
            height: auto;
          }
          icon {
            color: red;
          }
        `}
      </style>
    </>
  );
}
export async function getServerSideProps(context) {
  const { req, query } = context;
  const host = req.headers.host;
  const id = query.id;
  const url = `${server}${host}/api/users/findOne/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
export default Picture;
