import React from "react";
import { data } from "../helpers/data";
const Home = () => {
  return (
    <div className="home-bgImg-container">
      <main class="home">
        <h1 class="home__name">
          Osman <span class="home__name--last">BASCHER</span>
        </h1>
        <h2 class="Fullstack">Full Stack Web Developer</h2>
      </main>
      {/* ABOUT */}
      <div id="about">
        <main className="about">
          <div className="about__container">
            <h2 className="title">ABOUT ME</h2>
            <p className="text-content">
              As a dynamic developer, I especially like working with React and
              Django. My attention to detail and harmony with teamwork play an
              active role in the projects. In addition, my fascination with the
              world of technology allows me to improve myself in the field of
              programming, to learn something new every day and to share what I
              have learned. I believe that the most effective way to learn and
              improve is to share.
            </p>
            <div className="about__job">
              <h2 className="text-secondary">2021 - 2022</h2>
              <h3>
                <a
                  href="https://clarusway.de/"
                  target="_blank"
                  rel="noreferrer"
                >
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
      <div id="project" className="project-container">
        <h2 className="title">MY PROJECTS</h2>
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
      </div>

      {/* CONTACT */}
      <div id="contact" className="contact">
        <h2 className="title">Contact Me</h2>
        <br />
        <div className="contact__list">
          <div className="contact__item">
            <a
              className="contact__link"
              href="mailto:baaserosman@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-envelope fa-2x"></i>
            </a>
            <div className="contact__text">baaserosman@gmail.com</div>
          </div>
          <div className="contact__item">
            <a
              href="https://www.linkedin.com/in/osman-bascher/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="linkedin fab fa-linkedin fa-2x"></i>
            </a>
            <div className="contact__text">
              www.linkedin.com/in/osman-bascher/
            </div>
          </div>
          <div className="contact__item">
            <a
              href="https://github.com/baaserosman"
              target="_blank"
              rel="noreferrer"
            >
              <i className="github fab fa-github fa-2x"></i>
            </a>
            <div className="contact__text">https://github.com/baaserosman</div>
          </div>
        </div>

        <a href="/#" class="up-btn" rel="noreferrer">
          <i class="fas fa-arrow-up fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
