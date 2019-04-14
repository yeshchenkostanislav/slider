window.addEventListener('DOMContentLoaded', () => {

  "use strict";
  let
    form = require('./parts/form.js'),
    slider = require('./parts/slider.js'),
    other = require('./parts/other.js'),
    tabs = require('./parts/tabs.js');


  form();
  slider();
  other();
  tabs();

});