import Popup from './Popup.js';

// Класс попапа подтверждения действия
export default class PopupWithConfirmation extends Popup {
  constructor(confirmPopupSelector) {
    super(confirmPopupSelector);
    this._bindedHandleConfirm = this._handleConfirm.bind(this);
  }
  setEventListeners() {
    super.setEventListeners();
    this._saveBtnElement.addEventListener('click', this._bindedHandleConfirm);
  }
  // Получение обработчика клика и его аргумента
  getConfirmHandler({ confirmHandler, confirmHandlerArgument }) {
    this._confirmHandler = confirmHandler;
    this._confirmHandlerArgument = confirmHandlerArgument;
  }
  // Оборачиваем вызов обработчика для дальнейшей привязки контекста через bind
  // и использования в колбэке слушаетеля как неанонимной функции для обеспечения
  // возоможности снять слушатель если попап закрыт без подтверждения
  _handleConfirm() {
    this._confirmHandler(this._confirmHandlerArgument);
  }

  close() {
    super.close();
    this._saveBtnElement.removeEventListener('click', this._bindedHandleConfirm);
  }
}
