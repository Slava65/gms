import FormPopup from "../Formpopup/FormPopup";

function Login({ isOpen, onClose }) {
  return (
    <FormPopup
      name={"login"}
      title={"Вход"}
      buttonText="Войти"
      isOpen={isOpen}
      onClose={onClose}
    >
      <input className="login__text" placeholder="Е-mail"></input>
      <input className="login__text" placeholder="Пароль"></input>
    </FormPopup>
  );
}

export default Login;
