import React from "react";
import styles from "./GlitchButton.module.css";

function GlitchButton({ buttonText }) {
  return (
    <div>
      <button className={styles.gbutton}>{buttonText}</button>
    </div>
  );
}

export default GlitchButton;
