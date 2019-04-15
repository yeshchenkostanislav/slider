function other() {

  // высота слайдов которая высчитывается исходя из высоты экрана
  let sliderItem = document.querySelector('.slider__item'),
    heightWindow = document.documentElement.clientHeight;

  sliderItem.style.height = heightWindow + 'px';

  // создаем бызу данных зарегистрированных email

  let mailbox = document.querySelector('.input'),
    button = document.querySelector('.header-input-btn'),
    text = document.querySelector('.subinput__domain'),
    base = [];




  button.addEventListener('click', () => {

    if (mailbox.value != '' && mailbox.value != null) {

      let a;
      for (var i = 0; i < base.length; i++) {
        if (base[i] === mailbox.value) {
          a = true;
          text.style.display = 'none';
        }
      }

      if (a) {
        alert('Домен с таким именем уже существует');
        mailbox.value = '';
      } else {
        base.push(mailbox.value);
        text.innerHTML = 'Домен ' + mailbox.value + ' — свободен.';
        text.style.display = 'block';
        mailbox.value = '';
        console.log(base);
      }
    } else {
      alert("Введи почту");
    };


  })

}

module.exports = other;