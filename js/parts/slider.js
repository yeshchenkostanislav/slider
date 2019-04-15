function slider() {

  let slideIndex = 1,
    slides = document.querySelectorAll('.slider__item'),
    bonusesWrap = document.querySelectorAll('.bonuses-wrap'),
    ollTabs = document.querySelectorAll('.bonuses-wrap-tabs__item'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

  showSlides(slideIndex);

  function showSlides(n) {

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = "none");

    dots.forEach((item) => item.classList.remove('dot-active'));

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  //почле прокрутки колечика убираю расстояние которое добавлялось при появлении таба
  function hideMargin() {
    bonusesWrap.forEach((item) => {
      item.style.marginBottom = '50px';
    })
  }

  // отслеживаю прокрутку колесика мышки и переключаю слайды
  document.addEventListener('wheel', (e) => {
    if (e.wheelDelta == 120) {
      plusSlides(-1);
      ollTabs.forEach((item) => item.classList.add('hide'));
      hideMargin();
    } else {
      plusSlides(1);
      ollTabs.forEach((item) => item.classList.add('hide'));
      hideMargin();
    }
  });



  dotsWrap.addEventListener('click', function (event) {
    for (let i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
}

module.exports = slider;