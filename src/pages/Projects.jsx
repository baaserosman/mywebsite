import React from "react";
import "../scss/Cards.scss";
import FooterHorizontal from "../components/FooterHorizontal";
import Navbar from "../components/Navbar";
import { data } from "../helpers/data";

const Projects = () => {
  return (
    <div>
      <div className="project-bgImg-container">
        <Navbar />
        <div className="projects__bio-image">
          <h1>My Projects</h1>
        </div>
      </div>

      {/* <main className="projects"> */}
      <div className="card-container">
        {data.map((Project, index) => {
          return (
            <div className="cards" key={index}>
              <h4 className="title">{Project.name}</h4>
              <hr />
              <br />
              <div className="img-div">
                <img src={Project.image} alt="logo" />
              </div>
              <div className="btn-div">
                <a href={Project.url} target="_blank" rel="noreferrer">
                  <button className="btn">Go To Poject</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      {/* </main> */}
      <FooterHorizontal />
    </div>
  );
};

export default Projects;
