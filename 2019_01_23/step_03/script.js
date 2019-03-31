var heightInput = document.getElementById('height')
var weightInput = document.getElementById('weight')
var resultBMI = document.getElementById('result-bmi')
var resultCategory = document.getElementById('result-category')

document.getElementById('button').onclick = buttonClick

function buttonClick() {
  var height = Number(heightInput.value) / 100
  var weight = Number(weightInput.value)

  var bmi = weight / (height * height)

  resultBMI.innerText = bmi.toFixed(2)

  if (bmi < 18.5) {
    resultCategory.innerText = 'niedowaga'
  } else if (bmi >= 25) {
    resultCategory.innerText = 'nadwaga'
  } else {
    resultCategory.innerText = 'waga prawidłowa'
  }
}
