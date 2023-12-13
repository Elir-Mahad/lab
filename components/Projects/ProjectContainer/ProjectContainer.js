import React from "react";
import style from "./ProjectContainer.module.css";
//
function ProjectContainer({
  description,
  toolA,
  toolB,
  website,
  github,
  websiteimage,
}) {
  //
  const baseUrl = "https://raw.githubusercontent.com/";
  const webUrl = `${baseUrl}${websiteimage}`;
  const toolAurl = `${baseUrl}${toolA}`;
  const toolBurl = `${baseUrl}${toolB}`;
  // const toolCurl = `${baseUrl}${toolC}`;
  const websiteicon = `${baseUrl}Elir-Mahad/porass/main/assets/icons/darkwebsite.png`;
  const githubicon = `${baseUrl}Elir-Mahad/porass/main/assets/icons/darkgithub.png`;

  return (
    <div className={style.SingleProject}>
      <img className={style.Pimage} src={webUrl} alt="" />
      <div className={style.Pinfo}>
        <p className={style.Pdescription}>{description}</p>
        <div className={style.PtoolsBox}>
          <h3 className={style.PtoolsTitle}>Made with</h3>
          <div className={style.Ptools}>
            <img className={style.Ptool} src={toolAurl} alt="" />
            <img className={style.Ptool} src={toolBurl} alt="" />
          </div>
        </div>
        <div className={style.PlinksBox}>
          <h3 className={style.PlinksTitle}>Live site &#38; code</h3>
          <div className={style.Plinks}>
            <a
              className={style.Plink}
              href={website}
              rel="noreferrer"
              target="_blank"
            >
              <img className={style.Plinkimg} src={websiteicon} />
            </a>
            <a
              className={style.Plink}
              href={github}
              rel="noreferrer"
              target="_blank"
            >
              <img className={style.Plinkimg} src={githubicon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectContainer;
