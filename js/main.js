/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("window.addEventListener('DOMContentLoaded', function () {\n  \"use strict\";\n\n  var form = __webpack_require__(/*! ./parts/form.js */ \"./parts/form.js\"),\n      slider = __webpack_require__(/*! ./parts/slider.js */ \"./parts/slider.js\"),\n      other = __webpack_require__(/*! ./parts/other.js */ \"./parts/other.js\"),\n      tabs = __webpack_require__(/*! ./parts/tabs.js */ \"./parts/tabs.js\");\n\n  form();\n  slider();\n  other();\n  tabs();\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./parts/form.js":
/*!***********************!*\
  !*** ./parts/form.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function form() {\n  /*   let message = {\r\n      loading: 'Загрузка...',\r\n      success: 'Спасибо! Скоро мы с вами свяжемся!',\r\n      failure: 'Что-то пошло не так...'\r\n    };\r\n      let form = document.querySelectorAll('form'),\r\n      input = document.querySelectorAll('input'),\r\n      inputTel = document.querySelectorAll('.tel'),\r\n      statusMessage = document.createElement('div');\r\n    statusMessage.classList.add('status');\r\n  \r\n    form.forEach(function sendForm(item) {\r\n        item.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n        item.appendChild(statusMessage);\r\n        let formData = new FormData(item);\r\n          function postData(data) {\r\n          return new Promise((resolve, reject) => {\r\n            let request = new XMLHttpRequest();\r\n            request.open('POST', 'server.php');\r\n            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');\r\n              request.onreadystatechange = () => {\r\n              if (request.readyState < 4) {\r\n                resolve()\r\n              } else if (request.readyState === 4) {\r\n                if (request.status == 200) {\r\n                  resolve()\r\n                } else {\r\n                  reject()\r\n                }\r\n              }\r\n            }\r\n            request.send(data);\r\n          })\r\n        }\r\n          function clearInput() {\r\n          input.forEach((item) => {\r\n            item.value = '';\r\n          });\r\n        };\r\n          postData(formData)\r\n          .then(() => {\r\n            statusMessage.textContent = message.loading;\r\n          })\r\n          .then(() => {\r\n            statusMessage.innerHTML = message.success;\r\n            setTimeout(func, 3000);\r\n          })\r\n          .catch(() => {\r\n            statusMessage.innerHTML = message.failure;\r\n          })\r\n          .then(clearInput)\r\n      });\r\n    });\r\n      function func() {\r\n      statusMessage.innerHTML = \"\";\r\n    }\r\n  \r\n    inputTel.forEach((item) => {\r\n      // Проверяем фокус\r\n      item.addEventListener('focus', () => {\r\n        // Если там ничего нет или есть, но левое\r\n        if (!/^\\+\\d*$/.test(item.value))\r\n          // То вставляем знак плюса как значение\r\n          item.value = '+';\r\n      });\r\n        item.addEventListener('keypress', (e) => {\r\n        // Отменяем ввод не цифр\r\n        if (!/\\d/.test(e.key)) {\r\n          e.preventDefault();\r\n          alert(\"Прошу вводить только цыфры\")\r\n        } else {\r\n          if (item.value.length == 2) item.value = item.value + \"(\";\r\n          if (item.value.length == 6) item.value = item.value + \")-\";\r\n          if (item.value.length == 11) item.value = item.value + \"-\";\r\n          if (item.value.length == 14) item.value = item.value + \"-\";\r\n          if (item.value.length > 16) item.value = item.value.substring(0, 16);\r\n        }\r\n      });\r\n    }); */\n}\n\nmodule.exports = form;\n\n//# sourceURL=webpack:///./parts/form.js?");

/***/ }),

/***/ "./parts/other.js":
/*!************************!*\
  !*** ./parts/other.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function other() {\n  var slider = document.querySelector('.slider'),\n      heightWindow = document.documentElement.clientHeight;\n  slider.style.height = heightWindow + 'px';\n}\n\nmodule.exports = other;\n\n//# sourceURL=webpack:///./parts/other.js?");

/***/ }),

/***/ "./parts/slider.js":
/*!*************************!*\
  !*** ./parts/slider.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function slider() {\n  /* \r\n    let slideIndex = 1,\r\n      slides = document.querySelectorAll('.slider-item'),\r\n      prev = document.querySelector('.prev'),\r\n      next = document.querySelector('.next'),\r\n      dotsWrap = document.querySelector('.slider-dots'),\r\n      dots = document.querySelectorAll('.dot');\r\n      showSlides(slideIndex);\r\n      function showSlides(n) {\r\n        if (n > slides.length) {\r\n        slideIndex = 1;\r\n      }\r\n      if (n < 1) {\r\n        slideIndex = slides.length;\r\n      }\r\n        slides.forEach((item) => item.style.display = \"none\");\r\n        dots.forEach((item) => item.classList.remove('dot-active'));\r\n        slides[slideIndex - 1].style.display = 'block';\r\n      dots[slideIndex - 1].classList.add('dot-active');\r\n    }\r\n      function plusSlides(n) {\r\n      showSlides(slideIndex += n);\r\n    }\r\n      function currentSlide(n) {\r\n      showSlides(slideIndex = n);\r\n    }\r\n      prev.addEventListener('click', () => {\r\n      plusSlides(-1);\r\n    });\r\n      next.addEventListener('click', () => {\r\n      plusSlides(1);\r\n    });\r\n      dotsWrap.addEventListener('click', function (event) {\r\n      for (let i = 0; i < dots.length + 1; i++) {\r\n        if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {\r\n          currentSlide(i);\r\n        }\r\n      }\r\n    }); */\n}\n\nmodule.exports = slider;\n\n//# sourceURL=webpack:///./parts/slider.js?");

/***/ }),

/***/ "./parts/tabs.js":
/*!***********************!*\
  !*** ./parts/tabs.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function tabs() {\n  var bonusesWrapOne = document.querySelectorAll('.bonuses-wrap')[0],\n      imgOne = bonusesWrapOne.querySelectorAll('img'),\n      tabsOne = bonusesWrapOne.querySelectorAll('.bonuses-wrap-tabs__item'),\n      bonusesWrapTwo = document.querySelectorAll('.bonuses-wrap')[1],\n      imgTwo = bonusesWrapTwo.querySelectorAll('img'),\n      tabsTwo = bonusesWrapTwo.querySelectorAll('.bonuses-wrap-tabs__item'),\n      ollTabs = document.querySelectorAll('.bonuses-wrap-tabs__item');\n\n  function tabExchange(img, text, ollTabs) {\n    ollTabs.forEach(function (item) {\n      return item.classList.add('hide');\n    });\n\n    function showSlides(slideIndex) {\n      ollTabs.forEach(function (item) {\n        return item.classList.add('hide');\n      });\n      text[slideIndex - 1].classList.remove('hide');\n    }\n\n    img.forEach(function (item) {\n      item.addEventListener('click', function (event) {\n        for (var i = 0; i < img.length + 1; i++) {\n          if (event.target == img[i - 1]) {\n            showSlides(i);\n            var height = text[i - 1].offsetHeight; // высчитываю высоту таба который становиться видимым\n            // проверяем на каком из двух рядов происходит клик по картинке, от этого зависит какой обвертке присваиваю нижний марджин\n\n            if (item.parentNode.parentNode.parentNode.classList.contains('bonuses-wrap-1')) {\n              bonusesWrapTwo.style.marginBottom = '50px';\n              bonusesWrapOne.style.marginBottom = height + 30 + 'px';\n            } else {\n              bonusesWrapOne.style.marginBottom = '50px';\n              bonusesWrapTwo.style.marginBottom = height + 30 + 'px';\n            }\n\n            ;\n          }\n        }\n      });\n    });\n  } // imgOne и imgTwo это картинки с разных обверток wrap нижней и верхней\n  // tabsOne и tabsTwo это табы с текстом с разных обверток wrap нижней и верхней\n  // ollTabs все табы с текстом, чтобы закрывать их все при клике на картинку из разной обвертки\n\n\n  tabExchange(imgOne, tabsOne, ollTabs);\n  tabExchange(imgTwo, tabsTwo, ollTabs);\n}\n\nmodule.exports = tabs;\n\n//# sourceURL=webpack:///./parts/tabs.js?");

/***/ })

/******/ });