import React from "react";
import { contactdata } from "./contactData";
import style from "./Contact.module.css";
function Contact() {
  return (
    <>
      <h2 className={style.Heading}> Let's connect </h2>
      <img
        className={style.TopImage}
        src="https://raw.githubusercontent.com/Elir-Mahad/porass/main/assets/blackanimecharacter.jpeg"
        alt="Anime character with glasses"
      />
      <div className={style.AllItemsContainer}>
        {contactdata?.map((item) => (
          <div className={style.ItemContainer}>
            <a className={style.Link} href={item.href}>
              <img className={style.Image} src={item.src} alt={item.alt} />
            </a>
            <p className={style.Name}>{item.contactType}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default Contact;
