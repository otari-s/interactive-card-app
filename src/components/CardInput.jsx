import { useState } from "react";
import style from "../components/cardInput.module.css";

function CardInput({ setIsComplete, handleChange }) {
  const [number, setNumber] = useState("");
  function onSubmit(e) {
    e.preventDefault();
    setIsComplete(true);
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">cardholder name</label>
      <input
        required
        onChange={(e) => {
          handleChange(e.target.name, e.target.value);
        }}
        className={style.name}
        type="text"
        id="name"
        name="name"
        placeholder="e.g. Jane Appleseed"
      />

      <label htmlFor="number">card number</label>
      <input
        required
        id="number"
        className={style.number}
        onChange={(e) => {
          const input = e.target.value.replace(/\D/g, "");
          const inputNumber = input
            .replace(/\s/g, "")
            .replace(/\d{4}(?=.)/g, "$& ");

          setNumber(inputNumber);
          handleChange(e.target.name, number);
        }}
        value={number}
        placeholder="e.g. 1234 5678 9123 0000"
        name="number"
        maxLength="19"
        type="text"
        pattern=".{19}"
      />

      <div className={style.date}>
        <div className={style.expireDate}>
          <label htmlFor="date">(MM/YY)</label>
          <input
            required
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
            placeholder="MM"
            maxLength={2}
            className={style.m}
            type="text"
            id="date"
            name="month"
            pattern="[1-9]|1[0-2]"
            // pattern="\d{2}"
          />
          <input
            required
            placeholder="YY"
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
            maxLength={2}
            className={style.y}
            type="text"
            name="year"
            pattern="\d{2}"
          />
        </div>
        <div className={style.dateCvc}>
          <label htmlFor="cvc">cvc</label>
          <input
            required
            className={style.cvc}
            id="cvc"
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
            placeholder="e.g. 123"
            name="cvc"
            maxLength={3}
            pattern="\d{3}"
          />
        </div>
      </div>
      <button>confirm</button>
    </form>
  );
}

export default CardInput;
