import { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { AOSElement } from "../../../../../ui";
import backgroundImg from "../../../../../assets/peter-olexa-Q5GnQxjX7Jk-unsplash-PhotoRoom.png-PhotoRoom.webp";
import "./Hero.css";
import { Name } from "../../../../../ui/components/name-typing/Name";

export const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
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
          <div className="hero-bg-container">
            <AOSElement duration="900" delay="100">
              <img
                src={backgroundImg}
                className={`bg-img ${!scrollY ? "bg-img-float" : ""}`}
                style={{ transform: `translateY(${scrollY * -0.3}px)` }}
                width="100%"
                height="100%"
                alt="Hero background image"
              />
            </AOSElement>
            <div className="gradient-layer"></div>
          </div>
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
