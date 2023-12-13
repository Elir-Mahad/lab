import React from "react";
import style from "./ProjectList.module.css";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
//
function ProjectsList({ data, chosen }) {
  const data2 = data?.filter((obj) => {
    return obj.tag.includes(chosen);
  });
  return (
    <>
      <div className={style.AllProjects}>
        {data2?.map((item) => (
            <div className={style.NbBox}>
              <div className={style.NbTitleAndCornerBox}>
                <h2 className={style.NbTitle}>{item.title}</h2>
              </div>

              <div className={style.NbMainBoxCornerBox}>
                <div className={style.NbMainBox}>
                  <ProjectContainer
                    description={item.description}
                    toolA={item.toolASrc}
                    toolB={item.toolBSrc}
                    website={item.websiteUrl}
                    github={item.repoUrl}
                    websiteimage={item.mockSrc}
                  />
                </div>
              </div>
            </div>
        ))}
      </div>
    </>
  );
}

export default ProjectsList;
