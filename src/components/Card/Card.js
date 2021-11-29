import React, { useRef } from "react";

function Card({ mem }) {
  const blackout = useRef(null);

  const [isImageVisible, setIsImageVisible] = React.useState(false);

  function cutPicture() {
    let shiftTop = getRandomInt() * 10 + "%";
    let shiftLeft = getRandomInt() * 10 + "%";
    blackout.current.style.setProperty("--top", shiftTop);
    blackout.current.style.setProperty("--left", shiftLeft);
  }

  React.useEffect(() => {
    cutPicture();
  }, []);

  function getPrice() {
    return Math.round(Math.random() * 8 + 1);
  }

  function getRandomInt() {
    return Math.floor(Math.random() * 10);
  }

  let price = 5;
  let amountClicks = 1;
  function countClick(e) {
    e.preventDefault();
    if (amountClicks === price) {
      blackout.current.style.setProperty("--opacity", 0);
    } else {
      amountClicks = amountClicks + 1;
    }
  }

  return (
    <li className="card">
      <article>
        <h3 className="card__title">Название</h3>

        <div className="card__picture-container" ref={blackout}>
          <img className="card__picture" src={mem.url} alt="lol"></img>
        </div>
        <nav className="card__menu">
          <p className="card__text">{`Цена: ${price} кликов`}</p>
          <button className="card__buy" onClick={countClick}>
            Купить
          </button>
          <div className="card__like-part">
            <button className="card__like"></button>
            <p className="card__like-counter">0</p>
          </div>
        </nav>
      </article>
    </li>
  );
}

export default Card;
