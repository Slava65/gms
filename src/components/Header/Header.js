import React from "react";
import headerLogo from "../../images/header-logo1.png";

function Header({ onLoginOpen }) {
  const [isSignInActivated, setIsSignInActivated] = React.useState(false);
  function signIn() {
    setIsSignInActivated(true);
    onLoginOpen();
  }

  const [isRegisterActivated, setIsRegisterActivated] = React.useState(false);
  function register() {
    setIsRegisterActivated(true);
  }

  const [isAboutActivated, setIsAboutActivated] = React.useState(false);
  function about() {
    setIsAboutActivated(true);
  }

  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="лого заголовка"></img>
      <div className="header__menu-container">
      <div
        className={`header__activebtn-background ${
          (isSignInActivated || isRegisterActivated || isAboutActivated) &&
          "header__activebtn-background_checked"
        }`}
      ></div>
      <nav
        className={`header__menu ${
          isSignInActivated && "header__menu_signinactive"
        } ${isRegisterActivated && "header__menu_registeractive"} ${
          isAboutActivated && "header__menu_aboutactive"
        }`}
      >
        <div className="header__firstbtnscontainer">
          <button
            className={`header__button ${
              isSignInActivated && "header__button_signinactive"
            } ${isRegisterActivated && "header__button_registeractive"} ${
              isAboutActivated && "header__button_aboutactive"
            }`}
            onClick={signIn}
          >
            Войти
          </button>
          <button
            className={`header__button ${
              isSignInActivated && "header__button_signinactive"
            } ${isRegisterActivated && "header__button_registeractive"} ${
              isAboutActivated && "header__button_aboutactive"
            }`}
            onClick={register}
          >
            Регистрация
          </button>
        </div>
        <div className="header__lastbtncontainer">
          <button
            className={`header__button header__button_last ${
              isSignInActivated && "header__button_signinactive"
            } ${isRegisterActivated && "header__button_registeractive"} ${
              isAboutActivated && "header__button_aboutactive"
            }`}
            onClick={about}
          >
            О проекте
          </button>
        </div>
      </nav>
      </div>
    </header>
  );
}

export default Header;
