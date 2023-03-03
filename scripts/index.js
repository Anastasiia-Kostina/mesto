//---------------popup profile edit const start-----------------------
const btnEditProfile = document.querySelector(".profile__edit-button");

const popupCloseBtnEditProfile = document.querySelector(
  ".popup__close-button-edit"
);
const popupFormSubmitEditProfile = document.querySelector(
  ".popup__form_edit-profile"
);
const popupEditProfile = document.querySelector(".popup_edit");
const popupInputName = document.querySelector(".popup__input_type_name");
const popupInputOccupation = document.querySelector(
  ".popup__input_type_occupation"
);

const profileInfoName = document.querySelector(".profile__info-name");
const profileInfoOccupation = document.querySelector(
  ".profile__info-occupation"
);
//---------------popup profile edit const end-----------------------

//---------------popup profile add const start-----------------------
const btnAddCard = document.querySelector(".profile__add-button");

const popupCloseBtnAddCard = document.querySelector(".popup__close-button-add");
const popupFormSubmitAddCard = document.querySelector(".popup__form_add-card");
const popupAddCard = document.querySelector(".popup_add");
const popupInputCardName = document.querySelector(
  ".popup__input_type_card-name"
);
const popupInputCardLink = document.querySelector(
  ".popup__input_type_card-link"
);
//---------------popup profile add const end-----------------------

//-------------popup-pic const start--------------------
const popupForZoomPic = document.querySelector(".popup-picture");
const popupPicZoom = document.querySelector(".popup-picture__zoom");
const popupPicName = document.querySelector(".popup-picture__zoom-name");
//-------------popup-pic const end---------------------

//-------------createCard const start-----------------
const picGalleryCardsContainer = document.querySelector(".pic-gallery__cards");
const picGalleryCardTemplate = document.querySelector(
  ".pic-gallery__cards-template"
).content;
//------------create const end------------------------

//---------------popups open-close start----------
function openPopup(openPopupArea) {
  openPopupArea.classList.add("popup_opened");
}

function closePopup(closePopupArea) {
  closePopupArea.classList.remove("popup_opened");
}

const openPopupEditProfile = (event) => {
  popupInputName.value = profileInfoName.textContent;
  popupInputOccupation.value = profileInfoOccupation.textContent;
  openPopup(popupEditProfile);
};

const openPopupAddCard = (event) => {
  openPopup(popupAddCard);
};

const openPopupForZoomPic = (event) => {
  openPopup(popupForZoomPic);
};

const closePopupEditProfile = (event) => {
  closePopup(popupEditProfile);
};

const closePopupAddCard = (event) => {
  closePopup(popupAddCard);
};

const handleClosePopupOnClick = (event) => {
  if (event.target === event.currentTarget || event.target.classList.contains('popup__close-button')) {
    closePopup(event.currentTarget);
  } else {
    return;
  }
};
//---------------popups open-close end----------

//-----------------------function popup edit start----------------------
const handlePopupSubmitEditProfile = (event) => {
  event.preventDefault();
  profileInfoName.textContent = popupInputName.value;
  profileInfoOccupation.textContent = popupInputOccupation.value;
  closePopupEditProfile();
};
//----------------------function popup edit end-------------------

//--------------------template cards start------------------
//------------Add handler start------------------------------
const handlePopupSubmitAddCard = (event) => {
  event.preventDefault();
  const cardEntry = {
    name: popupInputCardName.value,
    link: popupInputCardLink.value,
  };
  picGalleryCardsContainer.prepend(createCard(cardEntry));
  closePopupAddCard();
  event.target.reset();
};
//------------Add handler end-------------------------------

//-----------Add function that creates a card start-------
const createCard = (cardData) => {
  const picGalleryCardElement = picGalleryCardTemplate
    .querySelector(".pic-gallery__card")
    .cloneNode(true);
  const picGalleryCardElementPic = picGalleryCardElement.querySelector(
    ".pic-gallery__image"
  );
  const picGalleryCardElementName =
    picGalleryCardElement.querySelector(".pic-gallery__name");

  picGalleryCardElement
    .querySelector(".pic-gallery__delete-button")
    .addEventListener("click", function (event) {
      picGalleryCardElement.remove();
    });

  picGalleryCardElementPic.src = cardData.link;
  picGalleryCardElementName.textContent = cardData.name;
  picGalleryCardElementPic.alt = cardData.name;

  picGalleryCardElement
    .querySelector(".pic-gallery__like-button")
    .addEventListener("click", handleLikeBtn);

  picGalleryCardElementPic.addEventListener("click", () => renderPopupForZoomPic(name, link)); //It works but why is the name crossed?

  return picGalleryCardElement;
};
//-------------like button function start---------------
function handleLikeBtn(event) {
  event.target.classList.toggle("pic-gallery__like-button_active");
}
//-------------like button function end-----------------

//--------------forEach for cards start-----------------
initialPicCards.forEach((element) => {
  picGalleryCardsContainer.prepend(createCard(element));
});
//--------------forEach for cards end-------------------

//------------need to connect a card and the pic-zoom start-------
function renderPopupForZoomPic(name, link) {
  popupPicZoom.src = link.target.src;
  popupPicZoom.alt = link.target.alt;
  popupPicName.textContent = name.target.alt;
  openPopup(popupForZoomPic);
}
//------------need to connect a card and the pic-zoom end-------
//-----------Add function that creates a card end-------
//--------------------template cards end------------------

//----------Listeners start----------------------------
btnEditProfile.addEventListener("click", openPopupEditProfile);
popupCloseBtnEditProfile.addEventListener("click", closePopupEditProfile);
popupFormSubmitEditProfile.addEventListener(
  "submit",
  handlePopupSubmitEditProfile
);

btnAddCard.addEventListener("click", openPopupAddCard);
popupCloseBtnAddCard.addEventListener("click", closePopupAddCard);
popupFormSubmitAddCard.addEventListener("submit", handlePopupSubmitAddCard);

popupEditProfile.addEventListener("click", handleClosePopupOnClick);
popupAddCard.addEventListener("click", handleClosePopupOnClick);
popupForZoomPic.addEventListener("click", handleClosePopupOnClick);
//----------Listeners end----------------------------
