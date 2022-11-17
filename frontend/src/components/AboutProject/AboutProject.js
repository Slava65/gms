import FormPopup from "../Formpopup/FormPopup";

function AboutProject({ isOpen, onClose, onClick }) {

  return (
    <FormPopup
      name={"about"}
      title={"О Проекте"}
      buttonText="Вернуться"
      isOpen={isOpen}
      onClose={onClose}
      onClick={onClick}
    >
      <p className="aboutproject__text">
      Добрый день. Меня зовут Вячеслав. Я начинающий вэб-разработчик. Это мой
      первый полностью самостоятельный проект. Пока что выполнена фронтенд-часть
      проекта на основе React. Но бэкэнд уже в работе, планирую использовать
      Express. Идея проекта заключается в обмене между пользователями сайта
      мемами и смешными картинками, которые они могут добавлять и сохранять в
      своем личном кабинете.
      </p>
    </FormPopup>
  );
}

export default AboutProject;
