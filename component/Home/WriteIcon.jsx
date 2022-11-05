import Link from "next/link";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Write({ data }) {
  return (
    <main>
      <Link href={`/profile/${data[0]._id}`}>
        <div className="pictureContainer">
          {data[0].picture ? (
            <img src={data[0].picture}></img>
          ) : (
            <FontAwesomeIcon
              icon={faUser}
              color="crimson"
              style={{
                fontSize: "24px",
              }}
            />
          )}
        </div>
      </Link>
      <style jsx>
        {`
          h1 {
            color: red;
          }
          div {
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            border-bottom: 1px solid crimson;
            box-shadow: 0px 0px 15px rgba(220, 20, 60, 0.2);
          }
          img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            opacity: 20%;
          }
        `}
      </style>
    </main>
  );
}

export default Write;
