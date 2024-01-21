import ProjectsList from "./ProjectsList";
import { Button } from "../../../../../ui";
import "./Projects.css";

export const Projects = () => {
  return (
    <section id="work" className="projects">
      <div className="width-wrapper">
        <div className="projects-container grid-control">
          <div className="col-left flex-control">
            <ProjectsList />
          </div>
          <div className="col-right">
            <h2>
              Featured <br /> Projects
            </h2>
            <p>
              A showreel of my personal projects and work that I have done for
              various clients.
            </p>
            <Button
              customClass="dark-btn btn"
              text="See More"
              link="https://github.com/alifsuryadi?tab=repositories"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
