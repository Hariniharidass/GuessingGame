import React, { useState } from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState(false);
  function handleSignup() {
    try {
      console.log("submitted");
      console.log({ username });
      console.log({ password });
      console.log({ confirmPassword });
    } catch (error) {
      setErrorMessage(error);
    }
  }
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center items-center">
        <div className="w-1/3 h-2/3 flex-row m-20 p-10 border-2 rounded-2xl">
          <h2 className="text-2xl font-bold text-center">Register</h2>
          {errorMessage && (
            <div className="text-sm text-red-500">{errorMessage}</div>
          )}
          <label htmlFor="username" className="block mt-2">
            Username
          </label>
          <input
            required
            autoFocus
            type="text"
            name="username"
            id="username"
            placeholder="Type your email"
            className="block w-full border-b-2 outline-none mt-2"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <label htmlFor="passsword" className="block mt-4">
            Password
          </label>
          <input
            required
            type="text"
            name="passsword"
            id="passsword"
            className="block w-full border-b-2 outline-none  mt-2"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <ul className="list-disc text-xs mt-3">
            <li>Should contain atleast 8 characters</li>
            <li>
              Should contain atleast one uppercase,number and special character
            </li>
            <li>Should not be your username or email</li>
          </ul>

          <label htmlFor="confirmpasssword" className="block mt-4">
            Confirm Password
          </label>
          <input
            required
            type="text"
            name="confirmpasssword"
            id="confirmpasssword"
            className="block w-full border-b-2 outline-none  mt-2"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />

          <button
            type="submit"
            className="mt-6 p-2 border-2 w-full rounded-2xl bg-white text-balance hover:text-white hover:bg-black"
            onClick={handleSignup}
          >
            Register
          </button>
          <p className="text-sm mt-3">
            Already have an account? Please{" "}
            <Link className="text-base  hover:border-b-2" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
