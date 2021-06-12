import React, { useState } from "react";
import styles from "./CardMaker.module.css";

function CardMaker({ addFootballer }) {
  // const [fullName, setfullName] = useState("");
  // const [position, setPosition] = useState("");
  // const [club, setClub] = useState("");

  const [player, setPlayer] = useState({
    fullName: "",
    position: "",
    club: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addFootballer(player);
    setPlayer({
      fullName: "",
      position: "",
      club: "",
    });
  };

  // const handleFullNameChange = (e) => {
  //   let fullName = e.target.value;
  //   setfullName(fullName);
  // };
  // const handlePositionChange = (e) => {
  //   let position = e.target.value;
  //   setPosition(position);
  // };
  // const handleClubChange = (e) => {
  //   let club = e.target.value;
  //   setClub(club);
  // };

  const handleChange = (e) => {
    let value = e.target.value;
    switch (e.target.name) {
      case "fullName":
        setPlayer({ ...player, fullName: value });
        // setfullName(value);
        console.log(player);
        break;
      case "position":
        setPlayer({ ...player, position: value });
        // setPosition(value);
        break;
      case "club":
        setPlayer({ ...player, club: value });
        // setClub(value);
        break;
      default:
    }
  };

  return (
    <>
      <form className={styles.cardMakerForm} onSubmit={handleSubmit}>
        <input
          className={styles.cardMakerInput}
          type="text"
          name="fullName"
          value={player.fullName}
          onChange={handleChange}
        />
        <input
          className={styles.cardMakerInput}
          type="text"
          name="position"
          value={player.position}
          onChange={handleChange}
        />
        <input
          className={styles.cardMakerInput}
          type="text"
          name="club"
          value={player.club}
          onChange={handleChange}
        />
        <input type="submit" value="Submit"></input>
      </form>
    </>
  );
}

export default CardMaker;
