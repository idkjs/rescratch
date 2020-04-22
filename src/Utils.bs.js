'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

function debounce(f, wait) {
  var timeout = {
    contents: undefined
  };
  return (function (x) {
      var id = timeout.contents;
      if (id !== undefined) {
        clearTimeout(Caml_option.valFromOption(id));
        timeout.contents = undefined;
      }
      timeout.contents = Caml_option.some(setTimeout((function (param) {
                  timeout.contents = undefined;
                  return Curry._1(f, x);
                }), wait));
      
    });
}

exports.debounce = debounce;
/* No side effect */
