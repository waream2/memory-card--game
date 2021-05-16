import React, { useState, useEffect } from "react";
import { coinReference } from "./coinReference";
import Header from "./header";

let gameRecord = [];
window.gameRecord = gameRecord;

const Cards = (props) => {
  const [selectedCards, setSelectedCards] = useState([
    {
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
    },
  ]);

  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [avgScore, setAvgScore] = useState("0");

  useEffect(() => {
    shuffle();
  }, [selectedCards]);

  function shuffle() {
    for (let i = coinReference.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [coinReference[i], coinReference[j]] = [
        coinReference[j],
        coinReference[i],
      ];
    }
    return;
  }

  function selectCard(item) {
    if (selectedCards[item] === true) {
      resetGame();
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }
    } else
      setSelectedCards(
        (prevState) => ({
          ...prevState,
          [item]: true,
        }),
        setCurrentScore(currentScore + 1)
      );
  }

  function resetGame() {
    for (let i = 0; i < 10; i++) {
      setSelectedCards((prevState) => ({
        ...prevState,
        [i]: false,
      }));

      setCurrentScore(0);
    }
    let score = currentScore;
    gameRecord.push(score);
    findAverageScore();
  }

  function findAverageScore() {
    let total = 0;
    for (let i = 0; i < gameRecord.length; i++) {
      total += gameRecord[i];
    }

    let avg = total / gameRecord.length;
    let stringed = avg.toString();

    if (stringed.length > 1) {
      let rounded = avg.toFixed(2);
      setAvgScore(rounded);
    } else {
      setAvgScore(stringed);
    }
  }

  return (
    <div class="flex flex-col w-1/2">
      <Header
        highScore={highScore}
        currentScore={currentScore}
        avgScore={avgScore}
      />
      ,
      <div class="grid gap-x-1 grid-cols-5 place-items-center gap-.1">
        {coinReference.map((item, i) => {
          return (
            <div onClick={() => selectCard(item.id)}>
              <div class="bg-gray-100 m-5 pl-5 pr-5 pt-5 pb-5 rounded text-center">
                <img
                  class="max-w-38 max-h-24px mb-5"
                  src={item.url}
                  alt="CoinLogo"
                />
                <span id={i}>{item.name}</span>
                <br></br>
                <span>{item.ticker}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
