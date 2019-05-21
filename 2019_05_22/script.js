var images = document.querySelectorAll('.photo')
var btnNext = document.querySelector('#next')
var btnPrev = document.querySelector('#prev')
var counter = document.querySelector('#counter')
var bg = document.querySelector('#bg')
var currentIndex = 0

function hideImage(index) {
  images[index].classList.remove('visible')
}

function showImage(index) {
  images[index].classList.add('visible')
}

function updateUI() {
  // Counter
  var a = currentIndex + 1 
  var b = images.length
  counter.innerText = a + '/' + b

  // Buttons
  btnNext.disabled = currentIndex === images.length - 1
  btnPrev.disabled = currentIndex === 0

  // Background
  var src = images[currentIndex].src
  bg.style.backgroundImage = 'url(' + src + ')'
}

function goNext() {
  hideImage(currentIndex)
  currentIndex++
  showImage(currentIndex)

  updateUI()
}

function goPrev() {
  hideImage(currentIndex)
  currentIndex--
  showImage(currentIndex)

  updateUI()
}

showImage(0)
updateUI()

btnPrev.disabled = true
btnNext.addEventListener('click', goNext)
btnPrev.addEventListener('click', goPrev)
