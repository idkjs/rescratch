open Rebase;
open Vrroom;

[%bs.raw {|require('codemirror/mode/javascript/javascript')|}];
[%bs.raw {|require('codemirror/mode/rust/rust')|}];
[%bs.raw {|require('codemirror/mode/mllike/mllike')|}];

let _langToMode =
  fun
  | `ML => "mllike"
  | `RE => "rust"
  | `JS => "javascript";

[@react.component]
let make =
    (
      ~value,
      ~lang=?,
      ~defaultValue=?,
      ~lineNumbers=true,
      ~readOnly=false,
      ~onChange=?,
    ) => {
  <CodeMirror
    value
    ?defaultValue
    ?onChange
    options={
      "mode": lang |> Option.map(_langToMode) |> Js.Undefined.fromOption,
      "theme": "material",
      "lineNumbers": lineNumbers,
      "readOnly": bool(readOnly),
    }
  />;
};