import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <li className="card">
      <div
        className="card__image"
        style={{ backgroundImage: `url(${props.card.link})` }}
        onClick={handleClick}
      ></div>
      <button type="button" className="card__basket button-hover"></button>
      <div className="card__group">
        <h2 className="card__title">{props.card.name}</h2>
        <div className=" card__heart-group">
          <button type="button" className="card__heart"></button>
          <div className="card__counter-likes">{props.card.likes.length}</div>
        </div>
      </div>
    </li>
  );
}

export default Card;
