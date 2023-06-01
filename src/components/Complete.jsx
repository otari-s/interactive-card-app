import React from "react";
import style from "../components/complete.module.css";
import iconComplete from "../assets/icon-complete.svg";
function Complete({ setIsComplete }) {
  return (
    <div className={style.complete}>
      <img className={style.image} src={iconComplete} alt="" />
      <h1>thank you</h1>
      <p>We’ve added your card details</p>
      <button onClick={() => setIsComplete(false)}>Continue</button>
    </div>
  );
}

export default Complete;
