import style from "./GameHeader.module.css";
function GameHeader() {
  return (
    <>
      <div className={style.GhBox}>
        <div className={style.GhText}>
          <div className={style.GhTopBox}>
            <img
              className={style.GhTbLogo}
              src="https://raw.githubusercontent.com/Elir-Mahad/notes/main/assets/personal/logo.png"
              alt="a logo"
            />
            {/*  */}
            <div className={style.GhTbTwoNamesBar}>
              <h1 className={style.NickName}>Pattern seeker</h1>
              <h2 className={style.RealName}>Elir, Mahad</h2>
              <img
                className={style.GhBarcode}
                src="https://raw.githubusercontent.com/Elir-Mahad/notes/main/assets/personal/barcode.png"
                alt="a barcode"
              />
            </div>
          </div>

          <div className={style.GhRow}>
            <p className={style.GhrTag}>Mantra:</p>
            <p className={style.GhrContent}> Kanban is a way of life </p>
          </div>
          {/*  */}
          <div className={style.GhRow}>
            <p className={style.GhrTag}>Craft:</p>
            <p className={style.GhrContent}>Web developer </p>
          </div>
          {/*  */}
          <div className={style.GhRow}>
            <p className={style.GhrTag}>Tools:</p>
            <p className={style.GhrContent}>Javascript, python </p>
          </div>
          {/*  */}
          <div className={style.GhRow}>
            <p className={style.GhrTag}>Currently learning:</p>
            <p className={style.GhrContent}>Data science with python </p>
          </div>
          {/*  */}
        </div>
        <img
          className={style.GhProfilePic}
          src="https://raw.githubusercontent.com/Elir-Mahad/porass/main/assets/personal/cropchess.jpeg"
          alt="Picture"
        />
      </div>
    </>
  );
}

export default GameHeader;
