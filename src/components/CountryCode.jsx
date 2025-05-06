import React, { useState, useEffect } from "react";

import allCountries from "country-region-data/data.json";

const CountryCode = ({ name, country, probability }) => {
  const [countryName, setCountryName] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    allCountries.forEach((cname) => {
      if (cname.countryShortCode === country) {
        setCountryName(cname.countryName);
        setIsVisible(true);
      }
    });
  }, [country]);
  return (
    <>
      {isVisible ? (
        <div className="mt-6 text-lg">
          {name && <p>Name: {name}</p>}
          {countryName && <p>Predicted Nationality: {countryName}</p>}
          {probability && <p>Probability: {probability}%</p>}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default CountryCode;
