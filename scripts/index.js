
//---------------popup profile edit start----------------------- 
const editButton = document.querySelector(".profile__edit-button");

const popupElement = document.querySelector(".popup");
const popupCloseBtnEdit = popupElement.querySelector(".popup__close-button-edit");//was without edit// changed into document //changed back
const popupFormSubmitEdit = popupElement.querySelector(".popup__submit-button-edit");//changed into document//changed back
const popupEdit = document.querySelector(".popup_edit");
const popupInputName = popupElement.querySelector(".popup__input_type_name");//changed into document//changed back
const popupInputOccupation = popupElement.querySelector(".popup__input_type_occupation");//changed into document//changed back

const profileInfoName = document.querySelector(".profile__info-name");
const profileInfoOccupation = document.querySelector(".profile__info-occupation");
//---------------popup profile add start-----------------------
const addCardButton = document.querySelector(".profile__add-button");

const popupCloseBtnAdd = document.querySelector(".popup__close-button-add"); //forgot to change into document here popupElement doesn't work
const popupFormSubmitAdd = document.querySelector(".popup__submit-button-add"); //changed into document//changed back//NEVER CHANGE BACK!!!!!!!!!!
const popupAdd = document.querySelector(".popup_add");
const popupInputCardName = document.querySelector(".popup__input_type_card-name");//changed into document//changed back//NEVER CHANGE BACK!!!!!!!!!!
const popupInputCardLink = document.querySelector(".popup__input_type_card-link");//changed into document//changed back//NEVER CHANGE BACK!!!!!!!!!!
//---------------popup profile add end-----------------------


//---------------popups open-close start----------
const openPopupEdit = (event) => {
  popupEdit.classList.add('popup_opened');
  popupInputName.value = profileInfoName.textContent;
  popupInputOccupation.value = profileInfoOccupation.textContent;
} 

const openPopupAdd = (event) => {
  popupAdd.classList.add('popup_opened');
  /*popupInputCardName.value = '';
  popupInputCardLink.value = '';*/
} 

//----------close buttons------------
const closePopupEdit = (event) => {
  popupEdit.classList.remove('popup_opened');
};

const closePopupAdd = (event) => {
  popupAdd.classList.remove('popup_opened');
};

const handleClosePopupOverlayClick = (event) => {
  if (event.target === event.currentTarget) {
    closePopupEdit(); //was closePopup
    closePopupAdd();
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


//------------Add handler start-----------
/*const cardEntry = {
  name: popupInputCardName.value,
  link: popupInputCardLink.value,
  alt: popupInputCardName.value
}*/ //Now I can call it in the handler or mb not, I'll see

const handlePopupSubmitAdd = (event) => {
  event.preventDefault();
  const cardEntry = {
    name: popupInputCardName.value,
    link: popupInputCardLink.value
    //alt: popupInputCardName.value
  };
  picGalleryCards.prepend(createCard(cardEntry)); //!!!!!!Need to put a function of creation of a card
  closePopupAdd(); //I put popupInputName, etc. into openPopupEdit
  popupInputCardName.value = ''; //To reset the parameters in the popup after adding a card
  popupInputCardLink.value = '';
}
//------------Add handler end-----------

const initialPicCards = [
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
   // alt: 'Изображение с замёрзшим Байкалом'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
   // alt: 'Изображение с дорогой в сельской местности Холмогорского района'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    //alt: 'Изображение с горой на Камчатке'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
   // alt: 'Изображение с кварталом домов в Иваново'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
   // alt: 'Изображение с заснеженными горами и озером Челябинска'
  },
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    //alt: 'Изображение с холмами Архыза'
  }
]; 


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

  return picGalleryCardElement
}



initialPicCards.forEach((element) => {
  picGalleryCards.prepend(createCard(element))
});


editButton.addEventListener('click', openPopupEdit); //was openPopup
popupCloseBtnEdit.addEventListener('click', closePopupEdit);//was closePopup
//popupElement.addEventListener('click', handleClosePopupOverlayClick); //deleted b/c popupCloseBtnAdd wouldn't work
popupFormSubmitEdit.addEventListener('click', handlePopupSubmitEdit); //mb will be 'submit' when complete
//---------------popup profile edit end-----------------------

//---------------popup profile add start-----------------------
addCardButton.addEventListener('click', openPopupAdd);
popupCloseBtnAdd.addEventListener('click', closePopupAdd);

popupEdit.addEventListener('click', handleClosePopupOverlayClick);
popupAdd.addEventListener('click', handleClosePopupOverlayClick);
//---------------popup profile add end-----------------------
popupFormSubmitAdd.addEventListener('click', handlePopupSubmitAdd);




//-----------Add function that creates a card end---------

//--------------------template cards end------------------






//-------------------works but I still think I need a function------------
/*initialPicCards.forEach(function (element) {
  const picGalleryCardElement = picGalleryCardTemplate.querySelector(".pic-gallery__card").cloneNode(true);
  
  picGalleryCardElement.querySelector(".pic-gallery__delete-button").addEventListener('click', function(event){
    picGalleryCardElement.remove();
  });
  picGalleryCardElement.querySelector(".pic-gallery__name").textContent = element.name;
  picGalleryCardElement.querySelector(".pic-gallery__image").src = element.link;
  picGalleryCardElement.querySelector(".pic-gallery__image").alt = element.alt;
  picGalleryCardElement.querySelector(".pic-gallery__like-button").addEventListener('click', function(event){
    event.target.classList.toggle("pic-gallery__like-button_active");
  });

  picGalleryCards.prepend(picGalleryCardElement)
});*/
//-------------------works but I still think I need a function------------