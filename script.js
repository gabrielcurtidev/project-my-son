const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');
const containerSlider = document.querySelector('.container-slider');
var mutedSound = document.querySelector('.muted-sound');
var soundAmbience = document.getElementById('somAmbiente').volume = 0.05;


let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

/*=====================sounds=======================*/

mutedSound.addEventListener('click', () => {
  // console.log('test som')
  var soundAmbience = document.getElementById('somAmbiente')

  if (soundAmbience.volume > 0) {
    soundAmbience.volume = 0;
  } else {
    soundAmbience.volume = 0.05;
  }
});




