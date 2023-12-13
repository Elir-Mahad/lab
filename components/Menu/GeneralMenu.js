import React, { useState } from "react";
import style from "./GeneralMenu.module.css";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { GrMenu } from "react-icons/gr";
import { allPortfolioPages } from "./menuPagesData";

//
function GeneralMenu({}) {
  //
  const [openIcon, setOpenIcon] = useState(true);
  const [closeIcon, setCloseIcon] = useState(false);
  const [menuContent, setMenuContent] = useState(false);
  //
  const showContent = () => {
    setMenuContent(true);
    setOpenIcon(false);
    setCloseIcon(true);
  };

  const hideContent = () => {
    setMenuContent(false);
    setOpenIcon(true);
    setCloseIcon(false);
  };

  return (
    <div className={style.CustomMenu}>
      <div className={style.MenuBox}>
        <div className={style.OpenCloseMenuContent}>
          {openIcon && (
            <div className={style.OCMicon} onClick={showContent}>
              <GrMenu />
            </div>
          )}
          {closeIcon && (
            <div className={style.OCMicon} onClick={hideContent}>
              <MdClose />
            </div>
          )}
        </div>

        {menuContent && (
          <div className={style.MenuContentBox}>
            <div className={style.FirstMenu}>
              {allPortfolioPages?.map((item) => (
                <Link href={item.href}>
                  <p
                    className={style.MenuItem}
                    key={item.id}
                    onClick={hideContent}
                  >
                    {item.pageName}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GeneralMenu;
