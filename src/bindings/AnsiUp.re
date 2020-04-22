type t;

[@bs.module "ansi_up"] [@bs.new] external make: unit => t = "default";

[@bs.set] external escape_for_html: (t, bool) => unit;
[@bs.set] external use_classes: (t, bool) => unit;

[@bs.send.pipe: t] external ansi_to_html: string => string;
[@bs.send.pipe: t] external ansi_to_terxt: string => string;
[@bs.send.pipe: t] external linkify: string => string;