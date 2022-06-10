import React from "react";
import Navbar from "../components/Navbar";
import FooterHorizontal from "../components/FooterHorizontal";
const Home = () => {
  return (
    <div className="home-bgImg-container">
      <Navbar />
      <main class="home">
        <h1 class="home__name">
          Osman <span class="home__name--last">BASCHER</span>
        </h1>
        <h2 class="Fullstack">Full Stack Web Developer</h2>
      </main>
      <FooterHorizontal />
    </div>
  );
};

export default Home;
