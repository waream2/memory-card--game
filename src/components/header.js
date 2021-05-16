import React from "react";

const Header = (props) => {
  return (
    <>
      <div class="bg-white-100 h40 flex flex-col  text-center mt-10 pt-5 pb-5 rounded text-white ">
        <span class=" text-5xl font-bold mb-5 ">Coin Cards</span>
        <span class="pb-10">
          Don't select a coin more than once, see if you can get to 10.
        </span>
        <div class="flex justify-center align-center">
          <span class=" text-xl pr-10">
            Current Score: {props.currentScore}
          </span>
          <span class="text-xl pl-10 pr-10">High Score: {props.highScore}</span>
          <span class="text-xl pl-10">Average Score: {props.avgScore}</span>
        </div>
      </div>
    </>
  );
};

export default Header;
