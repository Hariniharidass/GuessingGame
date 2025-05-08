import React, { useState } from "react";
import Form from "../components/GuessForm";
import { useNavigate } from "react-router-dom";
const home = ({ loggedIn }) => {
  const navigate = useNavigate();
  function handlePlayGame() {
    if (!loggedIn) {
      navigate("/login");
    }
  }
  return (
    <div className="flex flex-col  justify-center items-center ">
      {!loggedIn && (
        <h1 className="md:text-5xl text-3xl my-20 mx-4">
          Welcome to Guessing Game
        </h1>
      )}
      {!loggedIn && (
        <button
          type="button"
          className="p-2 border-2 rounded-2xl hover:rounded-lg hover:outline-none hover:bg-blue-900 hover:text-blue-50 hover:cursor-pointer"
          onClick={handlePlayGame}
        >
          {" "}
          Play Game!{" "}
        </button>
      )}
      {loggedIn && <Form />}
    </div>
  );
};

export default home;
