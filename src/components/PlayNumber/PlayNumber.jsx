import React from "react";
import styles from "./PlayNumber.module.css";

const PlayNumber = ({ num, status, colors }) => {
  return (
    <button className={styles.number} onClick={() => console.log("Num", num)}
    style={{backgroundColor: colors[status]}}>
      {num}
    </button>
  );
};

export default PlayNumber;
