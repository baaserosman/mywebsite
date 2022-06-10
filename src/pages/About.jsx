import React from "react";
import Navbar from "../components/Navbar";
import FooterVertical from "../components/FooterVertical";
const About = () => {
  return (
    <div>
      <div className="about-bgImg-container">
        <Navbar />
        <div className="about__bio-image">
          <h2>BIO</h2>
          <p>
            Als dynamischer Entwickler für Web arbeite ich gerne mit React und
            Django. Meine Liebe zum Detail und meine Harmonie mit der Teamarbeit
            spielen in den Projekten eine aktive Rolle. Darüber hinaus
            ermöglicht mir meine Faszination für die Welt der Technologie, mich
            im Bereich der Programmierung zu verbessern, jeden Tag etwas Neues
            zu lernen und das Gelernte zu teilen. Ich glaube, dass der
            effektivste Weg zum Lernen und zur Eigenentwicklung das Teilen ist.
          </p>
        </div>
      </div>
      <main className="about">
        <div className="about__container">
          <div className="about__job">
            <h2 className="text-secondary">2021 - 2022</h2>
            <h3>
              <a href="https://clarusway.de/" target="_blank">
                CLARUSWAY
              </a>
            </h3>
            <h6>Full Stack Web Entwicklung</h6>
            <p>
              Clarusway ist ein AZAV zertifizierter Bildunsträger. Sie sind auch
              in Deutschland seit Februar 2021 tätig und bieten berufliche
              Weiterbildungen in den Bereichen Full Stack Development, AWS Cloud
              Engineering, DevOps Engineering, Data Analysis, Machine/Deep
              Learning, Cyber Security an.
            </p>
          </div>
          <div className="about__job">
            <h2 className="text-secondary">2011 - 2017</h2>
            <h3>Türkische Luftwaffe</h3>
            <h6>Humanressourcen</h6>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium dolores vitae iusto quos atque, illo nobis ut animi...</p>
          </div>
          <div className="about__job">
            <h2 className="text-secondary">2011 - 2014</h2>
            <h3>Anadolu Universität</h3>
            <h6>BWL, Bachelor Studium</h6>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi omnis laborum unde ipsa? Laudantium, iure...
            </p>
          </div>
        </div>
      </main>
      <FooterVertical />
    </div>
  );
};

export default About;
