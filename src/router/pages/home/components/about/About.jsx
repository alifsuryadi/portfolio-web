import { AOSElement } from "../../../../../ui";
import profileImg from "../../../../../assets/alif-suryadi-profile-2.webp";
import "aos/dist/aos.css";
import "./About.css";

export const About = () => {
  const stackList1 = [
    { name: "TypeScript" },
    { name: "React" },
    { name: "Next.js" },
    { name: "Flutter" },
    { name: "Node.js" },
    { name: "Go (Golang)" },
    { name: "Python" },
    { name: "PHP" },
    { name: "Docker" },
    { name: "GCP" },
    { name: "AWS" },
    { name: "Git" },
  ];
  const stackList2 = [
    { name: "Laravel" },
    { name: "Express.js" },
    { name: "Gin (Go)" },
    { name: "REST API" },
    { name: "PostgreSQL" },
    { name: "MySQL" },
    { name: "Firebase" },
    { name: "System Design" },
    { name: "CI/CD" },
    { name: "TensorFlow" },
    { name: "PyTorch" },
    { name: "LLM (GenAI)" },
  ];

  return (
    <section id="about" className="about">
      <div className="width-wrapper flex-control">
        <div className="col-left ">
          <AOSElement duration="900">
            <h2>About me</h2>
          </AOSElement>
          <div className="text-content">
            <AOSElement duration="900">
              <p>
                I am a self-taught Full-Stack Developer passionate about
                utilizing my skills and expertise to create technology and
                solutions that deliver value and empower individuals to achieve
                their goals. Additionally, I am actively learning and exploring
                Machine Learning, seeking to integrate its principles into my
                projects to further enhance their capabilities and
                effectiveness.
              </p>
            </AOSElement>
            <AOSElement duration="900">
              <p>
                Since 2022 I have been assisting local business owners by
                creating visually appealing, accessible & performant websites
                for their businesses, providing them with a stronger online
                presence that will help their overall success.
              </p>
            </AOSElement>
            <AOSElement duration="900">
              <p>Here is the stack of technologies I work with:</p>
            </AOSElement>
          </div>
          <AOSElement duration="900">
            <div className="stack-list-container flex-control">
              <ul className="stack-list-left">
                {stackList1.map((item, index) => {
                  return (
                    <li className="list-item" key={index}>
                      {item.name}
                    </li>
                  );
                })}
              </ul>
              <ul className="stack-list-right">
                {stackList2.map((item, index) => {
                  return (
                    <li className="list-item" key={index}>
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </AOSElement>
        </div>
        <div className="col-right">
          <AOSElement duration="900">
            <figure className="profile-img-container">
              <img
                src={profileImg}
                className="profile-img"
                alt="Alif Suryadi profile picture"
              />
            </figure>
          </AOSElement>
        </div>
      </div>
    </section>
  );
};
