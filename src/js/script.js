const button = document.querySelector(".button");
const inputWeight = document.querySelector(".input-1");
const inputHeight = document.querySelector(".input-2");
const result = document.querySelector(".result-BMI");
const resultCategory = document.querySelector(".result-category");

button.addEventListener("click", () => {
  if (inputWeight.value > 200 || inputWeight.value < 35 || inputHeight.value > 250 || inputHeight.value < 120 || inputWeight.value === "" || inputHeight.value === "" || isNaN(inputWeight.value) || isNaN(inputHeight.value)) {
    result.innerHTML = "Ви ввели некоректні дані";
  } else {
    const weight = inputWeight.value;
    const height = inputHeight.value / 100;
    const bmi = (weight / (height * height)).toFixed(2);
    result.innerHTML = `Ваш BMI: ${bmi}`
    ResultCategory(bmi);
  }
})

function ResultCategory(bmi) {
  if (bmi < 18.5) {
    resultCategory.innerHTML = "Недостатньо ваги";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    resultCategory.innerHTML = "Нормальна вага";
  } else if (bmi >= 24.9 && bmi < 29.9) {
    resultCategory.innerHTML = "Перевага ваги";
  } else if (bmi >= 29.9 && bmi < 34.9) {
    resultCategory.innerHTML = "Ожирення 1 степені";
  } else if (bmi >= 34.9 && bmi < 39.9) {
    resultCategory.innerHTML = "Ожирення 2 степені";
  } else {
    resultCategory.innerHTML = "Ожирення 3 степені";
  }
}