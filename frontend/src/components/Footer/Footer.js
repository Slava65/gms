import React from "react";
import { Link } from "react-router-dom";
import Navbar from "reactjs-navbar";
import logo from "../../images/nav-bar-logo.png"
import navyandex from "../../images/nav-bar-yandex.png"
import navgit from "../../images/nav-bar-git.png" 
import navtelegram from "../../images/nav-bar-telegram.png" 

function Footer() {

  return (
    <footer>
      <p>&copy; 2020 - 2022. Слава Зайцев</p>
      <Navbar
        logo={logo}
    
        menuItems={[
          {
            title: "Яндекс.Практикум",
            icon: navyandex,
            isAuth: true,
            onClick: () => {
              // What you want to do...
              alert("Its coffee time...");
              console.log("123")
            },
          },
          {
            title: "GitHub",
            icon: navgit,
            isAuth: true,
            onClick: () => {
              // What you want to do...
              alert("Its coffee time...");
              console.log("123")
            },
          },
          {
            title: "Telegram",
            icon: navtelegram,
            isAuth: true,
            onClick: () => {
              // What you want to do...
              alert("Its coffee time...");
            },
          },
         
        ]}
      />
      {/* <nav>
        <Link to={"https://praktikum.yandex.ru/"} className="footer__link">
          Яндекс.Практикум
        </Link>
        <Link to={"https://github.com/Slava65"} className="footer__link">
          Github
        </Link>
        <Link to={"https://slavazdiploma.students.nomoredomains.icu"} className="footer__link">
          Выпускной проект из Яндекс.Практикума.
        </Link>
      </nav> */}
    </footer>
  );
}

export default Footer;
