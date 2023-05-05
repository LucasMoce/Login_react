import React, { useState } from "react";
import Navbar from "./Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Define o estado de login como falso inicialmente

  // Lógica de login e logout
  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Login onLogin={handleLogin} />} />
          <Route path="/about" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
