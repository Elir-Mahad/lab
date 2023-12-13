import React from "react";
import style from "./About.module.css";
function About() {
  return (
    <div className={style.AboutBox}>
      <p className={style.AboutText}>
        My name is Mahad and I'm a software developer based in Toronto. I almost
        always lose track of time when I’m coding. I enjoy designing accessible
        websites and applications, writing dry code, and debugging problems.
        Besides coding, I like reading 📖 and meditating 🧘🏾‍♂️. I take things
        apart, find new patterns, and put them back together.
      </p>
    </div>
  );
}

export default About;
