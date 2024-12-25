export const apiconfig = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/apf-cohort-202/',
  headers: {
    authorization: '11fe340f-5813-4b58-a7aa-b45cd26a5cb3',
    'Content-Type': 'application/json',
  },
};

export const cardTemplateSelector = '.card-template';
export const cardsContainerSelector = '.gallery__list';
export const profilePopupSelector = '.popup_type_profile';
export const avatarPopupSelector = '.popup_type_avatar';

export const cardPopupSelector = '.popup_type_card';
export const pfotoPopupSelector = '.popup_type_image';

export const confirmPopupSelector = '.popup_type_confirm';
export const userNameSelector = '.profile__name';
export const userDescriptionSelector = '.profile__job';
export const userAvatarImageSelector = '.profile__avatar';
export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  invalidInputClass: 'popup__input_state_invalid',
  errorClass: 'popup__input-error_active',
  submitButtonClass: 'popup__save-button_inactive',
};
