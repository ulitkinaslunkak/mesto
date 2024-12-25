import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.imageElement = this._popupElement.querySelector('.popup__image');
    this.captionElement = this._popupElement.querySelector('.popup__caption');
  }
  open(photoCaption, photoLink, photoDescription) {
    this.captionElement.textContent = photoCaption;
    this.imageElement.src = photoLink;
    this.imageElement.alt = photoDescription;
    super.open();
  }
}
