import React, { useState } from "react";
import styles from "./App.module.css";
import CardMaker from "./CardMaker";
import AllFootballers from "./AllFootballers";

function App() {
  const [footballers, setFootballers] = useState([]);

  const addFootballer = ({fullName, position, club}) => {
    setFootballers([...footballers, { name: fullName, position, club }]);
  };

  return (
    <div>
      <header className={styles.headerCardMaker}>Test some card making</header>
      <CardMaker addFootballer={addFootballer} />
      <h3>Footballers list:</h3>
      <AllFootballers footballers={footballers} />
    </div>
  );
}

export default App;
