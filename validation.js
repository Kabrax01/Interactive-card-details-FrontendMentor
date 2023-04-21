"use strict";

export let nameValid = 0;
export let numberValid = 0;
export let monthValid = 0;
export let yearValid = 0;
export let cvcValid = 0;

let today = new Date();

let monthDate = today.getMonth() + 1;
let yearDate = today.getFullYear() - 2000;

const checkEmpty = (inputEl) => {
  if (inputEl == "" || inputEl == NaN) return "Enter value";
};

const checkLetters = (inputEl) => {
  let testRegEx = /^[a-zA-Z ]+$/;
  if (!testRegEx.test(inputEl)) return "Letters only";
};

const maxLength = (inputEl, maxNum) => {
  if (inputEl.length > maxNum) return `Max ${maxNum} characters`;
};

const minLength = (inputEl, minNum) => {
  if (inputEl.length < minNum) return `Min ${minNum} characters`;
};

const setValid = (inputEl, errEl) => {
  inputEl.style.borderColor = "var(--Input-color)";
  errEl.textContent = "";
};

const setError = (inputEl, errEl, text) => {
  inputEl.style.borderColor = "var(--Red)";
  errEl.textContent = text;
};

//*****CURRENT DATE VALIDATION*****//

const isValidMonthDate = (monthEl, yearEl, err) => {
  if (
    (Number(monthEl) > 12 ||
      (Number(yearEl) == yearDate && Number(monthEl) < monthDate)) &&
    yearEl != ""
  )
    return "Invalid month";
};

const isValidYearDate = (monthEl, yearEl, err) => {
  if (
    (Number(yearEl) > yearDate + 5 || Number(yearEl) < yearDate) &&
    monthEl != ""
  )
    return "Invalid year";
};

//*****USER INPUT VALIDATION*****//

export const isValidName = function (inputEl, errEl, maxNum, minNum) {
  const empty = checkEmpty(inputEl.value);
  const letters = checkLetters(inputEl.value);
  const lengthMax = maxLength(inputEl.value, maxNum);
  const lengthMin = minLength(inputEl.value, minNum);
  const error = errEl;
  if (empty || letters || lengthMin || lengthMax) {
    setError(inputEl, error, empty || letters || lengthMin || lengthMax);
    nameValid = 0;
  } else {
    setValid(inputEl, errEl);
    nameValid = 1;
  }
};

export const isValidNumber = function (inputEl, errEl, maxNum, minNum) {
  const empty = checkEmpty(inputEl.value);
  const lengthMax = maxLength(inputEl.value, maxNum);
  const lengthMin = minLength(inputEl.value, minNum);
  const error = errEl;
  if (empty || lengthMin || lengthMax) {
    setError(inputEl, error, empty || lengthMin || lengthMax);
    numberValid = 0;
  } else {
    setValid(inputEl, errEl);
    numberValid = 1;
  }
};

export const isValidMonth = function (monthEl, yearEl, errEl, maxNum, minNum) {
  const empty = checkEmpty(monthEl.value);
  const lengthMax = maxLength(monthEl.value, maxNum);
  const lengthMin = minLength(monthEl.value, minNum);
  const monthDate = isValidMonthDate(monthEl.value, yearEl.value);
  const error = errEl;
  if (empty || lengthMin || lengthMax || monthDate) {
    setError(monthEl, error, empty || lengthMin || lengthMax || monthDate);
    monthValid = 0;
  } else {
    setValid(monthEl, errEl);
    monthValid = 1;
  }
};

export const isValidYear = function (monthEl, yearEl, errEl, maxNum, minNum) {
  const empty = checkEmpty(yearEl.value);
  const lengthMax = maxLength(yearEl.value, maxNum);
  const lengthMin = minLength(yearEl.value, minNum);
  const yearDate = isValidYearDate(monthEl.value, yearEl.value);
  const error = errEl;
  if (empty || lengthMin || lengthMax || yearDate) {
    setError(yearEl, error, empty || lengthMin || lengthMax || yearDate);
    yearValid = 0;
  } else {
    setValid(yearEl, errEl);
    yearValid = 1;
  }
};

export const isValidCvc = function (inputEl, errEl, maxNum, minNum) {
  const empty = checkEmpty(inputEl.value);
  const lengthMax = maxLength(inputEl.value, maxNum);
  const lengthMin = minLength(inputEl.value, minNum);
  const error = errEl;
  if (empty || lengthMin || lengthMax) {
    setError(inputEl, error, empty || lengthMin || lengthMax);
    cvcValid = 0;
  } else {
    setValid(inputEl, errEl);
    cvcValid = 1;
  }
};

export const validationReset = () => {
  nameValid = 0;
  numberValid = 0;
  monthValid = 0;
  yearValid = 0;
  cvcValid = 0;
};
