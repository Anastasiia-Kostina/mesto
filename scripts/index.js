
//---------------popup profile edit start----------------------- 
const popupElement = document.querySelector('.popup');
const popupCloseBtnEdit = popupElement.querySelector('.popup__close-button_edit');//was without edit// changed into document //changed back
const editButton = document.querySelector('.profile__edit-button');

const popupFormSubmitEdit = popupElement.querySelector(".popup__submit-edit-button");//changed into document//changed back
const popupEdit = document.querySelector(".popup_edit");
const popupInputName = popupElement.querySelector('.popup__input_type_name');//changed into document//changed back
const popupInputOccupation = popupElement.querySelector('.popup__input_type_occupation');//changed into document//changed back
const profileInfoName = document.querySelector('.profile__info-name');
const profileInfoOccupation = document.querySelector('.profile__info-occupation');
//---------------popup profile add start-----------------------
const addCardButton = document.querySelector('.profile__add-button');
const popupCloseBtnAdd = document.querySelector('.popup__close-button_add'); //forgot to change into document here popupElement doesn't work
const popupFormSubmitCreate = popupElement.querySelector(".popup__submit-create-button"); //changed into document//changed back
const popupAdd = document.querySelector(".popup_add");
const popupInputCardName = popupElement.querySelector('.popup__input_type_card-pic-name');//changed into document//changed back
const popupInputCardLink = popupElement.querySelector('.popup__input_type_card-pic-link');//changed into document//changed back
//---------------popup profile add end-----------------------


//---------------popups----------
const openPopupEdit = (event) => {
  popupEdit.classList.add('popup_opened');
  popupInputName.value = profileInfoName.textContent;
  popupInputOccupation.value = profileInfoOccupation.textContent;
} 

const openPopupAdd = (event) => {
  popupAdd.classList.add('popup_opened');
} 



//-------works but from the second click---------
/*const openPopup = (event) => {

  editButton.onclick = function () {
  popupEdit.classList.add('popup_opened');
  popupInputName.value = profileInfoName.textContent;
  popupInputOccupation.value = profileInfoOccupation.textContent;
}
  addCardButton.onclick = function () {
  popupAdd.classList.add('popup_opened');
}
};*/

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

//------------close buttons----------


//----------OLD close works for edit-----------

/*const closePopup = (event) => {
  popupEdit.classList.remove('popup_opened');
};


const handleClosePopupOverlayClick = (event) => {
  if (event.target === event.currentTarget) {
    closePopup();
  }
  else {
    return;
  }
}*/

//-----------------------function popup edit start----------------------
const handlePopupSubmit = function (event) {
  event.preventDefault();
  profileInfoName.textContent = popupInputName.value;
  profileInfoOccupation.textContent = popupInputOccupation.value;
  closePopupEdit(); //was closePopup
}
//----------------------function popup edit end-------------------

editButton.addEventListener('click', openPopupEdit); //was openPopup
popupCloseBtnEdit.addEventListener('click', closePopupEdit);//was closePopup
//popupElement.addEventListener('click', handleClosePopupOverlayClick); //deleted b/c popupCloseBtnAdd wouldn't work
popupFormSubmitEdit.addEventListener('click', handlePopupSubmit); //mb will be 'submit' when complete
//---------------popup profile edit end-----------------------


//---------------popup profile add start-----------------------
addCardButton.addEventListener('click', openPopupAdd);
popupCloseBtnAdd.addEventListener('click', closePopupAdd);

popupEdit.addEventListener('click', handleClosePopupOverlayClick);
popupAdd.addEventListener('click', handleClosePopupOverlayClick);
//---------------popup profile add end-----------------------


//--------------------template cards start------------------

const picGalleryCards = document.querySelector('.pic-gallery__cards'); //was openPopup
const picGalleryCardTemplate = document.querySelector('.pic-gallery__cards-template').content;

const initialPicCards = [
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt: 'Изображение с замёрзшим Байкалом'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'Изображение с дорогой в сельской местности Холмогорского района'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'Изображение с горой на Камчатке'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    alt: 'Изображение с кварталом домов в Иваново'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alt: 'Изображение с заснеженными горами и озером Челябинска'
  },
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'Изображение с холмами Архыза'
  }
]; 

initialPicCards.forEach(function (element) {
  const picGalleryCardElement = picGalleryCardTemplate.cloneNode(true);
  
  picGalleryCardElement.querySelector('.pic-gallery__delete-button').addEventListener('click', function(event){
    console.log();
  });
  picGalleryCardElement.querySelector('.pic-gallery__name').textContent = element.name;
  picGalleryCardElement.querySelector('.pic-gallery__image').src = element.link;
  picGalleryCardElement.querySelector('.pic-gallery__image').alt = element.alt;
  picGalleryCardElement.querySelector('.pic-gallery__like-button').addEventListener('click', function(event){
    event.target.classList.toggle('pic-gallery__like-button_active');
  });

  picGalleryCards.prepend(picGalleryCardElement)
});


//--------------------function delete button start------------
const deleteButton = document.querySelector('.pic-gallery__delete-button');

deleteButton.forEach(function(element) {
  element.addEventListener('click', function(event){
    /*event.target.classList.toggle('pic-gallery__like-button_active');*/
  });
});

//------------------function delete button end---------------

//---------------------function like button start-------------------

/*const likeBtn = document.querySelectorAll('.pic-gallery__like-button');

likeBtn.forEach(function(element) {
  element.addEventListener('click', function(event){
    event.target.classList.toggle('pic-gallery__like-button_active');
  });
});*/

//---------------------function like button end------------------

//--------------------template cards end------------------