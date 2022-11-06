import Link from "next/link";
import { useState } from "react";
import Router from "next/router";
import style from "../../styles/Home/Image.module.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookie from "js-cookie";

function Edit({ data }) {
  let d = data.data[0];
  const [name, setName] = useState(d.name || "");
  const [oNames, setOnames] = useState(d.oNames || "");
  const [DOB, setDOB] = useState(d.DOB || "");
  const [age, setAge] = useState(d.age || "");
  const [rStatus, setRstatus] = useState(d.rStatus || "");
  const [contactNumber, setContactNumber] = useState(d.contactNumber || "");
  const [crush, setCrush] = useState(d.crush || "");
  const [favoritePerson, setFavoritePerson] = useState(d.favoritePerson || "");
  const [favoriteFood, setFavoriteFood] = useState(d.favoriteFood || "");
  const [favoriteClub, setFavoriteClub] = useState(d.favoriteClub || "");

  const handleName = (e) => setName(e.target.value);

  const handleOnames = (e) => setOnames(e.target.value);

  const handleDOB = (e) => setDOB(e.target.value);

  const handleAge = (e) => setAge(e.target.value);

  const handleRstatus = (e) => setRstatus(e.target.value);

  const handleContactNumber = (e) => setContactNumber(e.target.value);

  const handleCrush = (e) => setCrush(e.target.value);

  const handleFavoritePerson = (e) => setFavoritePerson(e.target.value);

  const handleFavoriteClub = (e) => setFavoriteClub(e.target.value);

  const handleFavoriteFood = (e) => setFavoriteFood(e.target.value);

  const handleSave = async () => {
    let allData = {
      name,
      oNames,
      DOB,
      age,
      rStatus,
      contactNumber,
      crush,
      favoritePerson,
      favoriteFood,
      favoriteClub,
    };
    let data = await fetch(`/api/users/edit/${d._id}`, {
      method: "POST",
      body: JSON.stringify(allData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await data.json();
    if (d.name !== name) {
      let _response = await fetch(`/api/users/updateMany/${d.name}`, {
        method: "POST",
        body: JSON.stringify({ name: name }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await _response.json();
      let _data = await fetch(`/api/confession/updateMany/${d.name}`, {
        method: "POST",
        body: JSON.stringify({ user: name }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await _data.json();
      Cookie.set("name", name);
    }
    Router.push(`/profile/${d._id}`);
  };
  return (
    <>
      <main>
        <div className="saveContainer">
          <Link href={"/editInfo/${d._id}"}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
          <h4 onClick={handleSave}>save</h4>
        </div>
        <div
          className={style.scrollBar}
          style={{ height: "80vh", marginBottom: "50px" }}
        >
          <div className="inputContainer">
            <h4>Name</h4>
            <input name="name" value={name} onChange={handleName} />
          </div>
          <div className="inputContainer">
            <h4>Other names</h4>
            <input name="other names" value={oNames} onChange={handleOnames} />
          </div>
          <div className="inputContainer">
            <h4>D.O.B</h4>
            <input name="D.O.B" value={DOB} onChange={handleDOB} />
          </div>
          <div className="inputContainer">
            <h4>Age</h4>
            <input name="Age" value={age} onChange={handleAge} />
          </div>
          <div className="inputContainer">
            <h4>Rstatus</h4>
            <input name="rStatus" value={rStatus} onChange={handleRstatus} />
          </div>
          <div className="inputContainer">
            <h4>contact number</h4>
            <input
              name="contactNumber"
              value={contactNumber}
              onChange={handleContactNumber}
            />
          </div>
          <div className="inputContainer">
            <h4>Crush</h4>
            <input name="Crush" value={crush} onChange={handleCrush} />
          </div>
          <div className="inputContainer">
            <h4>Favorite Person</h4>
            <input
              name="Favorite Person"
              value={favoritePerson}
              onChange={handleFavoritePerson}
            />
          </div>
          <div className="inputContainer">
            <h4>Favorite Food</h4>
            <input
              name="Favorite Food"
              value={favoriteFood}
              onChange={handleFavoriteFood}
            />
          </div>
          <div className="inputContainer" style={{ marginBottom: "30px" }}>
            <h4>Favorite Club</h4>
            <input
              name="Favorite Club"
              value={favoriteClub}
              onChange={handleFavoriteClub}
            />
          </div>
        </div>
      </main>
      <style jsx>{`
        main {
          margin: 20px 20px;
        }
        .saveContainer {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .saveContainer h4 {
          color: whitesmoke;
          padding: 5px;
          box-shadow: 1px 1px 5px crimson;
          border-radius: 5px;
          font-weight: bold;
        }
        .inputContainer {
          display: flex;
          flex-direction: column;
          margin: 20px 0px;
          justify-content: center;
        }
        .inputContainer h4 {
          color: crimson;
          opacity: 40%;
          cursor: pointer;
        }
        .inputContainer input {
          background: black;
          outline: none;
          border: none;
          width: 50%;
          font-size: 18px;
          font-weight: bold;
          color: antiquewhite;
          padding: 5px;
          opacity: 50%;
          border-bottom: 1px solid crimson;
          border-radius: 10px;
          box-sizing: border-box;
          font-family: "Fira Code";
        }
      `}</style>
    </>
  );
}

export default Edit;
