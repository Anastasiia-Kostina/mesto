
//---------------popup profile edit const start----------------------- 
const btnEditProfile = document.querySelector(".profile__edit-button");

//const popupElement = document.querySelector(".popup"); I don't think I need it at this step
const popupCloseBtnEditProfile = document.querySelector(".popup__close-button-edit");//was without edit// changed into document //changed back
const popupFormSubmitEditProfile = document.querySelector(".popup__submit-button-edit");//changed into document//changed back
const popupEditProfile = document.querySelector(".popup_edit");
const popupInputName = document.querySelector(".popup__input_type_name");//changed into document//changed back
const popupInputOccupation = document.querySelector(".popup__input_type_occupation");//changed into document//changed back

const profileInfoName = document.querySelector(".profile__info-name");
const profileInfoOccupation = document.querySelector(".profile__info-occupation");
//---------------popup profile edit const end----------------------- 

//---------------popup profile add const start-----------------------
const btnAddCard = document.querySelector(".profile__add-button");

const popupCloseBtnAddCard = document.querySelector(".popup__close-button-add"); //forgot to change into document here popupElement doesn't work
const popupFormSubmitAddCard = document.querySelector(".popup__submit-button-add"); //changed into document//changed back//NEVER CHANGE BACK!!!!!!!!!!
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

//---------------popups open-close start----------
const openPopupEditProfile = (event) => {
  popupEditProfile.classList.add('popup_opened');
  popupInputName.value = profileInfoName.textContent;
  popupInputOccupation.value = profileInfoOccupation.textContent;
} 

const openPopupAddCard = (event) => {
  popupAddCard.classList.add('popup_opened');
  popupInputCardName.value = ''; //To reset the parameters in the popup after adding a card
  popupInputCardLink.value = '';
} 

const openPopupForZoomPic = (event) => {
  popupForZoomPic.classList.add('popup-picture_opened');
}

const closePopupEditProfile = (event) => {
  popupEditProfile.classList.remove('popup_opened');
  popupEditProfile.classList.remove('popup-transition-active');
};

const closePopupAddCard = (event) => {
  popupAddCard.classList.remove('popup_opened');
};

const closePopupForZoomPic = (event) => {
  popupForZoomPic.classList.remove('popup-picture_opened');
};

const handleClosePopupOverlayClick = (event) => {
  if (event.target === event.currentTarget) {
    closePopupEditProfile();
    closePopupAddCard();
    closePopupForZoomPic();
  }
  else {
    return;
  }
}
//---------------popups open-close end----------

//-----------------------function popup edit start----------------------
const handlePopupSubmitEditProfile = (event) => {
  event.preventDefault();
  profileInfoName.textContent = popupInputName.value;
  profileInfoOccupation.textContent = popupInputOccupation.value;
  closePopupEditProfile(); //I put popupInputName, etc. into openPopupEdit
}
//----------------------function popup edit end-------------------

//--------------------template cards start------------------

const picGalleryCardsContainer = document.querySelector(".pic-gallery__cards"); //was openPopup
const picGalleryCardTemplate = document.querySelector(".pic-gallery__cards-template").content;

//------------Add handler start------------------------------
const handlePopupSubmitAddCard = (event) => {
  event.preventDefault();
  const cardEntry = {
    name: popupInputCardName.value,
    link: popupInputCardLink.value
  };
  picGalleryCardsContainer.prepend(createCard(cardEntry)); //Need to put a function of creation of a card
  closePopupAddCard();
}
//------------Add handler end-------------------------------

//--------------Add cards start-----------------------------
const initialPicCards = [
  {
    name: 'Санкт-Петербург',
    link: 'https://images.unsplash.com/photo-1601580047389-b538f04850c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzYyfHwlRDAlQTElRDAlQjAlRDAlQkQlRDAlQkElRDElODIlMjAlRDAlOUYlRDAlQjUlRDElODIlRDAlQjUlRDElODAlRDAlQjElRDElODMlRDElODAlRDAlQjN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    //link: 'https://photocentra.ru/images/main68/680823_main.jpg',
  },
  {
    name: 'Орхус',
    link: 'https://images.unsplash.com/photo-1558443336-d42ee773809c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    //link: 'https://assets.suitcasemag.com/images/hero_mobile_1400/242054-aarhus-design-1.jpg',
  },
  {
    name: 'Киото',
    link: 'https://images.unsplash.com/photo-1616360742542-7393fcba7547?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    //link: 'https://i.pinimg.com/originals/ff/55/16/ff55164145660cf2e4fb8cc7487f8d29.jpg',
  },
  {
    name: 'Берлин',
    link: 'https://images.unsplash.com/photo-1569164395803-6e78445864be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    //link: 'https://cms.enjourney.ru/upload/Jana/Deutschland/Berlin%20city/Berlin15.jpg',
  },
  {
    name: 'Нью-Йорк',
    link: 'https://images.unsplash.com/photo-1484102436255-9f89131e21f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    //link: 'https://avatars.dzeninfra.ru/get-zen_doc/3362051/pub_619f2fda6a45596de8b07fa8_619f304145832129f9ffc98e/scale_1200',
  },
  {
    name: 'Милан',
    link: 'https://images.unsplash.com/photo-1512236077335-f1cda9239c11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 
    //link: 'https://i.imgur.com/nPf37vB.jpg?1', 
  }
]; 
//--------------Add cards end-----------------------------

//-----------Add function that creates a card start-------
const createCard = (element) => {
  const picGalleryCardElement = picGalleryCardTemplate.querySelector(".pic-gallery__card").cloneNode(true);
  const picGalleryCardElementPic = picGalleryCardElement.querySelector(".pic-gallery__image");
  const picGalleryCardElementName = picGalleryCardElement.querySelector(".pic-gallery__name");

  picGalleryCardElement.querySelector(".pic-gallery__delete-button").addEventListener('click', function(event){
    picGalleryCardElement.remove();
  });

  picGalleryCardElementPic.src = element.link;
  picGalleryCardElementName.textContent = element.name;
  picGalleryCardElementPic.alt = element.name;

  picGalleryCardElement.querySelector(".pic-gallery__like-button").addEventListener('click', function(event){
    event.target.classList.toggle("pic-gallery__like-button_active");
  });

  picGalleryCardElementPic.addEventListener('click', renderPopupForZoomPic);

  return picGalleryCardElement
}

initialPicCards.forEach((element) => {
  picGalleryCardsContainer.prepend(createCard(element))
});

//------------need to connect a card and the pic-zoom start-------
function renderPopupForZoomPic(event) {
  popupPicZoom.src = event.target.src;
  popupPicZoom.alt = event.target.alt;
  popupPicName.textContent = event.target.alt;
  openPopupForZoomPic(popupForZoomPic);
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