import React from "react";
import api from "../utils/Api";
import Card from "../components/Card";

function Main(props) {

  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((promis) => {
        setUserName(promis.name);
        setUserDescription(promis.about);
        setUserAvatar(promis.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__block">
          <img className="profile__avatar" src={userAvatar} alt="#" />
          <button
            className="profile__avatar-edit-button"
            onClick={props.onEditAvatar}
          />
        </div>
        <div className="profile-intro">
          <h1 className="profile-intro__title">{userName}</h1>
          <button
            type="button"
            className="profile-intro__edit-button button-hover"
            onClick={props.onEditProfile}
          />
          <p className="profile-intro__sabtitle">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__add-button button-hover"
          onClick={props.onAddPlace}
        />
      </section>

      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                onCardClick={props.onCardClick}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
