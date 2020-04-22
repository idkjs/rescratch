open Vrroom;
module Styles = ButtonStyles;

[@react.component]
let make = (~label,
            ~icon=nothing,
            ~style=`Normal,
            ~alignIcon=`Left,
            ~className="",
            ~onClick,
            _:childless) => {

    <button className = ClassName.join(["c-button", className])
            onClick   = (_e => onClick()) >

      (alignIcon === `Left ? icon : nothing)
      <span className="label"> {label |> text} </span>
      (alignIcon === `Right ? icon : nothing)

    </button>
};