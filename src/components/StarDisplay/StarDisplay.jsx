import React from "react";
import utils from "../../math/index";
import styles from "./StarDisplay.module.css";

const StarDisplay = ({ count }) => {
  return (
    <>
      {utils.range(1, count).map((star, i) => (
        <div className={styles.star} key={i} />
      ))}
    </>
  );
};

export default StarDisplay;
