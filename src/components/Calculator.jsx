import React, { useState, useEffect } from "react";

const Calculator = () => {
  const diceValues = [1, 2, 3, 4, 5, 6];

  const shuffleDice = () => {
    return diceValues[Math.floor(Math.random() * diceValues.length)];
  };

  const [dice1, setDice1] = useState([]);
  const [dice2, setDice2] = useState([]);
  const [dice3, setDice3] = useState([]);
  const [dice4, setDice4] = useState([]);
  const [dice5, setDice5] = useState([]);
  const [gameCount, setGameCount] = useState(0);
  const [yamCount, setYamCount] = useState(0);
  const [showYamCount, setShowYamCount] = useState(false);
  const [carreCount, setCarreCount] = useState(0);
  const [showCarreCount, setShowCarreCount] = useState(false);
  const [brelanCount, setBrelanCount] = useState(0);
  const [showBrelanCount, setShowBrelanCount] = useState(false);

  const launchGame = () => {
    setDice1([...dice1, shuffleDice()]);
    setDice2([...dice2, shuffleDice()]);
    setDice3([...dice3, shuffleDice()]);
    setDice4([...dice4, shuffleDice()]);
    setDice5([...dice5, shuffleDice()]);
    setGameCount(gameCount + 1);
  };

  const resetGame = () => {
    setDice1([]);
    setDice2([]);
    setDice3([]);
    setDice4([]);
    setDice5([]);
    setGameCount(0);
  };

  const displayGameBoard = () => {
    let res = "";
    for (let i = 0; i < gameCount; i++) {
      res += dice1[i] + ' . ' + dice2[i] + ' . ' + dice3[i] + ' . ' + dice4[i] + ' . ' + dice5[i] + `------`;
    }
    return res;
  };

  const getOccurrence = (array, value) => {
    return array.filter((v) => (v === value)).length;
  }

  const sameDiceCount = () => {
    let yamCountLocal = 0;
    let carreCountLocal = 0;
    let brelanCountLocal = 0;

    const occurrenceArray = [];

    diceValues.forEach((el) => {
      let value =  getOccurrence(dice1, el) + getOccurrence(dice2, el) + getOccurrence(dice3, el) + getOccurrence(dice4, el) + getOccurrence(dice5, el);
      occurrenceArray.push(value);
    });

    occurrenceArray.forEach((elem) => {
      if (elem >= 3 && elem % 3 === 0) {
        brelanCountLocal += 1;
      }

      if (elem >= 4 && elem % 4 === 0) {
        carreCountLocal += 1;
      }

      if (elem >= 5 && elem % 5 === 0) {
        yamCountLocal += 1;
      }
    });

    setBrelanCount(brelanCountLocal);
    setCarreCount(carreCountLocal);
    setYamCount(yamCountLocal);
  };

  const toggleShowYamCount = () => {
    if (showYamCount) setShowYamCount(false);
    else setShowYamCount(true);
  };

  const toggleCarreCount = () => {
    if (showCarreCount) setShowCarreCount(false);
    else setShowCarreCount(true);
  };

  const toggleBrelanCount = () => {
    if (showBrelanCount) setShowBrelanCount(false);
    else setShowBrelanCount(true);
  };

  useEffect(() => {
    sameDiceCount();
  }, [gameCount]);

  return (
    <div className="container">
      <div>
        <button type="button" className="button green" onClick={launchGame}>Lancer</button>
      </div>
      {/* <div>
        <ul>
          <li>[Yam]</li>
          <li>[Carré]</li>
          <li>[Brelan]</li>
        </ul>
      </div> */}
      <ul>
      <li>
        <button type="button" className="button blue" onClick={toggleShowYamCount}>Yam</button>
        {showYamCount && <span> ===== {yamCount}</span>}
      </li>
      <li>
        <button type="button" className="button blue" onClick={toggleCarreCount}>Carré</button>
        {showCarreCount && <span> ===== {carreCount}</span>}
      </li>
      <li>
        <button type="button" className="button blue" onClick={toggleBrelanCount}>Brelan</button>
        {showBrelanCount && <span> ===== {brelanCount}</span>}
      </li>
      </ul>
      <div>
        <p>resultat :</p>
        <p>{displayGameBoard()}</p>
      </div>
      <div>
        <p>You've played {gameCount} times</p>
        <button type="button" className="button red" onClick={resetGame}>Reset</button>
      </div>
    </div>
  );
};

export default Calculator;
