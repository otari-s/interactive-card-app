import bgFront from "../assets/bg-card-front.png";
import cardLogo from "../assets/card-logo.svg";
import style from "../components/Card.module.css";
function FrontCArd({ card, isComplete }) {
  const { name, number, month, year } = card;
  return (
    <div className={style.cardFront}>
      <img src={bgFront} alt="" className={style.cardFrontImage} />
      <img src={cardLogo} alt="" className={style.cardFrontLogo} />
      <span className={style.cardFrontNumber}>
        {number ? number : "0000 0000 0000 0000"}
      </span>
      <span className={style.cardFrontName}>
        {name ? name : "name sureName"}
      </span>
      <span className={style.cardFrontCvc}>
        {month ? month : "00"}/{year ? year : "00"}
      </span>
    </div>
  );
}

export default FrontCArd;
