import React from "react";
import "./App.css";

import Header from "./Header";

function App() {
  return (
    <div className="page">
      <Header/>
    <main className="content">
      <section className="profile">
        <div className="profile__block">
           <img
              className="profile__avatar"
               src="#"
              alt="#"
            />
            <button className="profile__avatar-edit-button"></button>
          </div>
          <div className="profile-intro">
            <h1 className="profile-intro__title"></h1>
            <button
              type="button"
              className="profile-intro__edit-button button-hover"
            ></button>
            <p className="profile-intro__sabtitle"></p>
          </div>
        <button type="button" className="profile__add-button button-hover"></button>
      </section>

      <section className="cards">
        <ul className="cards__list">
        
        </ul>
      </section>
    </main>
    <footer className="footer">
      <p className="footer__copyright">© 2020 Mesto Russia</p>
    </footer>

    <section className="popup popup_type_edit-profile">
      <div className="popup__container">
        <button type="button" className="popup__close button-hover"></button>
        <h2 className="popup__title">Редактировать профиль</h2>
        <form name="editProfile" className="popup__form" novalidate>
          <input
            id="profileName-input"
            type="text"
            name="name"
            placeholder="Имя"
            className="popup__field popup__field_with_name"
            minlength="2"
            maxlength="30"
            required
          />
          <span className="profileName-input-error popup__field-error"></span>
          <input
            id="profileJob-input"
            type="text"
            name="about"
            placeholder="Статус"
            className="popup__field popup__field_with_job"
            minlength="2"
            maxlength="30"
            required
          />
          <span className="profileJob-input-error popup__field-error"></span>
          <button type="submit" className="popup__save-button" data-dismiss="modal">
            Сохранить
          </button>
        </form>
      </div>
    </section>

    <section className="popup popup_type_add-cards">
      <div className="popup__container">
        <button type="button" className="popup__close button-hover"></button>
        <h2 className="popup__title">Новое место</h2>
        <form
          name="addCard"
          className="popup__form popup__form-add-card"
          novalidate
        >
          <input
            id="addCardName-input"
            type="text"
            name="name"
            placeholder="Название"
            className="popup__field popup__field_with_card-name"
            minlength="2"
            maxlength="30"
            required
          />
          <span className="addCardName-input-error popup__field-error"></span>
          <input
            id="addCardUrl-input"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            className="popup__field popup__field_with_card-link"
            required
          />
          <span className="addCardUrl-input-error popup__field-error"></span>
          <button type="submit" className="popup__save-button" data-dismiss="modal">
            Сохранить
          </button>
        </form>
      </div>
    </section>
   
    <section className="popup popup_type_remove-cards">
      <div className="popup__container">
        <button type="button" className="popup__close button-hover"></button>
        <h2 className="popup__title">Вы уверены?</h2>
        <form
        name="removeCard"
          className="popup__form popup__remove-card"
          novalidate
        >
          <button type="submit" className="popup__save-button" data-dismiss="modal">
            Да
          </button>
        </form>
      </div>
    </section>
 
    <section className="popup popup_type_edit-avatar">
      <div className="popup__container">
        <button type="button" className="popup__close button-hover"></button>
        <h2 className="popup__title">Обновить аватар</h2>
        <form
          name="avatar"
          className="popup__form"
          novalidate
        >
        <input
            id="avatar-link"
            type="url"
            name="avatar"
            placeholder="Ссылка на аватар"
            className="popup__field"
            required
          />
          <span className="avatar-link-error popup__field-error"></span>
          <button type="submit" className="popup__save-button" data-dismiss="modal">
            Да
          </button>
        </form>
      </div>
    </section>

    <section className="popup popup_type_show-cards">
      <div className="popup__container popup__container_type_show-cards">
        <button type="button" className="popup__close button-hover"></button>
        <figure className="popup__show-card">
          <img className="popup__image" src="#" alt="#" />
          <figcaption className="popup__caption"></figcaption>
        </figure>
      </div>
    </section>

    <template id="template-card">
      <li className="card">
        <div className="card__image"></div>
        <button type="button" className="card__basket button-hover"></button>
        <div className="card__group">
          <h2 className="card__title"></h2>
          <div className=" card__heart-group">
            <button type="button" className="card__heart"></button>
            <div className="card__counter-likes">0</div>
          </div>
        </div>
      </li>
    </template>
    </div>
  );
}

export default App;
