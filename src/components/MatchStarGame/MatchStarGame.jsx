import React, { useState, useEffect } from "react";
import styles from "./MatchStarGame.module.css";
import utils from "../../math/";

const colors = {
  available: "lightgray",
  used: "lightgreen",
  wrong: "lightcoral",
  candidate: "deepskyblue",
};

const PlayNumber = ({ num, status, onNumberClick }) => {
  return (
    <button
      className={styles.number}
      onClick={() => onNumberClick(num, status)}
      style={{ backgroundColor: colors[status] }}
      
    >
      {num}
    </button>
  );
};

const StarDisplay = ({ count }) => {
  return (
    <>
      {utils.range(1, count).map((star, i) => (
        <div className={styles.star} key={i} />
      ))}
    </>
  );
};

const PlayAgain = ({ resetGame, gameStatus }) => (
  <div className={styles.gameOver}>
    <div className={styles.message}
    style={{ color: gameStatus === "lost" ? "red": "green"}}>
      {gameStatus === "lost" ? "Game Over" : "Nice!"}
    </div>
    <button onClick={resetGame} className={styles.againBtn}>
      {" "}
      Play Again
    </button>
  </div>
);

const Game = ({startNewGame}) => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvaialbleNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);
  const [secondsLeft, setSeconsLeft] = useState(10);

  // setTimeout
  useEffect(() => {
    if (secondsLeft > 0 && availableNums.length > 0) {
      const timerID = setTimeout(() => {
        setSeconsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timerID);
    }
  });

  const candidatesAreWrong = utils.sum(candidateNums) > stars;

  const gameStatus =
    availableNums.length === 0 ? "won" : secondsLeft === 0 ? "lost" : "active";

 

  const numberStatus = (num) => {
    if (!availableNums.includes(num)) {
      return "used";
    }
    if (candidateNums.includes(num)) {
      return candidatesAreWrong ? "wrong" : "candidate";
    }
    return "available";
  };

  const onNumberClick = (num, status) => {
    if (gameStatus !== 'active' || status === "used") {
      return;
    }

    const newCandidateNums =
      status === "available"
        ? candidateNums.concat(num)
        : candidateNums.filter((cn) => cn !== num);
    if (utils.sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(
        (n) => !newCandidateNums.includes(n)
      );

      setStars(utils.randomSumIn(newAvailableNums, 9));
      setAvaialbleNums(newAvailableNums);
      setCandidateNums([]);
    }
  };

  return (
    <div className={styles.game}>
      <div className={styles.help}>
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className={styles.body}>
        <div className={styles.left}>
          {gameStatus !== 'active' ? (
            <PlayAgain resetGame={startNewGame} gameStatus={gameStatus}/>
          ) : (
            <StarDisplay count={stars} />
          )}
        </div>
        <div className={styles.right}>
          {utils.range(1, 9).map((num, i) => (
            <PlayNumber
              onNumberClick={onNumberClick}
              num={num}
              key={i}
              status={numberStatus(num)}
            />
          ))}
        </div>
      </div>
      <div className={styles.timer}>Time Remaining: {secondsLeft}</div>
    </div>
  );
};

const MatchStarGame = () => {
  const [gameID, setGameID] = useState(1);
  console.log(gameID)
  return <Game key={gameID} startNewGame={() => setGameID(gameID + 1)}/>
}

export default MatchStarGame;
