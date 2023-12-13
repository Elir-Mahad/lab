import React, { useState } from "react";
import { projectsData } from "../projectsData";
import GlitchButton from "../../Shared/GlitchButton/GlitchButton";
import ProjectsList from "../ProjectsList/ProjectsList";
import style from "./ProjectsMenuAndList.module.css";
function ProjectsMenuAndList() {
  //
  const [chosen, setChosen] = useState("");
  //
  const chooseHtml = () => {
    setChosen("html");
  };
  const chooseReact = () => {
    setChosen("react");
  };
  return (
    <div>
      <div className={style.VerticalMenu}>
        <span onClick={chooseHtml}>
          <GlitchButton buttonText="Html sites" />
        </span>
        <span onClick={chooseReact}>
          <GlitchButton buttonText="React sites" />
        </span>
      </div>
      <ProjectsList data={projectsData} chosen={chosen} />
    </div>
  );
}

export default ProjectsMenuAndList;
