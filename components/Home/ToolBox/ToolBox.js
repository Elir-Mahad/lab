import React from "react";
import { toolboxdata } from "./toolBoxData.js";
// import { Tname, Tpic, TsingleBox, Tools } from "./ToolBoxStyles.js";
import style from "./ToolBox.module.css";

function ToolBox() {
  // Get unique categories
  const uniqueCategories = [
    ...new Set(toolboxdata.map((item) => item.category)),
  ];
  return (
    <div style={{ marginTop: "5rem" }}>
      {uniqueCategories.map((category) => (
        <div key={category} className={style.CategorySection}>
          <h2 className={style.CategoryTitle}>{category}</h2>
          <div className={style.Tools}>
            <div className={style.Tools}>
              {toolboxdata
                .filter((item) => item.category === category) // Filter tools for the current category
                .map((item) => (
                  <div className={style.TsingleBox}>
                    <img className={style.Tpic} src={item.imageSrc} />
                    <p className={style.Tname}>{item.imageTitle}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ToolBox;
