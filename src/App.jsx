import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Signup";
import Nav from "./components/Navbar";
import Home from "./pages/home";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInUsername, setLoggedInUsername] = useState("");

  const handleLoginSuccess = (username) => {
    setLoggedIn(true);
    setLoggedInUsername(username);
  };
  const handleLogout = () => {
    setLoggedIn(false);
    setLoggedInUsername("");
  };
  return (
    <>
      <BrowserRouter basename="/Hariniharidass">
        <Nav
          loggedIn={loggedIn}
          username={loggedInUsername}
          onLogout={handleLogout}
        />
        <Routes>
          <Route path="/" element={<Home loggedIn={loggedIn} />}>
            {" "}
            Home{" "}
          </Route>
          <Route
            path="/login"
            element={<Login onLoginSuccess={handleLoginSuccess} />}
          >
            {" "}
            Login{" "}
          </Route>
          <Route path="/register" element={<Register />}>
            {" "}
            Register{" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
