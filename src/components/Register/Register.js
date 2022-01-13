import FormPopup from "../Formpopup/FormPopup";

function Register({ isOpen, onClose }) {
  return (
    <FormPopup
      name={"register"}
      title={"Регистрация"}
      buttonText="Зарегистрироваться"
      isOpen={isOpen}
      onClose={onClose}
    >
      <input className="register__text" placeholder="Имя"></input>
      <input className="register__text" placeholder="Е-mail"></input>
      <input className="register__text" placeholder="Пароль"></input>
    </FormPopup>
  );
}

export default Register;
