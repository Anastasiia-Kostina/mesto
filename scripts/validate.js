//----------feature objects start--------------------
const formsValidationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  inputErrorClass: "popup__input_type_error",
  submitButtonSelector: ".popup__submit-button",
  buttonDisabledClass: "popup__submit-button_disabled",
};
//----------feature objects end--------------------

//---------disable submit btns from the beginning start---------------
function disableSubmitBtn(eventDisable) {
  eventDisable.preventDefault();
}
//---------disable submit btns from the beginning end---------------

//---------find all forms and create a list of objects start--------
function enableValidation(configForm) {
  const formList = Array.from(
    document.querySelectorAll(configForm.formSelector)
  );

  formList.forEach((form) => {
    enableFormValidation(form, configForm);
  });
}
//---------find all forms and create a list of objects end----------

//---------function finds all the forms' input to use it in enableValidation start--------
function enableFormValidation(form, configForm) {
  form.addEventListener("submit", disableSubmitBtn);
  form.addEventListener("input", () => {
    toggleSubmitButton(form, configForm);
  });

  addInputListeners(form, configForm);
  toggleSubmitButton(form, configForm);
}
//---------function finds all the forms' input to use it in enableValidation end--------

//---------target, check validity, error messages of the input start--------
function handleFormInputValidity(eventInputTarget, configForm) {
  const inputForm = eventInputTarget.target;
  const inputId = inputForm.id;
  const errorInputMessage = document.querySelector(`#${inputId}-error`);
  if (inputForm.validity.valid) {
    inputForm.classList.remove(configForm.inputErrorClass);
    errorInputMessage.textContent = "";
  } else {
    inputForm.classList.add(configForm.inputErrorClass);
    errorInputMessage.textContent = inputForm.validationMessage;
  }
}
//---------target, check validity, of the input end--------

//---------checks if a button is on and changes if needed start--------
function toggleSubmitButton(form, configForm) {
  const buttonSubmit = form.querySelector(configForm.submitButtonSelector);
  const isFormValid = form.checkValidity();

  buttonSubmit.disabled = !isFormValid;
  buttonSubmit.classList.toggle(configForm.buttonDisabledClass, !isFormValid);
}
//---------checks if a button is on and changes if needed end--------

//---------puts listeners on forms and input start--------
function addInputListeners(form, configForm) {
  const formInputList = Array.from(
    form.querySelectorAll(configForm.inputSelector)
  );
  formInputList.forEach((inputItem) => {
    inputItem.addEventListener("input", (eventInputTarget) => {
      handleFormInputValidity(eventInputTarget, configForm);
    });
  });
}
//---------puts listeners on forms and input end--------

enableValidation(formsValidationConfig); //call the function
