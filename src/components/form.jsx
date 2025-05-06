import React, { useEffect, useState } from "react";
import CountryCode from "./CountryCode";

const Form = () => {
  const [name, setName] = useState("");
  const [prevName, setPrevName] = useState("");
  const [nationality, setNationality] = useState([]);
  const [guessedCountry, setGuessedCountry] = useState("");
  const [maxProbabilty, setMaxProbability] = useState("");

  let countryCode = [];

  async function handleOnClick() {
    try {
      if (name !== "") {
        const response = await fetch(
          `https://api.nationalize.io/?name=${name}`
        );
        const data = await response.json();
        setNationality(data.country);
        setPrevName(name);
        setName("");
      } else {
        alert("Please provide a valid name");
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    searchCode();
  }, [nationality]);

  // To retrieve country code and country with maximum probabilty
  function searchCode() {
    nationality.map((country) =>
      countryCode.push(
        Math.round(country.probability * 100),
        country.country_id
      )
    );
    const max = Math.max(parseFloat(countryCode));
    const countryNameIndex = countryCode.indexOf(max);
    setMaxProbability(max);
    setGuessedCountry(countryCode[countryNameIndex + 1]);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-4xl my-20">Guess your Nationality</div>

      <div>
        <label htmlFor="name " className="my-10 text-lg">
          {" "}
          Enter your Lastname
        </label>
      </div>
      <div className="border-2 my-10">
        <input
          className=" p-3 outline-none text-2xl"
          type="text"
          autoFocus
          required
          name="name"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <button
          type="submit"
          onClick={handleOnClick}
          className="border-2 p-2 cursor-pointer m-4 hover:bg-black hover:text-white hover:rounded-md"
        >
          {" "}
          Guess !{" "}
        </button>
      </div>
      <CountryCode
        name={prevName}
        country={guessedCountry}
        probability={maxProbabilty}
      />
    </div>
  );
};

export default Form;
