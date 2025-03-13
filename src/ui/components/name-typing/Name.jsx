import { TypeAnimation } from "react-type-animation";

export const Name = () => {
  return (
    <TypeAnimation
      sequence={[
        3000,
        // Same substring at the start will only be typed out once, initially
        "Front-End",
        200,
        "",
        1000,
        "Back-End",
        200,
        "",
        1000,
        "AI Enthusiast",
        200,
        "",
        500,
        "Full Sta",
        300,
        "Full",
        1000,
        "Full-Stack",
        200,
        "Full-Stack Developer",
      ]}
      wrapper="span"
      speed={50}
      style={{ display: "inline-block" }}
      repeat={0}
    />
  );
};
