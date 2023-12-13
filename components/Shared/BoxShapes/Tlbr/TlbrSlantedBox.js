import React, { useState } from "react";
// import style from "./Boxshapes.module.css";
// import {
//   CustomBox,
//   CustomBoxMenu,
//   CustomBoxMainContainer,
//   CustomBoxMenuButtonWrapper,
// } from "./TlbrSlantedBoxStyles";
import style from "./Tlbr.module.css";
import GlitchButton from "../../GlitchButton/GlitchButton";
//
function TlbrSlantedBox({ title1, content1, title2, content2 }) {
  // top left bottom right slanted box
  const [boxOne, setBoxOne] = useState(true);
  const [boxTwo, setBoxTwo] = useState(false);

  const showBoxOne = () => {
    setBoxOne(true);
    setBoxTwo(false);
  };

  const showBoxTwo = () => {
    setBoxOne(false);
    setBoxTwo(true);
  };

  return (
    <div className={style.CustomBox}>
      {/* <div className={style.boxerTopLeft}></div> */}
      <div className={style.CustomBoxMainContainer}>
        <div className={style.CustomBoxMenu}>
          <span
            className={style.CustomBoxMenuButtonWrapper}
            onClick={showBoxOne}
          >
            <GlitchButton buttonText={title1} />
          </span>
          <span
            className={style.CustomBoxMenuButtonWrapper}
            onClick={showBoxTwo}
          >
            <GlitchButton buttonText={title2} />
          </span>
        </div>

        {boxOne && <>{content1}</>}
        {boxTwo && <>{content2}</>}
      </div>
      {/* <div className={style.boxerBottomRight}></div> */}
    </div>
  );
}

export default TlbrSlantedBox;
