const popupElement = document.querySelector('.popup');
console.log(popupElement);

const popupCloseBtn = popupElement.querySelector('.popup__close-button');
console.log(popupCloseBtn);

const editButton = document.querySelector('.profile__edit-button');
console.log(editButton);

const popupFormSubmit = popupElement.querySelector(".popup__submit-button");
const popupEdit = document.querySelector(".popup_edit");
console.log('popupEdit', popupEdit);
const popupInputName = popupElement.querySelector('.popup__input_type_name');
console.log('popupInputName', popupInputName);
const popupInputOccupation = popupElement.querySelector('.popup__input_type_occupation');
console.log('popupInputOccupation', popupInputOccupation);
const profileInfoName = document.querySelector('.profile__info-name');
console.log('profileInfoName', profileInfoName);
const profileInfoOccupation = document.querySelector('.profile__info-occupation');
console.log('profileInfoOccupation', profileInfoOccupation);


const openPopup = function(event) {
  popupEdit.classList.add('popup_opened');
  console.log('open it');
  popupInputName.value = profileInfoName.textContent;
  popupInputOccupation.value = profileInfoOccupation.textContent;
};

const closePopup = function() {
  popupEdit.classList.remove('popup_opened');
  console.log('close it');
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
console.log(likeBtn);

likeBtn.forEach(function(element) {
  element.addEventListener('click', function(event){
    event.target.classList.toggle('pic-gallery__like-button_active');
  })
});
//---------------------function like button end------------------