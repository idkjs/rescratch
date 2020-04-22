'use strict';

var Vm2 = require("vm2");
var $$Array = require("bs-platform/lib/js/array.js");

function makeVM(consoleOpt, requireExternalOpt, sandbox) {
  var $$console = consoleOpt !== undefined ? consoleOpt : /* Inherit */-72987685;
  var requireExternal = requireExternalOpt !== undefined ? requireExternalOpt : /* Deny */759137836;
  return new Vm2.NodeVM({
              console: $$console !== -72987685 ? (
                  $$console >= 759137836 ? "off" : "redirect"
                ) : "inherit",
              sandbox: sandbox,
              require: {
                external: typeof requireExternal === "number" ? requireExternal >= 885068905 : $$Array.of_list(requireExternal[1])
              }
            });
}

exports.makeVM = makeVM;
/* vm2 Not a pure module */
