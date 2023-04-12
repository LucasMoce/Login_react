import React from "react";
import "./Home.css";

const Home = () => {
  const title = "Welcome to Bambu!";
  const subtitle = "Made by Lucas";

  return (
    <div className="home">
      <div className="home__content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Home;
