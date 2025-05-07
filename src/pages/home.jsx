import React, { useState } from "react";
import Form from "../components/GuessForm";

const home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handlePlayGame() {
      setIsLoggedIn(true);
      const loginToken = localStorage.getItem();
  }
  return (
    <div className="flex flex-col  justify-center items-center">
      <h1 className="text-5xl my-20 mx-4">Welcome to Guessing Game</h1>
      <button
        type="button"
        className="p-2 border-2 hover:rounded-lg hover:bg-black hover:text-white hover:cursor-pointer"
        onClick={handlePlayGame}
      >
        {" "}
        Play Game!{" "}
      </button>
      {isLoggedIn && <Form />}
    </div>
  );
};

export default home;
