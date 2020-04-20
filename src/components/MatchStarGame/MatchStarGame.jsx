import React from "react";
import styles from './MatchStarGame.module.css'
const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
  };

const MatchStarGame = () => {
  return (
    <div className={styles.game}>
      <div className={styles.help}>
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.star} />
          <div className={styles.star} />
          <div className={styles.star} />
          <div className={styles.star} />
          <div className={styles.star} />
          <div className={styles.star} />
          <div className={styles.star} />
          <div className={styles.star} />
          <div className={styles.star} />
        </div>
        <div className={styles.right}>
          <button className={styles.number}>1</button>
          <button className={styles.number}>2</button>
          <button className={styles.number}>3</button>
          <button className={styles.number}>4</button>
          <button className={styles.number}>5</button>
          <button className={styles.number}>6</button>
          <button className={styles.number}>7</button>
          <button className={styles.number}>8</button>
          <button className={styles.number}>9</button>
        </div>
      </div>
      <div className={styles.timer}>Time Remaining: 10</div>
    </div>
  );
};

export default MatchStarGame;
