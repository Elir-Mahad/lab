import React from "react";
import { toolboxdata } from "./toolBoxData.js";
// import { Tname, Tpic, TsingleBox, Tools } from "./ToolBoxStyles.js";
import style from "./ToolBox.module.css";

function ToolBox() {
  return (
    <>
      <div className={style.Tools}>
        {toolboxdata.map((item) => (
          <div className={style.TsingleBox}>
            <img className={style.Tpic} src={item.imageSrc} />
            <p className={style.Tname}>{item.imageTitle}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ToolBox;
