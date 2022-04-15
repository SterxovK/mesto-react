import React from "react";

function PopupWithForm(props) {
  return (
    <section className={`popup popup_type_${props.name} ${props.isOpen}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close button-hover"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form name={`${props.name}`} className="popup__form">
          {props.children}
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
  );
}

export default PopupWithForm;
