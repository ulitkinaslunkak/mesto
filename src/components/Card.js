// Класс карточек
export default class Card {
  constructor(
    {
      data: {
        cardData: { likes, link, name, owner, _id },
        userId,
      },
      handleCardClick,
      handleLikeClick,
      handleDelClick,
    },
    cardSelector
  ) {
    this._likes = likes;
    this._link = link;
    this._name = name;
    this._description = `Фотография места. ${name}`;
    this._owner = owner;
    this._id = _id;
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDelClick = handleDelClick;
    this._cardSelector = cardSelector;
  }

  // Подготовка элемента карточки для вставки на страницу
  generateCard() {
    this._cardElement = this._getTemplate();
    this._cardNameElement = this._cardElement.querySelector('.card__name');
    this._cardPhotoElement = this._cardElement.querySelector('.card__photo');
    this._cardDelButtonElement = this._cardElement.querySelector('.card__delete');
    this._cardLikeElement = this._cardElement.querySelector('.card__like');
    this._cardLikeNumberElement = this._cardElement.querySelector('.card__like-number');
    this._setLikeNumber();
    this._setLikeState();
    this._setDelButtonState();
    this._setEventListeners();
    this._cardNameElement.textContent = this._name;
    this._cardPhotoElement.setAttribute('src', this._link);
    this._cardPhotoElement.setAttribute('alt', this._description);
    this._cardLikeNumberElement.textContent = this._likes.length;
    return this._cardElement;
  }
  // Получение шаблона разметки для новой карточки
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector('.card')
      .cloneNode(true);
    return cardElement;
  }
  // Установка количества лайков в разметку
  _setLikeNumber() {
    this._cardLikeNumberElement.textContent = this._likes.length;
  }
  // Установка состояния элементу лайка в зависимости от "лайкнутости"
  _setLikeState() {
    if (this._defineIsLiked()) {
      this._cardLikeElement.classList.add('card__like_active');
      this.isLiked = true;
    } else {
      this._cardLikeElement.classList.remove('card__like_active');
      this.isLiked = false;
    }
  }
  // Определение "лайкнутости" карточки текущим пользователем
  _defineIsLiked() {
    return this._likes.some(item => {
      return item._id === this._userId;
    });
  }
  // Установка состояния элементу кнопки удаления карточки
  _setDelButtonState() {
    if (this._isOwn()) {
      this._cardDelButtonElement.classList.remove('card__delete_inactive');
    } else {
      this._cardDelButtonElement.classList.add('card__delete_inactive');
    }
  }
  // Определение принадлежности карточки пользователю
  _isOwn() {
    return this._owner._id === this._userId ? true : false;
  }
  // Установка слушателей на элементы карточки
  _setEventListeners() {
    this._cardPhotoElement.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link, this._description);
    });
    this._cardLikeElement.addEventListener('click', () => {
      this._handleLikeClick(this);
    });
    this._cardDelButtonElement.addEventListener('click', () => {
      this._handleDelClick(this);
    });
  }
  // Обработка ответа сервера с обновленными данными по лайкам
  handleServerResForLike(updatedCardData) {
    this._updateLikesData(updatedCardData);
    this._setLikeNumber();
    this._invertIsLiked();
    this._toggleLikeElementState();
  }
  // Сохранение нового объекта данных карточки, полученного от сервера
  _updateLikesData(updatedCardData) {
    this._likes = updatedCardData.likes;
  }
  // Инверсия свойства "лайкнутости"
  _invertIsLiked() {
    this.isLiked = !this.isLiked;
  }
  // Переключение состояния элемента лайка
  _toggleLikeElementState() {
    this._cardLikeElement.classList.toggle('card__like_active');
  }
  // Удаление карточки
  deleteCardElement() {
    this._cardElement.remove();
  }
}
