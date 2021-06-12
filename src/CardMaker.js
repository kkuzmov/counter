import React, { useState } from "react";
import styles from "./CardMaker.module.css";

function CardMaker({ addFootballer }) {
  const [fullName, setfullName] = useState("");
  const [position, setPosition] = useState("");
  const [club, setClub] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addFootballer(fullName, position, club);
    setfullName("");
    setPosition("");
    setClub("");
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
        setfullName(value);
        break;
      case "position":
        setPosition(value);
        break;
      case "club":
        setClub(value);
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
          value={fullName}
          onChange={handleChange}
        />
        <input
          className={styles.cardMakerInput}
          type="text"
          name="position"
          value={position}
          onChange={handleChange}
        />
        <input
          className={styles.cardMakerInput}
          type="text"
          name="club"
          value={club}
          onChange={handleChange}
        />
        <input type="submit" value="Submit"></input>
      </form>
    </>
  );
}

export default CardMaker;
