const formsValidationConfig = { //formS as it's universal for all my forms
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputErrorClass: 'popup__input_type_error', //add the element, no need to write in HTML
  //errorClass: '.popup__error' // id is better
  submitButtonSelector: '.popup__submit-button',
  buttonDisabledClass: 'popup__submit-button_disabled'
}


function disableSubmitBtn(eventDisable) { //1 step disable the submit btn
  eventDisable.preventDefault();
}

function enableValidation(configForm) {
  const form = document.querySelector(configForm.formSelector); //looking for a form '.popup__form', create a list of objects
  
  form.addEventListener('submit', disableSubmitBtn);
  form.addEventListener('input', () => {
    toggleSubmitButton(form, configForm);
  });

  addInputListeners(form, configForm); // to find all the input of a form
  toggleSubmitButton(form, configForm); //to turn off submit from the start
}

function handleFormInputValidity(eventInputTarget, configForm) { //to know where an event took its place
  const inputForm = eventInputTarget.target;
  const inputId = inputForm.id;
  const errorInputMessage = document.querySelector(`#${inputId}-error`); //find a wrong input by id
  //const errorInputElement = inputForm.querySelector(configForm.errorClass); //doesn't work
  //console.log(errorInputElement); //works
  //console.log(eventInputTarget); //works
  //console.log(inputForm.validity); //works
  // console.log(inputForm.id); //works
  if (inputForm.validity.valid) {
    inputForm.classList.remove(configForm.inputErrorClass);
    errorInputMessage.textContent = '';
  } else {
    inputForm.classList.add(configForm.inputErrorClass);
    errorInputMessage.textContent = inputForm.validationMessage; //default browser's messages
  } //check if the target element is valid
}

function  toggleSubmitButton(form, configForm) {
  const buttonSubmit = form.querySelector(configForm.submitButtonSelector);
  const isFormValid = form.checkValidity(); //initially false

  buttonSubmit.disabled = !isFormValid; //not valid -- turn disabled on
  buttonSubmit.classList.toggle(configForm.buttonDisabledClass, !isFormValid);//need to add a callback for input to enableValidation so it works
  //console.log(buttonSubmit); //works
  //console.log(isFormValid); //works
};

function addInputListeners(form, configForm) {
  const formInputList = Array.from(form.querySelectorAll(configForm.inputSelector)); //2st look for all the inputs; make it an array 
  formInputList.forEach((inputItem) => {
    inputItem.addEventListener('input', (eventInputTarget) => {
      handleFormInputValidity(eventInputTarget, configForm);
      //console.log('TypeIn in eventInputTarget'); //works
    }); // was handleFormInputValidity before creating inputErrorClass;
    //console.log(inputItem); //works
  }); //search through all the functions to perform an act
};

enableValidation(formsValidationConfig);