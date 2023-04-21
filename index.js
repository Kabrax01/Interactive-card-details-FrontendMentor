"use strict";
import {
  isValidNumber,
  isValidName,
  validationReset,
  isValidMonth,
  isValidYear,
  isValidCvc,
  nameValid,
  numberValid,
  monthValid,
  yearValid,
  cvcValid
} from "./validation.js";

const cardNumber = document.querySelector("#card-number");
const name = document.querySelector("#card-name");
const month = document.querySelector("#card-exp");
const year = document.querySelector("#card-date");
const cvc = document.querySelector("#card-cvc");
const nameDisplay = document.querySelector("#front-name");
const cardNumberDisplay = document.querySelector("#front-numbers");
const monthDisplay = document.querySelector("#front-month");
const yearDisplay = document.querySelector("#front-year");
const cvcDisplay = document.querySelector("#back-cvc");
const nameErr = document.querySelector("#name-error");
const numberErr = document.querySelector("#number-error");
const monthErr = document.querySelector("#month-error");
const yearErr = document.querySelector("#year-error");
const cvcErr = document.querySelector("#cvc-error");
const button = document.querySelector("#button");
const inputSection = document.querySelector("#card-form");
const thanksSection = document.querySelector("#thank-you");
const contButton = document.querySelector("#button-continue");

function trim(inputEl, num) {
  if (inputEl.value.length > num) inputEl.value = inputEl.value.slice(0, num);
}

function stringRepeat(inputEl, displEl, num) {
  let str = "0".repeat(num);
  if (inputEl.value === "") {
    displEl.textContent = `${str}`;
  }
}

name.addEventListener("input", (e) => {
  nameDisplay.textContent = e.target.value.toUpperCase();
  if (e.target.value === "") {
    nameDisplay.textContent = "JANE APPLESEED";
  }
});

cardNumber.addEventListener("input", (e) => {
  let array = [];
  array.push(...e.target.value);
  cardNumberDisplay.textContent = `${array.slice(0, 4).join("")} 
  ${array.slice(4, 8).join("")} 
  ${array.slice(8, 12).join("")} 
  ${array.slice(12, 16).join("")}`;
  if (e.target.value === "") {
    cardNumberDisplay.textContent = "0000 0000 0000 0000";
  }
  trim(cardNumber, 30);
});

function fillDisplay(inputEl, displEl, num) {
  inputEl.addEventListener("input", (e) => {
    let array = [];
    array.push(...e.target.value);
    displEl.textContent = `${array.slice(0, num).join("")}`;
    stringRepeat(inputEl, displEl, num);
    trim(inputEl, num);
  });
}

fillDisplay(month, monthDisplay, 2);
fillDisplay(year, yearDisplay, 2);
fillDisplay(cvc, cvcDisplay, 3);

//*****VALIDATION*****//

button.addEventListener("click", (e) => {
  e.preventDefault();

  isValidName(name, nameErr, 35, 4);
  isValidNumber(cardNumber, numberErr, 16, 16);
  isValidMonth(month, year, monthErr, 2, 2);
  isValidYear(month, year, yearErr, 2, 2);
  isValidCvc(cvc, cvcErr, 3, 3);

  if (nameValid === 1 && numberValid === 1 && monthValid === 1 && yearValid === 1 && cvcValid === 1) {
    inputSection.classList.toggle("hidden");
    thanksSection.classList.toggle("hidden");
  }
});

//*****APP RESET*****//

contButton.addEventListener("click", (e) => {
  e.preventDefault();

  thanksSection.classList.toggle("hidden");
  inputSection.classList.toggle("hidden");

  cardNumber.value = "";
  name.value = "";
  month.value = "";
  year.value = "";
  cvc.value = "";
  nameDisplay.textContent = "JANE APPLESEED";
  cardNumberDisplay.textContent = "0000 0000 0000 0000";
  monthDisplay.textContent = "00";
  yearDisplay.textContent = "00";
  cvcDisplay.textContent = "000";
  validationReset();
});
