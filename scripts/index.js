const popupElement = document.querySelector('.popup');
console.log(popupElement);

const popupCloseBtn = popupElement.querySelector('.popup__close-button');
console.log(popupCloseBtn);

const editButton = document.querySelector('.profile__edit-button');
console.log(editButton);

const popupForm = popupElement.querySelector(".popup__form");
console.log('popupForm', popupForm)
const popupEdit = document.querySelector(".popup__edit");
console.log('popupEdit', popupEdit)
const popupInputName = popupElement.querySelector('.popup__input_type_name');
console.log('popupInputName', popupInputName)
const popupInputOccupation = popupElement.querySelector('.popup__input_type_occupation');
console.log('popupInputOccupation', popupInputOccupation)
const profileInfoName = document.querySelector('.profile__info-name');
console.log('profileInfoName', profileInfoName)
const profileInfoOccupation = document.querySelector('.profile__info-occupation');
console.log('profileInfoOccupation', profileInfoOccupation)


const openPopup = function(event) {
  popupEdit.classList.add('popup_opened');
  console.log('open it');
  popupInputName.value = profileInfoName.textContent;
  popupInputOccupation.value = profileInfoOccupation.textContent;
};

//------------------------------function popup start--------------------------
const closePopup = function() {
  popupEdit.classList.remove('popup_opened');
  console.log('close it');
};

const handleClosePopupOverlayClick = function (event) {
  //event.preventDefault();
  if (event.target === event.currentTarget) {
    closePopup();
  }
  else {
    return;
  }
}

/*editButton.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);
popupElement.addEventListener('click', handleClosePopupOverlayClick);*/

//------------------------------function popup end--------------------------



//-----------------------function popup edit start----------------------
const handlePopupSubmit = function (event) {
  event.preventDefault();
  profileInfoName.textContent = popupInputName.value;
  profileInfoOccupation.textContent = popupInputOccupation.value;
  closePopup();
}

editButton.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);
popupElement.addEventListener('click', handleClosePopupOverlayClick);
popupForm.addEventListener('submit', handlePopupSubmit);
//popupElement.addEventListener('submit', handlePopupSubmit);

















/* nope!
let addInfoBtn = document.querySelector('.popup__submit-button_action_add');
console.log('addInfoBtn', addInfoBtn);

let newInfoTitle = document.querySelector('.popup__info-title');
console.log('newInfoTitle', newInfoTitle);

addInfoBtn.onclick = function addNewTitle() {
  let val = newInfoTitle.value;
  document.querySelector('.profile__info-title').innerHTML = val;
}*/ 


//NOT THAT HOPELESS, but it wouldn't restart
/*let profile = document.querySelector('.page') //not like container
console.log('profile', profile);

let profileNewInfo = document.querySelector('.profile__new-info'); 
console.log(profileNewInfo.textContent);

let addButton = document.querySelector('.popup__submit-button_action_add');
console.log('addButton', addButton);


function renderAdded() {
let profileNewInfoTitle = profile.querySelector('.profile__new-info-title');
let profileNewInfoSubtitle = profile.querySelector('.profile__new-info-subtitle');

let currentProfileInfo = document.querySelector('.profile__info');

if (profileNewInfoTitle.length=== 0 && profileNewInfoSubtitle.length === 0) {
  currentProfileInfo.classList.remove('profile__info_hidden');
}
else {
  currentProfileInfo.classList.add('profile__info_hidden');
}
}

function addInfo(event) {
  event.preventDefault();
  let popupInfoTitle = document.querySelector('.popup__info-title');
  console.log('popupInfoTitle', popupInfoTitle);
  let popupInfoSubtitle = document.querySelector('.popup__info-subtitle');
  console.log('popupInfoSubtitle', popupInfoSubtitle);

  profileNewInfo.insertAdjacentHTML('beforeend', `
      <h2 class="profile__new-info-title">${popupInfoTitle.value}</h2>
      <button class="profile__edit-button button-transition"></button>
      <p class="profile__new-info-subtitle">${popupInfoSubtitle.value}</p>
  `);

  popupInfoTitle.value = '';
  popupInfoSubtitle.value = '';
  
  renderAdded();
}

addButton.addEventListener('click', addInfo);
addButton.addEventListener('click', popupElement);
renderAdded();*/



//----------------------function popup edit end-------------------



//---------------------function like button start-------------------

const likeBtn = document.querySelectorAll('.pic-gallery__like-button');
console.log(likeBtn);

likeBtn.forEach(function(element) {
  element.addEventListener('click', function(event){
    event.target.classList.toggle('pic-gallery__like-button_active');
  })
});
//---------------------function like button end------------------


//======================function popup other options start=======================
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
//==========================function popup other options end================

//====================function like button other options start==================
//1 Works for only one element

/*const likeBtn = document.querySelectorAll('.pic-gallery__like-button');
console.log(likeBtn);

const toggleClickLikeBtn = function () {
  likeBtn.classList.toggle('pic-gallery__like-button_active');
  console.log('like like');
}

const likeBtnActive = function() {
  if (likeBtn){
  toggleClickLikeBtn();
  }
  else {
    return;
   }
};

likeBtn.addEventListener('click', likeBtnActive);*/

//====================function like button other options end==================