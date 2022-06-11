import React from "react";
import Navbar from "../components/Navbar";
import FooterHorizontal from "../components/FooterHorizontal";
import { data } from "../helpers/data";
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
      {/* ABOUT */}
      <div>
        <main className="about">
          <div className="about__container">
            <div className="about__job">
              <h2 className="text-secondary">2021 - 2022</h2>
              <h3>
                <a href="https://clarusway.de/" target="_blank">
                  CLARUSWAY
                </a>
              </h3>
              <h6>Full Stack Development</h6>
              <p>
                Clarusway is an AZAV certified educational institution.
                Clarusway has also been active in Germany since February 2021
                and offers professional training in the areas of Full Stack
                Development, AWS Cloud Engineering, DevOps Engineering, Data
                Analysis, Machine/Deep Learning and Cyber Security.
              </p>
            </div>
            <div className="about__job">
              <h2 className="text-secondary">2011 - 2017</h2>
              <h3>Turkish Air Forces</h3>
              <h6>Human Resources</h6>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium dolores vitae iusto quos atque, illo nobis ut
                animi...
              </p>
            </div>
            <div className="about__job">
              <h2 className="text-secondary">2011 - 2014</h2>
              <h3>Anadolu University</h3>
              <h6>Faculty of Business Administration</h6>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                omnis laborum unde ipsa? Laudantium, iure...
              </p>
            </div>
          </div>
        </main>
      </div>
      {/* PROJECTS */}
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
      {/* CONTACT */}
      <main className="contact">
        <h2>Contact Me ...</h2>
        <div className="contact__list">
          <div className="contact__item">
            <i className="fas fa-envelope"></i> E-mail
            <div className="text-secondary">baaserosman@gmail.com</div>
          </div>
          <div className="contact__item">
            <i className="fas fa-mobile-alt"></i> Telephone
            <div className="text-secondary">+49 179 4594697</div>
          </div>
          <div className="contact__item">
            <i className="fas fa-map-marker-alt"></i> Address
            <div className="text-secondary">01169 Dresden</div>
          </div>
        </div>
      </main>
      <FooterHorizontal />
    </div>
  );
};

export default Home;
