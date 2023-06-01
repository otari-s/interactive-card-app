import bgBack from "../assets/bg-card-back.png";
import style from "../components/Card.module.css";

function BackCard({ cvc }) {
  return (
    <div className={style.cardBack}>
      <img src={bgBack} alt="" className={style.cardBackImage} />
      <span className={style.cardBackExpire}>{cvc ? cvc : 1234}</span>
    </div>
  );
}

export default BackCard;
