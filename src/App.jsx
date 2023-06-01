import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import BackCard from "./components/BackCard";
import CardInput from "./components/CardInput";
import Complete from "./components/Complete";
import FrontCArd from "./components/FrontCArd";

function App() {
  const [isComplete, setIsComplete] = useState(false);
  const [card, setCard] = useState({
    name: "",
    number: "",
    cvc: "",
    month: "",
    year: "",
  });

  function handleChange(key, value) {
    setCard((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  }

  return (
    <main className="cardBody">
      <section className="cardSection">
        <FrontCArd isComplete={isComplete} card={card} />

        <BackCard cvc={card.cvc} />
      </section>
      <section className="userInputSection">
        {isComplete ? (
          <Complete setIsComplete={setIsComplete} />
        ) : (
          <CardInput
            setIsComplete={setIsComplete}
            isComplete={isComplete}
            handleChange={handleChange}
          />
        )}
      </section>
    </main>
  );
}

export default App;
