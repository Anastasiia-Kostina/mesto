
//---------------popup profile edit start----------------------- 
const popupElement = document.querySelector('.popup');
const popupCloseBtn = popupElement.querySelector('.popup__close-button');
const editButton = document.querySelector('.profile__edit-button');

const popupFormSubmit = popupElement.querySelector(".popup__submit-button");
const popupEdit = document.querySelector(".popup_edit");
const popupInputName = popupElement.querySelector('.popup__input_type_name');
const popupInputOccupation = popupElement.querySelector('.popup__input_type_occupation');
const profileInfoName = document.querySelector('.profile__info-name');
const profileInfoOccupation = document.querySelector('.profile__info-occupation');


const openPopup = function(event) {
  popupEdit.classList.add('popup_opened');
  popupInputName.value = profileInfoName.textContent;
  popupInputOccupation.value = profileInfoOccupation.textContent;
};

const closePopup = function() {
  popupEdit.classList.remove('popup_opened');
};


const handleClosePopupOverlayClick = function (event) {
  if (event.target === event.currentTarget) {
    closePopup();
  }
  else {
    return;
  }
}

//-----------------------function popup edit start----------------------
const handlePopupSubmit = function (event) {
  event.preventDefault();
  profileInfoName.textContent = popupInputName.value;
  profileInfoOccupation.textContent = popupInputOccupation.value;
  closePopup();
}
//----------------------function popup edit end-------------------

editButton.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);
popupElement.addEventListener('click', handleClosePopupOverlayClick);
popupFormSubmit.addEventListener('click', handlePopupSubmit); //mb will be 'submit' when complete


//--------------------template cards start------------------

const picGalleryCards = document.querySelector('.pic-gallery__cards');
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