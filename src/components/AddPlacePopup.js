import React from "react";
import PopupWithForm from "./PopupWithForm";


function AddPlacePopup({ isOpen, onClose, onAddPlace, buttonSubmitText }) {
  const namePlaceRef = React.useRef();
  const linkPlaceRef = React.useRef();

  

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: namePlaceRef.current.value,
      link: linkPlaceRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="add-cards"
      isOpen={isOpen}
      title="Новое место"
      onClose={onClose}
      buttonText={buttonSubmitText}
      onSubmit={handleSubmit}
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
        ref={namePlaceRef}
      />
      <span className="addCardName-input-error popup__field-error"></span>
      <input
        id="addCardUrl-input"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        className="popup__field popup__field_with_card-link"
        required
        ref={linkPlaceRef}
      />
      <span className="profileJob-input-error popup__field-error"></span>
    </PopupWithForm>
  );
}
export default AddPlacePopup;