import React from "react";
import style from "./About.module.css";
function About() {
  return (
    <div className={style.AboutBox}>
      <p className={style.AboutText}>
        I'm Mahad, a Toronto-based software developer with a flair for data
        science and cybersecurity. I craft accessible web apps by day and hunt
        digital threats by night. I aim to fuse clean code, robust security, and
        data-driven creativity into every project. Let's build something
        awesome!
      </p>
    </div>
  );
}

export default About;
