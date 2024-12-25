export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popupElement = document.querySelector(this._popupSelector);
    this._bindedHandleEscClose = this._handleEscClose.bind(this);
    this._bindedHandleMouseClose = this._handleMouseClose.bind(this);
    this._saveBtnElement = this._popupElement.querySelector('.popup__save-button');
  }
  open() {
    this.setEventListeners();
    this._popupElement.classList.add('popup_opened');
  }
  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._bindedHandleEscClose);
    this._popupElement.removeEventListener('mousedown', this._bindedHandleMouseClose);
  }
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }
  _handleMouseClose(evt) {
    if (
      evt.target.classList.contains('popup_opened') ||
      evt.target.classList.contains('popup__close-button')
    ) {
      this.close();
    }
  }
  setEventListeners() {
    document.addEventListener('keydown', this._bindedHandleEscClose);
    this._popupElement.addEventListener('mousedown', this._bindedHandleMouseClose);
  }
  // Замена надписи на кнопке
  changeBtnText(btnText) {
    if (this._saveBtnElement) {
      this._saveBtnElement.textContent = btnText;
    }
  }
}
