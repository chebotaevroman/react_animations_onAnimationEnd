import React, { useState } from "react";
import "./App.css";

function App() {
  const [isCardVisible, setIsCardVisible] = useState(true);

  const [isFadeOut, setIsFadeOut] = useState(false);

  const handleButtonClick = (newVisibility: boolean) => {
    if (newVisibility) {
      setIsCardVisible(true);
    } else {
      setIsFadeOut(true);
    }
  };

  const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === "fadeOut") {
      setIsCardVisible(false);
      setIsFadeOut(false);
    }
  };

  const cardClassNames = ["card"];
  if (isFadeOut) cardClassNames.push("cardFadeOut");

  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <button
            className="button"
            onClick={() => handleButtonClick(!isCardVisible)}
          >
            Show / Hide
          </button>
          {isCardVisible ? (
            <div
              className={cardClassNames.join(" ")}
              onAnimationEnd={handleAnimationEnd}
            >
              Card
            </div>
          ) : null}
        </div>
      </header>
    </div>
  );
}

export default App;
