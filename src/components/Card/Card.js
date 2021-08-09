import one from '../../images/1.jpg' 

function Card() {

  function getPrice() {
    return Math.round(Math.random() * 8 + 1);
  }

  return (
    <article className="card">
      <h3 className="card__title">Название</h3>
      <img className="card__picture" src={one} alt="lol"></img>
      <nav className="card__menu">
      <p className="card__text">{`Цена: ${getPrice()} кликов`}</p>

      <button className="card__buy">Купить</button>
      <div className="card__like-part">
      <button className="card__like"></button>
      <p className="card__like-counter">0</p>
      </div>
      </nav>
    </article>
  );
}

export default Card;
