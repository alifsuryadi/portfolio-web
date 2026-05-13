import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { AOSElement } from "../../../../../ui";
import { FloatingNeuralCore } from "../../../../../components/three/FloatingNeuralCore";
import "./Hero.css";
import { Name } from "../../../../../ui/components/name-typing/Name";

export const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <section id="hero" className="hero flex-control">
        <div className="section-wrapper width-wrapper">
          <div className="hero-content flex-control">
            <AOSElement duration="900" delay="100">
              <p className="subtitle">Hello, my name is Alif</p>
            </AOSElement>
            <AOSElement duration="900" delay="150">
              <h1 className="title flex-control">
                {/* <span>Full Stack Developer</span> */}
                <Name />
                <span>Avid Programmer</span>
              </h1>
            </AOSElement>
            <AOSElement duration="900" delay="200">
              <p className="lead">
                I specialize in creating smart and dynamic digital experiences
                for the web. I am also learning about machine learning to expand
                my skills and knowledge.
              </p>
            </AOSElement>
          </div>
          <FloatingNeuralCore />
          <div
            className={`scroll-down ${loaded ? "scroll-fade-in" : ""}`}
            aria-label="scroll"
          >
            <Link to="about" spy={true} smooth={true} offset={0} duration={800}>
              <div className="mouse">
                <div className="scroller"></div>
              </div>
              <p className="scroll-text">explore</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
