
//---------------popup profile edit const start----------------------- 
const btnEditProfile = document.querySelector(".profile__edit-button");

const popupCloseBtnEditProfile = document.querySelector(".popup__close-button-edit");//was without edit// changed into document //changed back
//const popupFormSubmitEditProfile = document.querySelector(".popup__submit-button-edit");//changed into document//changed back
const popupFormSubmitEditProfile = document.querySelector(".popup__form_edit-profile"); //!!!!!not the button, the form! Otherwise, submit doesn't work!
const popupEditProfile = document.querySelector(".popup_edit");
const popupInputName = document.querySelector(".popup__input_type_name");//changed into document//changed back
const popupInputOccupation = document.querySelector(".popup__input_type_occupation");//changed into document//changed back

const profileInfoName = document.querySelector(".profile__info-name");
const profileInfoOccupation = document.querySelector(".profile__info-occupation");
//---------------popup profile edit const end----------------------- 

//---------------popup profile add const start-----------------------
const btnAddCard = document.querySelector(".profile__add-button");

const popupCloseBtnAddCard = document.querySelector(".popup__close-button-add"); //forgot to change into document here popupElement doesn't work
//const popupFormSubmitAddCard = document.querySelector(".popup__submit-button-add"); //changed into document//changed back//NEVER CHANGE BACK!!!!!!!!!!
const popupFormSubmitAddCard = document.querySelector(".popup__form_add-card");//!!!!!not the button, the form! Otherwise, submit doesn't work!
const popupAddCard = document.querySelector(".popup_add");
const popupInputCardName = document.querySelector(".popup__input_type_card-name");//changed into document//changed back//NEVER CHANGE BACK!!!!!!!!!!
const popupInputCardLink = document.querySelector(".popup__input_type_card-link");//changed into document//changed back//NEVER CHANGE BACK!!!!!!!!!!
//---------------popup profile add const end-----------------------

//-------------popup-pic const start--------------------
const popupForZoomPic = document.querySelector(".popup-picture");
const popupCloseBtnZoomPic = document.querySelector(".popup-picture__close-button");
const popupPicZoom = document.querySelector(".popup-picture__zoom");
const popupPicName = document.querySelector(".popup-picture__zoom-name");
//-------------popup-pic const end---------------------

//-------------createCard const start----------------- 
const picGalleryCardsContainer = document.querySelector(".pic-gallery__cards"); //was openPopup
const picGalleryCardTemplate = document.querySelector(".pic-gallery__cards-template").content; //Not sure if that change was meant (remarque 10)
//------------create const end------------------------

//---------------popups open-close start----------
function openPopup (openPopupArea) {
 // element.classList.add('popup_opened');
 openPopupArea.classList.add('popup-picture_opened'); //How on Earth does it work?!
  //openPopup.reset();
}

function closePopup (closePopupArea) {
 // element.classList.remove('popup_opened');
 closePopupArea.classList.remove('popup-picture_opened');//How on Earth does it work?! 
  //But it doesn't work with popup_opened for everything... 
  //BEM, I think it's about BEM...
}


const openPopupEditProfile = (event) => {
 // popupEditProfile.classList.add('popup_opened');
  popupInputName.value = profileInfoName.textContent;
  popupInputOccupation.value = profileInfoOccupation.textContent;
  openPopup (popupEditProfile);
} 

const openPopupAddCard = (event) => {
  //popupAddCard.classList.add('popup_opened');
  openPopup (popupAddCard);
  //popupInputCardName.value = ''; //To reset the parameters in the popup after adding a card
  //popupInputCardLink.value = '';
} 

const openPopupForZoomPic = (event) => {
  //popupForZoomPic.classList.add('popup-picture_opened');
  openPopup(popupForZoomPic);
}

const closePopupEditProfile = (event) => {
  //popupEditProfile.classList.remove('popup_opened');
  closePopup (popupEditProfile);
};

const closePopupAddCard = (event) => {
  //popupAddCard.classList.remove('popup_opened');
  closePopup (popupAddCard);
};

const closePopupForZoomPic = (event) => {
  //popupForZoomPic.classList.remove('popup-picture_opened');
  closePopup(popupForZoomPic);
};

const handleClosePopupOverlayClick = (event) => {
  if (event.target === event.currentTarget) {
    //closePopupEditProfile();
    //closePopupAddCard();
    //closePopupForZoomPic();
    closePopup(event.currentTarget);
  }
  else {
    return;
  }
}

//---------------popups open-close end----------

//-----------------------function popup edit start----------------------
const handlePopupSubmitEditProfile = (event) => { //Doesn't quite work with submit yet
  event.preventDefault();
  profileInfoName.textContent = popupInputName.value;
  profileInfoOccupation.textContent = popupInputOccupation.value;
  closePopupEditProfile(); //I put popupInputName, etc. into openPopupEdit
}
//----------------------function popup edit end-------------------

//--------------------template cards start------------------
//------------Add handler start------------------------------
const handlePopupSubmitAddCard = (event) => { //Doesn't quite work with submit yet
  event.preventDefault();
  console.log(event.defaultPrevented);
  const cardEntry = {
    name: popupInputCardName.value,
    link: popupInputCardLink.value
  };
  picGalleryCardsContainer.prepend(createCard(cardEntry)); //Need to put a function of creation of a card
  closePopupAddCard();
  event.target.reset(); //Calling the reset() method on a collection of elements instead of a form element?
}
//------------Add handler end-------------------------------

//-----------Add function that creates a card start-------
const createCard = (cardData) => {
  const picGalleryCardElement = picGalleryCardTemplate.querySelector(".pic-gallery__card").cloneNode(true); //Not sure if that change was meant (remarque 10)
  const picGalleryCardElementPic = picGalleryCardElement.querySelector(".pic-gallery__image");
  const picGalleryCardElementName = picGalleryCardElement.querySelector(".pic-gallery__name");

  picGalleryCardElement.querySelector(".pic-gallery__delete-button").addEventListener('click', function(event){
    picGalleryCardElement.remove();
  });

  picGalleryCardElementPic.src = cardData.link;
  picGalleryCardElementName.textContent = cardData.name;
  picGalleryCardElementPic.alt = cardData.name;

  picGalleryCardElement.querySelector(".pic-gallery__like-button").addEventListener('click', handleLikeBtn);

  picGalleryCardElementPic.addEventListener('click', renderPopupForZoomPic);

  return picGalleryCardElement;
}

//-------------like button function start---------------
function handleLikeBtn (event) {
event.target.classList.toggle("pic-gallery__like-button_active");
}
//-------------like button function end-----------------

initialPicCards.forEach((element) => {
  picGalleryCardsContainer.prepend(createCard(element))
});

//------------need to connect a card and the pic-zoom start-------

function renderPopupForZoomPic(event) {
  popupPicZoom.src = event.target.src;
  popupPicZoom.alt = event.target.alt;
  popupPicName.textContent = event.target.alt;
  openPopup(popupForZoomPic);
}
//------------need to connect a card and the pic-zoom end-------
//-----------Add function that creates a card end-------
//--------------------template cards end------------------

//----------Listeners start----------------------------
btnEditProfile.addEventListener('click', openPopupEditProfile);
popupCloseBtnEditProfile.addEventListener('click', closePopupEditProfile);
popupFormSubmitEditProfile.addEventListener('submit', handlePopupSubmitEditProfile);

btnAddCard.addEventListener('click', openPopupAddCard);
popupCloseBtnAddCard.addEventListener('click', closePopupAddCard);
popupFormSubmitAddCard.addEventListener('submit', handlePopupSubmitAddCard);

popupEditProfile.addEventListener('click', handleClosePopupOverlayClick);
popupAddCard.addEventListener('click', handleClosePopupOverlayClick);
popupForZoomPic.addEventListener('click', handleClosePopupOverlayClick);

popupCloseBtnZoomPic.addEventListener('click', closePopupForZoomPic);
//----------Listeners end----------------------------