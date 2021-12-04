import FormPopup from "../Formpopup/FormPopup";

function Login({ isOpen }) {
  return (
    <FormPopup
      name={"login"}
      title={"Вход"}
      buttonText="Войти"
      isOpen={isOpen}
    >
      <input className="popup__text" placeholder="Е-mail"></input>
      <input className="popup__text" placeholder="Пароль"></input>
    </FormPopup>
  );
}

export default Login;
