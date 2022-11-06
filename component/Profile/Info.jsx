import style from "../../styles/Home/Image.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
function Info({ data }) {
  const [len, setLength] = useState(0);
  useEffect(() => {
    (async () => {
      let name = Cookies.get("name");
      let data = await fetch("/api/find");
      let res = await data.json();
      let cLength = res.confession.filter((_data) => _data.user == name).length;
      setLength(cLength);
    })();
  }, []);

  const handleClick = () => {
    Cookies.remove("name");
  };

  return (
    <>
      <main className={style.scrollBar}>
        <div className="container">
          <div className="infoContainer">
            <h4>name: </h4>
            <h4> {data.name || "unknown"} </h4>
          </div>
          <div className="infoContainer">
            <h4>other names: </h4>
            <h4> {data.oNames || "unknown"} </h4>
          </div>
          <div className="infoContainer">
            <h4>D.O.B: </h4>
            <h4>{data.DOB || "unknown"}</h4>
          </div>
          <div className="infoContainer">
            <h4>Age: </h4>
            <h4>{data.age || "unknown"}</h4>
          </div>
          <div className="infoContainer">
            <h4>Rstatus: </h4>
            <h4>{data.rStatus || "unknown"}</h4>
          </div>
          <div className="infoContainer">
            <h4>contactNumber: </h4>
            <h4>{data.contactNumber || "unknown"}</h4>
          </div>
          <div className="infoContainer">
            <h4>Crush: </h4>
            <h4>{data.crush || "unknown"}</h4>
          </div>
          <div className="infoContainer">
            <h4>Favorite Person: </h4>
            <h4>{data.favoritePerson || "unknown"}</h4>
          </div>
          <div className="infoContainer">
            <h4>Favorite Food: </h4>
            <h4>{data.favoriteFood || "unknown"}</h4>
          </div>
          <div className="infoContainer">
            <h4>Favorite Club: </h4>
            <h4>{data.favoriteClub || "unknown"}</h4>
          </div>
          <div className="infoContainer">
            <h4>Written Confession: </h4>
            <h4>{len}</h4>
          </div>
          <Link href="/login" onClick={handleClick}>
            <div className="logout">
              <h4>Log Out</h4>
            </div>
          </Link>
        </div>
      </main>
      <style jsx>
        {`
          .container {
            margin: 20px 0px;
          }
          .infoContainer {
            display: flex;
            flex-direction: row;
            padding: 0 10px;
            opacity: 80%;
            margin: 20px 0;
          }
          .infoContainer h4 {
            color: gray;
            text-transform: capitalize;
          }
          .infoContainer h4:nth-child(2) {
            color: crimson;
            padding-left: 10px;
          }
          .logout {
            display: flex;
            justify-content: center;
            margin-bottom: 50px;
          }
          .logout h4 {
            color: gray;
            border: none;
            outline: none;
            box-shadow: 1px 1px 5px crimson;
            padding: 10px;
            border-radius: 20px;
          }
        `}
      </style>
    </>
  );
}

export default Info;
