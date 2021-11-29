import React from "react";
import headerLogo from "../../images/header-logo.png"

function Header () {

  const [isSignInActivated, setIsSignInActivated] = React.useState(false);
    function signIn() {
      setIsSignInActivated(true);
    }

    const [isRegisterActivated, setIsRegisterActivated] = React.useState(false);
    function register() {
      setIsRegisterActivated(true);
    }

    const [isSignOutActivated, setIsSignOutActivated] = React.useState(false);
    function signOut() {
      setIsSignOutActivated(true);
    }

    return (
      <header className="header">
          <img className="header__logo" src={headerLogo} alt="лого заголовка"></img>
          <nav className={`header__menu ${isSignInActivated && "header__menu_signinactive"} ${isRegisterActivated && "header__menu_registeractive"} ${isSignOutActivated && "header__menu_signoutactive"}`}>
            <div className="header__firstbtnscontainer">
           
              <button className={`header__button ${isSignInActivated && "header__button_signinactive"} ${isRegisterActivated && "header__button_registeractive"} ${isSignOutActivated && "header__button_signoutactive"}`} onClick={signIn}>Войти</button>
              <button className={`header__button ${isSignInActivated && "header__button_signinactive"} ${isRegisterActivated && "header__button_registeractive"} ${isSignOutActivated && "header__button_signoutactive"}`} onClick={register}>Регистрация</button>
              </div>
              <div className="header__lastbtncontainer">
              <button className={`header__button header__button_last ${isSignInActivated && "header__button_signinactive"} ${isRegisterActivated && "header__button_registeractive"} ${isSignOutActivated && "header__button_signoutactive"}`} onClick={signOut}>Выход</button>
              </div>
              </nav>  
      </header>
    );
  }
 
  export default Header;
  