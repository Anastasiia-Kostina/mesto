const popupElement = document.querySelector('.popup');
console.log(popupElement);

const popupCloseBtn = popupElement.querySelector('.popup__close-button');
console.log(popupCloseBtn);

const editButton = document.querySelector('.profile__edit-button');
console.log(editButton);

const openPopup = function(event) {
  popupElement.classList.add('popup_opened');
  console.log('open it');
};

const closePopup = function() {
  popupElement.classList.remove('popup_opened');
  console.log('close it');
};

const handleClosePopupOverlayClick = function (event) {
  if (event.target === event.currentTarget) {
    closePopup();
  }
  else {
    return;
  }
}

editButton.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);
popupElement.addEventListener('click', handleClosePopupOverlayClick);


//3 Same but with toggle
/*const toggleOpenPopup = function() {
  popupElement.classList.toggle('popup_opened');
  console.log('open it');
};

const toggleEditPopup = function(event) {
  toggleOpenPopup();
};

const toggleClosePopup = function() {
  toggleOpenPopup();
};

const handleClosePopupOverlayClick = function (event) {
  if (event.target === event.currentTarget) {
    toggleOpenPopup();
  }
}

editButton.addEventListener('click', toggleEditPopup);
popupCloseBtn.addEventListener('click', toggleClosePopup);
popupElement.addEventListener('click', handleClosePopupOverlayClick);*/


//2 Split for open-close
/*const openPopup = function() {
  popupElement.classList.add('popup_opened');
  console.log('open it');
};

const closePopup = function() {
  popupElement.classList.remove('popup_opened');
  console.log('close it');
};

editButton.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);*/


//1 Unified for open-close
/*const toggleOpenPopup = function() {
  console.log(toggleOpenPopup);
  popupElement.classList.toggle('popup_opened');
}
//toggleOpenPopup();
editButton.addEventListener('click', toggleOpenPopup);*/