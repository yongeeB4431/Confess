import Link from "next/link";
import { faPencil, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ViewPicture({ id, picture }) {
  return (
    <>
      <div className="container">
        <Link href={`/editInfo/${id}`}>
          <FontAwesomeIcon
            icon={faPencil}
            style={{
              fontSize: "20px",
              borderBottom: "3px solid crimson",
              padding: "5px",
              borderRadius: "10px",
            }}
            color="gray"
          />
        </Link>
        {picture ? (
          <Link href={`/picture/${id}`}>
            <h6>View Picture</h6>
          </Link>
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
      <style jsx>
        {`
          .container {
            margin: 20px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          h6 {
            color: white;
            align-items: right;
            font-family: "Open Sans";
            background: crimson;
            opacity: 70%;
            padding: 5px;
            border-radius: 15px;
          }
          .container .icon {
            color: crimson;
            font-size: 24px;
          }
        `}
      </style>
    </>
  );
}

export default ViewPicture;
