import React, { use, useEffect, useState } from "react";
import { allCountries } from "country-region-data";

const form = () => {
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState([]);
  const [guessed, setGuessed] = useState(false);
  const [guessedCountry, setGuessedCountry] = useState("");
  const [maxProbabilty, setMaxProbability] = useState("");
  const [countryNameMap, setCountryNameMap] = useState({});

  let countryCode = [];
  async function handleOnClick() {
    try {
      const response = await fetch(`https://api.nationalize.io/?name=${name}`);
      const data = await response.json();
      setNationality(data.country);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    searchCode();
  }, [nationality]);

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
    setGuessed(true);
  }

  useEffect(() => {
    const nameMap = allCountries.reduce((acc, country) => {
      acc[country.countryShortCode] = country.countryName;
      return acc;
    }, {});
    setCountryNameMap(nameMap);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-4xl">Guess your Nationality</div>

      <div>
        <label htmlFor="name"> Enter your Lastname</label>
      </div>
      <div className="border-2">
        <input
          type="text"
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
          className="border-2 p-2 cursor-pointer m-4"
        >
          {" "}
          Guess !{" "}
        </button>
      </div>

      <div className="5xl">
        {guessed ? `${guessedCountry} - ${maxProbabilty}%` : ""}
      </div>
    </div>
  );
};

export default form;
