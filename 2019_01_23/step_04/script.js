var heightInput = document.getElementById('height')
var weightInput = document.getElementById('weight')
var resultBMI = document.getElementById('result-bmi')
var resultCategory = document.getElementById('result-category')
var resultContainer = document.getElementById('result')

document.getElementById('button').onclick = buttonClick

function buttonClick() {
  var height = Number(heightInput.value) / 100
  var weight = Number(weightInput.value)

  if (height <= 0 || weight <= 0) {
    return
  }

  var bmi = weight / (height * height)

  resultBMI.innerText = bmi.toFixed(2)

  if (bmi < 18.5) {
    resultCategory.innerText = 'niedowaga'
  } else if (bmi >= 25) {
    resultCategory.innerText = 'nadwaga'
  } else {
    resultCategory.innerText = 'waga prawidłowa'
  }

  var min = Math.round(18.5 * height * height)
  var max = Math.round(24.99 * height * height)
  document.getElementById('limit-min').innerText = min
  document.getElementById('limit-max').innerText = max


  resultContainer.classList.remove('hidden')
}
