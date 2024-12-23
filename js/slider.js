const slides = document.querySelector('.slider__slides')
const slide = document.querySelectorAll('.slider__slide')
const prevBtn = document.querySelector('.slider__button-previous')
const nextBtn = document.querySelector('.slider__button-next')

let currentIndex = 0
const totalSlides = slide.length

function updateSliderPosition () {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++
  } else {
    currentIndex = 0
  }
  updateSliderPosition()
})

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--
  } else {
    currentIndex = totalSlides - 1
  }
  updateSliderPosition()
})