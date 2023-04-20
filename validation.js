"use strict"

export let validation = 0;
export let monthValid = 0;
export let yearValid = 0;

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

export const isvalidMonth = (monthEl, yearEl, err) => {
  if (
    (Number(monthEl.value) > 12 ||
      (Number(yearEl.value) == yearDate && Number(monthEl.value) < monthDate)) &&
      yearEl.value != ""
  ) {
    setError(monthEl, err, "Invalid month");
    monthValid = 0;
  } else {
    setValid(monthEl, err);
    monthValid = 1;
  }
};

export const isvalidYear = (monthEl, yearEl, err) => {
  if (
    (Number(yearEl.value) > yearDate + 5 || Number(yearEl.value) < yearDate) &&
    monthEl.value != ""
  ) {
    setError(yearEl, err, "Invalid year");
    yearValid = 0;
  } else {
    setValid(yearEl, err);
    yearValid = 1;
  }
};


export const isValidName = function (inputEl, errEl, maxNum, minNum) {
  const empty = checkEmpty(inputEl.value);
  const letters = checkLetters(inputEl.value);
  const lengthMax = maxLength(inputEl.value, maxNum);
  const lengthMin = minLength(inputEl.value, minNum);
  const error = errEl;
  if (empty || letters || lengthMin || lengthMax) {
    setError(inputEl, error, empty || letters || lengthMin || lengthMax);
    validation = 0;
  } else {
    setValid(inputEl, errEl);
    validation = 1;
  }
};

export const isValidNumber = function (inputEl, errEl, maxNum, minNum) {
  const empty = checkEmpty(inputEl.value);
  const lengthMax = maxLength(inputEl.value, maxNum);
  const lengthMin = minLength(inputEl.value, minNum);
  const error = errEl;
  if (empty || lengthMin || lengthMax) {
    setError(inputEl, error, empty || lengthMin || lengthMax);
    validation = 0;
  } else {
    setValid(inputEl, errEl);
    validation = 1;
  };
};