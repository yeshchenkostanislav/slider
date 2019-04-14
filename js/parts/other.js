function other() {

  let slider = document.querySelector('.slider'),
    heightWindow = document.documentElement.clientHeight;

  slider.style.height = heightWindow + 'px';
}

module.exports = other;