
//---------------popup profile edit const start----------------------- 
const editButton = document.querySelector(".profile__edit-button");

const popupElement = document.querySelector(".popup");
const popupCloseBtnEdit = popupElement.querySelector(".popup__close-button-edit");//was without edit// changed into document //changed back
const popupFormSubmitEdit = popupElement.querySelector(".popup__submit-button-edit");//changed into document//changed back
const popupEdit = document.querySelector(".popup_edit");
const popupInputName = popupElement.querySelector(".popup__input_type_name");//changed into document//changed back
const popupInputOccupation = popupElement.querySelector(".popup__input_type_occupation");//changed into document//changed back

const profileInfoName = document.querySelector(".profile__info-name");
const profileInfoOccupation = document.querySelector(".profile__info-occupation");
//---------------popup profile edit const end----------------------- 

//---------------popup profile add const start-----------------------
const addCardButton = document.querySelector(".profile__add-button");

const popupCloseBtnAdd = document.querySelector(".popup__close-button-add"); //forgot to change into document here popupElement doesn't work
const popupFormSubmitAdd = document.querySelector(".popup__submit-button-add"); //changed into document//changed back//NEVER CHANGE BACK!!!!!!!!!!
const popupAdd = document.querySelector(".popup_add");
const popupInputCardName = document.querySelector(".popup__input_type_card-name");//changed into document//changed back//NEVER CHANGE BACK!!!!!!!!!!
const popupInputCardLink = document.querySelector(".popup__input_type_card-link");//changed into document//changed back//NEVER CHANGE BACK!!!!!!!!!!
//---------------popup profile add const end-----------------------

//-------------popup-pic const start--------------------
const popupForPic = document.querySelector(".popup-picture");
const popupCloseBtnPic = document.querySelector(".popup-picture__close-button");
const popupPicZoom = document.querySelector(".popup-picture__zoom");
const popupPicName = document.querySelector(".popup-picture__zoom-name");
//-------------popup-pic const end---------------------

//---------------popups open-close start----------
const openPopupEdit = (event) => {
  popupEdit.classList.add('popup_opened');
  popupInputName.value = profileInfoName.textContent;
  popupInputOccupation.value = profileInfoOccupation.textContent;
} 

const openPopupAdd = (event) => {
  popupAdd.classList.add('popup_opened');
  popupInputCardName.value = ''; //To reset the parameters in the popup after adding a card
  popupInputCardLink.value = '';
} 

const openPopupPic = (event) => {
  popupForPic.classList.add('popup-picture_opened');
}

const closePopupEdit = (event) => {
  popupEdit.classList.remove('popup_opened');
  popupEdit.classList.remove('popup-transition-active');
};

const closePopupAdd = (event) => {
  popupAdd.classList.remove('popup_opened');
};

const closePopupPic = (event) => {
  popupForPic.classList.remove('popup-picture_opened');
};

const handleClosePopupOverlayClick = (event) => {
  if (event.target === event.currentTarget) {
    closePopupEdit(); //was closePopup
    closePopupAdd();
    closePopupPic();
  }
  else {
    return;
  }
}
//---------------popups open-close end----------

//-----------------------function popup edit start----------------------
const handlePopupSubmitEdit = (event) => {
  event.preventDefault();
  profileInfoName.textContent = popupInputName.value;
  profileInfoOccupation.textContent = popupInputOccupation.value;
  closePopupEdit(); //I put popupInputName, etc. into openPopupEdit
}
//----------------------function popup edit end-------------------

//--------------------template cards start------------------

const picGalleryCards = document.querySelector(".pic-gallery__cards"); //was openPopup
const picGalleryCardTemplate = document.querySelector(".pic-gallery__cards-template").content;

//------------Add handler start------------------------------
const handlePopupSubmitAdd = (event) => {
  event.preventDefault();
  const cardEntry = {
    name: popupInputCardName.value,
    link: popupInputCardLink.value
  };
  picGalleryCards.prepend(createCard(cardEntry)); //Need to put a function of creation of a card
  closePopupAdd();
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

  picGalleryCardElementPic.addEventListener('click', renderPopupForPic);

  return picGalleryCardElement
}

initialPicCards.forEach((element) => {
  picGalleryCards.prepend(createCard(element))
});

//------------need to connect a card and the pic-zoom start-------
function renderPopupForPic(event) {
  popupPicZoom.src = event.target.src;
  popupPicZoom.alt = event.target.alt;
  popupPicName.textContent = event.target.alt;
  openPopupPic(popupForPic);
}

//------------need to connect a card and the pic-zoom end-------
//-----------Add function that creates a card end-------
//--------------------template cards end------------------

//----------Listeners start----------------------------
editButton.addEventListener('click', openPopupEdit);
popupCloseBtnEdit.addEventListener('click', closePopupEdit);
popupFormSubmitEdit.addEventListener('click', handlePopupSubmitEdit);

addCardButton.addEventListener('click', openPopupAdd);
popupCloseBtnAdd.addEventListener('click', closePopupAdd);
popupFormSubmitAdd.addEventListener('click', handlePopupSubmitAdd);

popupEdit.addEventListener('click', handleClosePopupOverlayClick);
popupAdd.addEventListener('click', handleClosePopupOverlayClick);
popupForPic.addEventListener('click', handleClosePopupOverlayClick);

popupCloseBtnPic.addEventListener('click', closePopupPic);
//----------Listeners end----------------------------