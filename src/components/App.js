import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});


  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
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
        isOpen={isEditProfilePopupOpen}
        title="Редактировать профиль"
        onClose={closeAllPopups}
        buttonText="Сохранить"
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
        isOpen={isAddPlacePopupOpen}
        title="Новое место"
        onClose={closeAllPopups}
        buttonText="Сохранить"
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
        isOpen={isEditAvatarPopupOpen}
        title="Обновить аватар"
        onClose={closeAllPopups}
        buttonText="Да"
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

      
    </div>
  );
}

export default App;
