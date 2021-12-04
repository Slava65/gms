import React from "react";
import Main from "../Main/Main";
import Header from "../Header/Header"
import Login from "../Login/Login";

function App() {

  const [isLoginPopupOpened, setIsLoginPopupOpened] = React.useState(false);
  function handleOpenLoginPopup() {
    setIsLoginPopupOpened(true);
  }

  return (
    <div className="App">
      <Header onLoginOpen={handleOpenLoginPopup} />
      <Main  />
      <Login isOpen={isLoginPopupOpened} />
    </div>
  );
}

export default App;
