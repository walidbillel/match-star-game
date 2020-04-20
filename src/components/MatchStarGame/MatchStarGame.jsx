import React from "react";
import styles from "./MatchStarGame.module.css";
import utils from "../../math/";
const colors = {
  available: "lightgray",
  used: "lightgreen",
  wrong: "lightcoral",
  candidate: "deepskyblue",
};

const MatchStarGame = () => {
  const stars = 5;
  return (
    <div className={styles.game}>
      <div className={styles.help}>
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className={styles.body}>
        <div className={styles.left}>
          {utils.range(1, stars).map((star, i) => (
            <div className={styles.star} key={i} />
          ))}
        </div>
        <div className={styles.right}>
          {utils.range(1, 9).map((num, i) => (
            <button className={styles.number} key={i}>
              {num}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.timer}>Time Remaining: 10</div>
    </div>
  );
};

export default MatchStarGame;
