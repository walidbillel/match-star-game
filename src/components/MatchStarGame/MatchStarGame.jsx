import React, { useState } from "react";
import styles from "./MatchStarGame.module.css";
import utils from "../../math/";
import PlayNumber from "../PlayNumber/PlayNumber";
import StarDisplay from "../StarDisplay/StarDisplay";
const colors = {
  available: "lightgray",
  used: "lightgreen",
  wrong: "lightcoral",
  candidate: "deepskyblue",
};

const MatchStarGame = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvaialbleNums] = useState([1, 2, 3, 4, 5]);
  const [candidateNums, setCandidateNums] = useState([2, 3]);

  const numberStatus = (num) => {
      if(!availableNums.includes(num)) {
          return "used"
      }
      if(candidateNums.includes(num)) {
          return candidatesAreWrong ? "wrong" : "candidate"
      }
      return "available"
  };

  const candidatesAreWrong = utils.sum(candidateNums) > stars;

 

  return (
    <div className={styles.game}>
      <div className={styles.help}>
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className={styles.body}>
        <div className={styles.left}>
          <StarDisplay count={stars} />
        </div>
        <div className={styles.right}>
          {utils.range(1, 9).map((num, i) => (
            <PlayNumber num={num} key={i} status={numberStatus(num)} colors={colors}/>
          ))}
        </div>
      </div>
      <div className={styles.timer}>Time Remaining: 10</div>
    </div>
  );
};

export default MatchStarGame;
