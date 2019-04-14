function tabs() {

  let bonusesWrapOne = document.querySelectorAll('.bonuses-wrap')[0],
    imgOne = bonusesWrapOne.querySelectorAll('img'),
    tabsOne = bonusesWrapOne.querySelectorAll('.bonuses-wrap-tabs__item'),
    bonusesWrapTwo = document.querySelectorAll('.bonuses-wrap')[1],
    imgTwo = bonusesWrapTwo.querySelectorAll('img'),
    tabsTwo = bonusesWrapTwo.querySelectorAll('.bonuses-wrap-tabs__item'),
    ollTabs = document.querySelectorAll('.bonuses-wrap-tabs__item');

  function tabExchange(img, text, ollTabs) {
    ollTabs.forEach((item) => item.classList.add('hide'));

    function showSlides(slideIndex) {
      ollTabs.forEach((item) => item.classList.add('hide'));
      text[slideIndex - 1].classList.remove('hide');

    }

    img.forEach((item) => {
      item.addEventListener('click', function (event) {
        for (let i = 0; i < img.length + 1; i++) {
          if (event.target == img[i - 1]) {
            showSlides(i);

            let height = text[i - 1].offsetHeight; // высчитываю высоту таба который становиться видимым

            // проверяем на каком из двух рядов происходит клик по картинке, от этого зависит какой обвертке присваиваю нижний марджин
            if (item.parentNode.parentNode.parentNode.classList.contains('bonuses-wrap-1')) {
              bonusesWrapTwo.style.marginBottom = '50px';
              bonusesWrapOne.style.marginBottom = (height + 30) + 'px';
            } else {
              bonusesWrapOne.style.marginBottom = '50px';
              bonusesWrapTwo.style.marginBottom = (height + 30) + 'px';
            };
          }
        }

      });
    })
  }

  // imgOne и imgTwo это картинки с разных обверток wrap нижней и верхней
  // tabsOne и tabsTwo это табы с текстом с разных обверток wrap нижней и верхней
  // ollTabs все табы с текстом, чтобы закрывать их все при клике на картинку из разной обвертки
  tabExchange(imgOne, tabsOne, ollTabs);
  tabExchange(imgTwo, tabsTwo, ollTabs);

}

module.exports = tabs;