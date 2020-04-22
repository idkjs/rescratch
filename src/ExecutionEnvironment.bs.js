'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Ansi_up = require("ansi_up");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Child_process = require("child_process");

var au = new Ansi_up.default();

au.use_classes = true;

function execute(send, cwd, command, callback) {
  var $$process = Child_process.spawn(command, [], {
        cwd: cwd,
        shell: true
      });
  $$process.stdout.on("data", (function (data) {
          return Curry._1(send, /* StdOut */Block.__(1, [data]));
        }));
  $$process.stderr.on("data", (function (data) {
          return Curry._1(send, /* StdErr */Block.__(2, [data]));
        }));
  $$process.on("exit", (function (code, signal) {
          return Curry._1(callback, code);
        }));
  
}

var component = ReasonReact.reducerComponent("Terminal");

function make(dir, render) {
  return {
          debugName: component.debugName,
          reactClassInternal: component.reactClassInternal,
          handedOffState: component.handedOffState,
          willReceiveProps: component.willReceiveProps,
          didMount: component.didMount,
          didUpdate: component.didUpdate,
          willUnmount: component.willUnmount,
          willUpdate: component.willUpdate,
          shouldUpdate: component.shouldUpdate,
          render: (function (param) {
              var send = param.send;
              return Curry._2(render, (function (command, callback) {
                            return Curry._1(send, /* ExecuteCommand */Block.__(0, [
                                          command,
                                          callback
                                        ]));
                          }), param.state.output);
            }),
          initialState: (function (param) {
              return {
                      output: ""
                    };
            }),
          retainedProps: component.retainedProps,
          reducer: (function (action, state) {
              switch (action.tag | 0) {
                case /* ExecuteCommand */0 :
                    var callback = action[1];
                    var command = action[0];
                    return /* UpdateWithSideEffects */Block.__(2, [
                              {
                                output: state.output + ("\n> " + (command + "\n"))
                              },
                              (function (self) {
                                  return execute(self.send, dir, command, callback);
                                })
                            ]);
                case /* StdOut */1 :
                    return /* Update */Block.__(0, [{
                                output: state.output + ("<div class=\"stdout\">" + (au.ansi_to_html(action[0]) + "</div>"))
                              }]);
                case /* StdErr */2 :
                    return /* Update */Block.__(0, [{
                                output: state.output + ("<div class=\"stderr\">" + (au.ansi_to_html(action[0]) + "</div>"))
                              }]);
                
              }
            }),
          jsElementWrapped: component.jsElementWrapped
        };
}

exports.au = au;
exports.execute = execute;
exports.component = component;
exports.make = make;
/* au Not a pure module */
