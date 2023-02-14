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

//------------------------------function popup start--------------------

const handleClosePopupOverlayClick = function (event) {
  if (event.target === event.currentTarget) {
    closePopup();
  }
  else {
    return;
  }
}
//------------------------------function popup end----------------------

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
popupFormSubmit.addEventListener('click', handlePopupSubmit);//mb will be 'submit' when complete

//---------------------function like button start-------------------

const likeBtn = document.querySelectorAll('.pic-gallery__like-button');

likeBtn.forEach(function(element) {
  element.addEventListener('click', function(event){
    event.target.classList.toggle('pic-gallery__like-button_active');
  })
});
//---------------------function like button end------------------