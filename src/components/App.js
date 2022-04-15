import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

const POPUP_OPENED = "popup_opened";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  };

  const [selectedCard, setSelectedCard] = React.useState({});
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <PopupWithForm
        name="edit-profile"
        isOpen={`${isEditProfilePopupOpen && POPUP_OPENED}`}
        title="Редактировать профиль"
        onClose={closeAllPopups}
      >
        <input
          id="profileName-input"
          type="text"
          name="name"
          placeholder="Имя"
          className="popup__field popup__field_with_name"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="profileName-input-error popup__field-error"></span>
        <input
          id="profileJob-input"
          type="text"
          name="about"
          placeholder="Статус"
          className="popup__field popup__field_with_job"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="profileJob-input-error popup__field-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="add-cards"
        isOpen={`${isAddPlacePopupOpen && POPUP_OPENED}`}
        title="Новое место"
        onClose={closeAllPopups}
      >
        <input
          id="addCardName-input"
          type="text"
          name="name"
          placeholder="Название"
          className="popup__field popup__field_with_card-name"
          minLength="2"
          maxLength="30"
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
        <span className="profileJob-input-error popup__field-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="edit-avatar"
        isOpen={`${isEditAvatarPopupOpen && POPUP_OPENED}`}
        title="Обновить аватар"
        onClose={closeAllPopups}
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
      </PopupWithForm>
      <Footer />
      <ImagePopup
        name="show-cards"
        card={selectedCard}
        onClose={closeAllPopups}
      />

      {/* <section className="popup popup_type_edit-profile">
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
              minLength="2"
              maxLength="30"
              required
            />
            <span className="profileName-input-error popup__field-error"></span>
            <input
              id="profileJob-input"
              type="text"
              name="about"
              placeholder="Статус"
              className="popup__field popup__field_with_job"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="profileJob-input-error popup__field-error"></span>
            <button
              type="submit"
              className="popup__save-button"
              data-dismiss="modal"
            >
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
              minLength="2"
              maxLength="30"
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
            <button
              type="submit"
              className="popup__save-button"
              data-dismiss="modal"
            >
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
            <button
              type="submit"
              className="popup__save-button"
              data-dismiss="modal"
            >
              Да
            </button>
          </form>
        </div>
      </section>

      <section className="popup popup_type_edit-avatar">
        <div className="popup__container">
          <button type="button" className="popup__close button-hover"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form name="avatar" className="popup__form" novalidate>
            <input
              id="avatar-link"
              type="url"
              name="avatar"
              placeholder="Ссылка на аватар"
              className="popup__field"
              required
            />
            <span className="avatar-link-error popup__field-error"></span>
            <button
              type="submit"
              className="popup__save-button"
              data-dismiss="modal"
            >
              Да
            </button>
          </form>
        </div>
      </section> */}

      {/* <template id="template-card">
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
      </template> */}
    </div>
  );
}

export default App;
