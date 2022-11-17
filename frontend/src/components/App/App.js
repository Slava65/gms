import React from "react";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AboutProject from "../AboutProject/AboutProject";
import Footer from "../Footer/Footer";

function App() {
  const [isLoginPopupOpened, setIsLoginPopupOpened] = React.useState(false);
  const [isRegisterPopupOpened, setIsRegisterPopupOpened] =
    React.useState(false);
  const [isAboutProjectPopupOpened, setIsisAboutProjectPopupOpened] =
    React.useState(false);

  const [isSignInActivated, setIsSignInActivated] = React.useState(false);
  function signInClick() {
    setIsSignInActivated(true);
    setIsLoginPopupOpened(true);
    setIsSignInDeActivated(false);
    setIsRegisterDeActivated(false);
    setIsAboutDeActivated(false);
    
  }

  function registerClick() {
    setIsRegisterActivated(true);
    setIsRegisterPopupOpened(true);
    setIsSignInDeActivated(false);
    setIsRegisterDeActivated(false);
    setIsAboutDeActivated(false);
    
  }

  function aboutProjectClick() {
    setIsAboutProjectActivated(true);
    setIsisAboutProjectPopupOpened(true);
    setIsSignInDeActivated(false);
    setIsRegisterDeActivated(false);
    setIsAboutDeActivated(false);
  }

  const [isRegisterActivated, setIsRegisterActivated] = React.useState(false);

  const [isAboutActivated, setIsAboutProjectActivated] = React.useState(false);

  const [isSignInDeActivated, setIsSignInDeActivated] = React.useState(false);
  const [isRegisterDeActivated, setIsRegisterDeActivated] =
    React.useState(false);
  const [isAboutDeActivated, setIsAboutDeActivated] = React.useState(false);
  function closePopups() {
    setIsLoginPopupOpened(false);
    setIsRegisterPopupOpened(false);
    setIsisAboutProjectPopupOpened(false);
    setIsRegisterActivated(false);
    setIsAboutProjectActivated(false);
    setIsSignInActivated(false);
    setIsSignInDeActivated(true);
    setIsRegisterDeActivated(true);
    setIsAboutDeActivated(true);
  }

  function backFromAboutProject(e) {
    e.preventDefault();
    closePopups();
  }

  return (
    <div className="App">
      <Header
        isSignInActivated={isSignInActivated}
        isRegisterActivated={isRegisterActivated}
        isAboutActivated={isAboutActivated}
        onSignIn={signInClick}
        onRegister={registerClick}
        onAbout={aboutProjectClick}
        isSignInDeActivated={isSignInDeActivated}
        isRegisterDeActivated={isRegisterDeActivated}
        isAboutDeActivated={isAboutDeActivated}
      />
      <Main />
      <Login isOpen={isLoginPopupOpened} onClose={closePopups} />
      <Register isOpen={isRegisterPopupOpened} onClose={closePopups} />
      <AboutProject isOpen={isAboutProjectPopupOpened} onClose={closePopups} onClick={backFromAboutProject} />
      <Footer />
    </div>
  );
}

export default App;
