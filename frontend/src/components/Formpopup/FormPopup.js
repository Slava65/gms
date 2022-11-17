export default function FormPopup({
  name,
  isOpen,
  title,
  children,
  buttonText,
  onClose,
  onSubmit,
  onClick,
}) {
  return (
    <div className={`popup popup_${name} ${isOpen && "popup_opened"}`}>
      <form
        className={`popup__container popup__container_${name}`}
        name="popup-place__container"
        noValidate
      >
        <h2 className="popup__title">{title}</h2>
        {children}
        <button
          type="button"
          className="popup__close"
          aria-label="Закрыть Окно"
          onClick={onClose}
        ></button>
        <button type="submit" onSubmit={onSubmit} onClick={onClick} className="popup__enter" aria-label="Создать">
          {buttonText}
        </button>
      </form>
    </div>
  );
}
