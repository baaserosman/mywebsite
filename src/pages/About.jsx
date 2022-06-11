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
            As a dynamic developer, I especially like working with React and
            Django. My attention to detail and harmony with teamwork play an
            active role in the projects. In addition, my fascination with the
            world of technology allows me to improve myself in the field of
            programming, to learn something new every day and to share what I
            have learned. I believe that the most effective way to learn and
            improve is to share.
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
            <h6>Full Stack Development</h6>
            <p>
              Clarusway is an AZAV certified educational institution. Clarusway
              has also been active in Germany since February 2021 and offers
              professional training in the areas of Full Stack Development, AWS
              Cloud Engineering, DevOps Engineering, Data Analysis, Machine/Deep
              Learning and Cyber Security.
            </p>
          </div>
          <div className="about__job">
            <h2 className="text-secondary">2011 - 2017</h2>
            <h3>Turkish Air Forces</h3>
            <h6>Human Resources</h6>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium dolores vitae iusto quos atque, illo nobis ut animi...
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
      <FooterVertical />
    </div>
  );
};

export default About;
