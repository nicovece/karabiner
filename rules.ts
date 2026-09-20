import fs from "fs";
import { KarabinerRules } from "./types";
import {
  createHyperSubLayers,
  app,
  finder,
  open,
  rectangle,
  shell,
} from "./utils";

const rules: KarabinerRules[] = [
  // Define the Hyper key itself
  {
    description: "Hyper Key (⌃⌥⇧⌘)",
    manipulators: [
      {
        description: "Caps Lock -> Hyper Key",
        from: {
          key_code: "caps_lock",
          modifiers: {
            optional: ["any"],
          },
        },
        to: [
          {
            set_variable: {
              name: "hyper",
              value: 1,
            },
          },
        ],
        to_after_key_up: [
          {
            set_variable: {
              name: "hyper",
              value: 0,
            },
          },
        ],
        // to_if_alone: [
        //   {
        //     key_code: "escape",
        //   },
        // ],
        type: "basic",
      },
      //      {
      //        type: "basic",
      //        description: "Disable CMD + Tab to force Hyper Key usage",
      //        from: {
      //          key_code: "tab",
      //          modifiers: {
      //            mandatory: ["left_command"],
      //          },
      //        },
      //        to: [
      //          {
      //            key_code: "tab",
      //          },
      //        ],
      //      },
    ],
  },
  ...createHyperSubLayers({
    spacebar: open(
      "raycast://extensions/stellate/mxstbr-commands/create-notion-todo"
    ),
    // b = "B"rowse
    b: {
      p: open("https://www.ilpost.it/"),
      y: open("https://www.youtube.com/"),
      f: open("https://facebook.com"),
      r: open("https://www.repubblica.it/"),
      n: open("https://nicovece.com"),
      g: open("https://www.google.com/"),
      h: open("https://github.com/nicovece"),
      m: open("https://github.com/nicovece?tab=repositories"),
      c: open("https://careerfoundry.com/en/dashboards/main"),
      t: open("https://translate.google.com/?sl=en&tl=it&op=translate"),
      o: open("https://www.ho-mobile.it/my-account/riepilogo.html"),
    },
    // f = "F"inder
    f: {
      h: finder("~/"),
      r: finder("~/Documents/repos"),
      l: finder("~/Sites/localhost"),
      s: finder("~/Sites/localhost/salon24_docker"),
      c: finder("~/careerfoundry"),
      w: finder("~/work"),
      d: finder("~/Documents/Documenti_importanti"),
      q: finder("~/Documents"),
      a: finder("/Applications"),
      j: finder("~/.config"),
      n: finder("~/Downloads"),
      t: finder("~/Dropbox/Screenshot"),
    },
    // o = "Open" applications
    a: {
      r: app("Arc"),
      g: app("Ghostty"),
      c: app("Google Chrome"),
      v: app("Visual Studio Code"),
      d: app("Zed"),
      s: app("Slack"),
      t: app("Timemator"),
      // Open todo list managed via *H*ypersonic
      h: open(
        "notion://www.notion.so/stellatehq/7b33b924746647499d906c55f89d5026"
      ),
      z: app("Zen Browser"),
      // "M"arkdown (Reflect.app)
      m: app("Mail"),
      n: app("Notes"),
      k: app("GitKraken"),
      o: app("Obsidian"),
      x: app("Ghostty"),
    },

    // TODO: This doesn't quite work yet.
    // l = "Layouts" via Raycast's custom window management
    // l: {
    //   // Coding layout
    //   c: shell`
    //     open -a "Visual Studio Code.app"
    //     sleep 0.2
    //     open -g "raycast://customWindowManagementCommand?position=topLeft&relativeWidth=0.5"

    //     open -a "Terminal.app"
    //     sleep 0.2
    //     open -g "raycast://customWindowManagementCommand?position=topRight&relativeWidth=0.5"
    //   `,
    // },

    // w = "Window" via rectangle.app
    w: {
      semicolon: {
        description: "Window: Hide",
        to: [
          {
            key_code: "h",
            modifiers: ["right_command"],
          },
        ],
      },
      f: rectangle("maximize"),
      h: rectangle("left-half"),
      j: rectangle("bottom-half"),
      k: rectangle("top-half"),
      l: rectangle("right-half"),
      y: rectangle("first-third"),
      u: rectangle("first-two-thirds"),
      i: rectangle("last-two-thirds"),
      o: rectangle("last-third"),
      d: rectangle("center-two-thirds"),
      6: rectangle("top-left"),
      7: rectangle("top-right"),
      8: rectangle("bottom-right"),
      9: rectangle("bottom-left"),
      v: rectangle("vcode"),
      c: rectangle("study"),
      n: {
        description: "Window: Previous Tab",
        to: [
          {
            key_code: "tab",
            modifiers: ["right_control", "right_shift"],
          },
        ],
      },
      m: {
        description: "Window: Next Tab",
        to: [
          {
            key_code: "tab",
            modifiers: ["right_control"],
          },
        ],
      },
    },

    // s = "System"
    s: {
      u: {
        to: [
          {
            key_code: "volume_increment",
          },
        ],
      },
      j: {
        to: [
          {
            key_code: "volume_decrement",
          },
        ],
      },
      i: {
        to: [
          {
            key_code: "display_brightness_increment",
          },
        ],
      },
      k: {
        to: [
          {
            key_code: "display_brightness_decrement",
          },
        ],
      },
      l: {
        to: [
          {
            key_code: "q",
            modifiers: ["right_control", "right_command"],
          },
        ],
      },
      p: {
        to: [
          {
            key_code: "play_or_pause",
          },
        ],
      },
      semicolon: {
        to: [
          {
            key_code: "fastforward",
          },
        ],
      },
      // "D"o not disturb toggle
      // d: open(
      //   `raycast://extensions/yakitrak/do-not-disturb/toggle?launchType=background`
      // ),
      o: open(`raycast://extensions/fturcheti/open-with-app/index`),
      // "T"heme
      // t: open(`raycast://extensions/raycast/system/toggle-system-appearance`),
      c: open("raycast://extensions/raycast/system/open-camera"),
      // 'v'oice
      v: {
        to: [
          {
            key_code: "spacebar",
            modifiers: ["left_option"],
          },
        ],
      },
      f: {
        to: [
          {
            key_code: "delete_or_backspace",
          },
        ],
      },
      g: {
        to: [
          {
            key_code: "delete_forward",
          },
        ],
      },
      d: {
        to: [
          {
            key_code: "escape",
          },
        ],
      },
    },
    // d = deleted
    d: {
      s: {
        to: [
          {
            key_code: "delete_or_backspace",
          },
        ],
      },
      a: {
        to: [
          {
            key_code: "delete_or_backspace",
            modifiers: ["command"],
          },
        ],
      },
      f: {
        to: [
          {
            key_code: "delete_forward",
          },
        ],
      },
      g: {
        to: [
          {
            key_code: "delete_forward",
            modifiers: ["command"],
          },
        ],
      },
      j: {
        to: [
          {
            key_code: "delete_or_backspace",
          },
        ],
      },
      h: {
        to: [
          {
            key_code: "delete_or_backspace",
            modifiers: ["command"],
          },
        ],
      },
      k: {
        to: [
          {
            key_code: "delete_forward",
          },
        ],
      },
      l: {
        to: [
          {
            key_code: "delete_forward",
            modifiers: ["command"],
          },
        ],
      },
    },
    // q = specials. I know I know, but it's the only one left
    // e = numbers
    e: {
      u: {
        to: [
          {
            key_code: "7",
          },
        ],
      },
      i: {
        to: [
          {
            key_code: "8",
          },
        ],
      },
      o: {
        to: [
          {
            key_code: "9",
          },
        ],
      },
      j: {
        to: [
          {
            key_code: "4",
          },
        ],
      },
      k: {
        to: [
          {
            key_code: "5",
          },
        ],
      },
      l: {
        to: [
          {
            key_code: "6",
          },
        ],
      },
      m: {
        to: [
          {
            key_code: "1",
          },
        ],
      },
      comma: {
        to: [
          {
            key_code: "2",
          },
        ],
      },
      period: {
        to: [
          {
            key_code: "3",
          },
        ],
      },
      n: {
        to: [
          {
            key_code: "0",
          },
        ],
      },
    },
    //
    c: {
      j: {
        // [
        to: [
          {
            key_code: "open_bracket",
            modifiers: ["option"],
          },
        ],
      },
      u: {
        // ]
        to: [
          {
            key_code: "close_bracket",
            modifiers: ["option"],
          },
        ],
      },
      k: {
        // {
        to: [
          {
            key_code: "open_bracket",
            modifiers: ["option", "shift"],
          },
        ],
      },
      i: {
        // }
        to: [
          {
            key_code: "close_bracket",
            modifiers: ["option", "shift"],
          },
        ],
      },
      l: {
        //(
        to: [
          {
            key_code: "8",
            modifiers: ["shift"],
          },
        ],
      },
      o: {
        // )
        to: [
          {
            key_code: "9",
            modifiers: ["shift"],
          },
        ],
      },
      h: {
        // `
        to: [
          {
            key_code: "9",
            modifiers: ["option"],
          },
        ],
      },
      y: {
        // `
        to: [
          {
            key_code: "5",
            modifiers: ["option"],
          },
        ],
      },
    },

    // v = "moVe" which isn't "m" because we want it to be on the left hand
    // so that hjkl work like they do in vim
    x: {
      h: {
        to: [{ key_code: "left_arrow" }],
      },
      j: {
        to: [{ key_code: "down_arrow" }],
      },
      k: {
        to: [{ key_code: "up_arrow" }],
      },
      l: {
        to: [{ key_code: "right_arrow" }],
      },
      // Magicmove via homerow.app
      m: {
        to: [{ key_code: "f", modifiers: ["right_control"] }],
        // TODO: Trigger Vim Easymotion when VSCode is focused
      },
      // Scroll mode via homerow.app
      s: {
        to: [{ key_code: "j", modifiers: ["right_control"] }],
      },
      d: {
        to: [{ key_code: "d", modifiers: ["right_shift", "right_command"] }],
      },
      u: {
        to: [{ key_code: "page_down" }],
      },
      i: {
        to: [{ key_code: "page_up" }],
      },
    },

    // c = Musi*c* which isn't "m" because we want it to be on the left hand
    q: {
      p: {
        to: [{ key_code: "play_or_pause" }],
      },
      n: {
        to: [{ key_code: "fastforward" }],
      },
      b: {
        to: [{ key_code: "rewind" }],
      },
    },

    // r = "Raycast"
    r: {
      c: open("raycast://extensions/thomas/color-picker/pick-color"),
      n: open("raycast://script-commands/dismiss-notifications"),
      e: open(
        "raycast://extensions/raycast/emoji-symbols/search-emoji-symbols"
      ),
      p: open("raycast://extensions/raycast/raycast/confetti"),
      h: open(
        "raycast://extensions/raycast/clipboard-history/clipboard-history"
      ),
    },
  }),
  // {
  //   description: "Change Backspace to Spacebar when Minecraft is focused",
  //   manipulators: [
  //     {
  //       type: "basic",
  //       from: {
  //         key_code: "delete_or_backspace",
  //       },
  //       to: [
  //         {
  //           key_code: "spacebar",
  //         },
  //       ],
  //       conditions: [
  //         {
  //           type: "frontmost_application_if",
  //           file_paths: [
  //             "^/Users/mxstbr/Library/Application Support/minecraft/runtime/java-runtime-gamma/mac-os-arm64/java-runtime-gamma/jre.bundle/Contents/Home/bin/java$",
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },

  /* home row mods */
  {
    description: "Home row mods - shift, ctrl, opt, cmd",
    manipulators: [
      {
        from: {
          simultaneous: [
            {
              key_code: "a",
            },
            {
              key_code: "s",
            },
            {
              key_code: "d",
            },
            {
              key_code: "f",
            },
          ],
        },
        to_if_held_down: [
          {
            key_code: "left_shift",
            modifiers: ["left_command", "left_option", "left_control"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "a",
            },
            {
              key_code: "s",
            },
            {
              key_code: "d",
            },
          ],
        },
        to_if_held_down: [
          {
            key_code: "left_shift",
            modifiers: ["left_option", "left_control"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "a",
            },
            {
              key_code: "d",
            },
            {
              key_code: "f",
            },
          ],
        },
        to_if_held_down: [
          {
            key_code: "left_shift",
            modifiers: ["left_command", "left_option"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "s",
            },
            {
              key_code: "d",
            },
            {
              key_code: "f",
            },
          ],
        },
        to_if_held_down: [
          {
            key_code: "left_control",
            modifiers: ["left_command", "left_option"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "a",
            },
            {
              key_code: "s",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "a",
          },
          {
            key_code: "s",
          },
        ],
        to_if_held_down: [
          {
            key_code: "left_shift",
            modifiers: ["left_control"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "s",
            },
            {
              key_code: "a",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "s",
          },
          {
            key_code: "a",
          },
        ],
        to_if_held_down: [
          {
            key_code: "left_shift",
            modifiers: ["left_control"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "a",
            },
            {
              key_code: "d",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "a",
          },
          {
            key_code: "d",
          },
        ],
        to_if_held_down: [
          {
            key_code: "left_shift",
            modifiers: ["left_option"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "d",
            },
            {
              key_code: "a",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "d",
          },
          {
            key_code: "a",
          },
        ],
        to_if_held_down: [
          {
            key_code: "left_shift",
            modifiers: ["left_option"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "a",
            },
            {
              key_code: "f",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "a",
          },
          {
            key_code: "f",
          },
        ],
        to_if_held_down: [
          {
            key_code: "left_shift",
            modifiers: ["left_command"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "f",
            },
            {
              key_code: "a",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "f",
          },
          {
            key_code: "a",
          },
        ],
        to_if_held_down: [
          {
            key_code: "left_shift",
            modifiers: ["left_command"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "s",
            },
            {
              key_code: "d",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "s",
          },
          {
            key_code: "d",
          },
        ],
        to_if_held_down: [
          {
            key_code: "left_control",
            modifiers: ["left_option"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "d",
            },
            {
              key_code: "s",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "d",
          },
          {
            key_code: "s",
          },
        ],
        to_if_held_down: [
          {
            key_code: "left_control",
            modifiers: ["left_option"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "s",
            },
            {
              key_code: "f",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "s",
          },
          {
            key_code: "f",
          },
        ],
        to_if_held_down: [
          {
            key_code: "left_control",
            modifiers: ["left_command"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "f",
            },
            {
              key_code: "s",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "f",
          },
          {
            key_code: "s",
          },
        ],
        to_if_held_down: [
          {
            key_code: "left_control",
            modifiers: ["left_command"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "d",
            },
            {
              key_code: "f",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "d",
          },
          {
            key_code: "f",
          },
        ],
        to_if_held_down: [
          {
            key_code: "left_option",
            modifiers: ["left_command"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "f",
            },
            {
              key_code: "d",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "f",
          },
          {
            key_code: "d",
          },
        ],
        to_if_held_down: [
          {
            key_code: "left_option",
            modifiers: ["left_command"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          key_code: "a",
        },
        to_delayed_action: {
          to_if_canceled: [
            {
              key_code: "a",
            },
          ],
          to_if_invoked: [
            {
              key_code: "vk_none",
            },
          ],
        },
        to_if_alone: [
          {
            halt: true,
            key_code: "a",
          },
        ],
        to_if_held_down: [
          {
            halt: true,
            key_code: "left_shift",
          },
        ],
        type: "basic",
      },
      {
        from: {
          key_code: "s",
        },
        to_delayed_action: {
          to_if_canceled: [
            {
              key_code: "s",
            },
          ],
          to_if_invoked: [
            {
              key_code: "vk_none",
            },
          ],
        },
        to_if_alone: [
          {
            halt: true,
            key_code: "s",
          },
        ],
        to_if_held_down: [
          {
            halt: true,
            key_code: "left_control",
          },
        ],
        type: "basic",
      },
      {
        from: {
          key_code: "d",
        },
        to_delayed_action: {
          to_if_canceled: [
            {
              key_code: "d",
            },
          ],
          to_if_invoked: [
            {
              key_code: "vk_none",
            },
          ],
        },
        to_if_alone: [
          {
            halt: true,
            key_code: "d",
          },
        ],
        to_if_held_down: [
          {
            halt: true,
            key_code: "left_option",
          },
        ],
        type: "basic",
      },
      {
        from: {
          key_code: "f",
        },
        to_delayed_action: {
          to_if_canceled: [
            {
              halt: true,
              key_code: "f",
            },
          ],
          to_if_invoked: [
            {
              key_code: "vk_none",
            },
          ],
        },
        to_if_alone: [
          {
            halt: true,
            key_code: "f",
          },
        ],
        to_if_held_down: [
          {
            halt: true,
            key_code: "left_command",
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "j",
            },
            {
              key_code: "k",
            },
            {
              key_code: "l",
            },
            {
              key_code: "semicolon",
            },
          ],
        },
        to_if_held_down: [
          {
            key_code: "right_shift",
            modifiers: ["right_command", "right_option", "right_control"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "semicolon",
            },
            {
              key_code: "l",
            },
            {
              key_code: "k",
            },
          ],
        },
        to_if_held_down: [
          {
            key_code: "right_shift",
            modifiers: ["right_option", "right_control"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "semicolon",
            },
            {
              key_code: "k",
            },
            {
              key_code: "j",
            },
          ],
        },
        to_if_held_down: [
          {
            key_code: "right_shift",
            modifiers: ["right_command", "right_option"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "l",
            },
            {
              key_code: "k",
            },
            {
              key_code: "j",
            },
          ],
        },
        to_if_held_down: [
          {
            key_code: "right_control",
            modifiers: ["right_command", "right_option"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "semicolon",
            },
            {
              key_code: "l",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "semicolon",
          },
          {
            key_code: "l",
          },
        ],
        to_if_held_down: [
          {
            key_code: "right_shift",
            modifiers: ["right_control"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "l",
            },
            {
              key_code: "semicolon",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "l",
          },
          {
            key_code: "semicolon",
          },
        ],
        to_if_held_down: [
          {
            key_code: "right_shift",
            modifiers: ["right_control"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "semicolon",
            },
            {
              key_code: "k",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "semicolon",
          },
          {
            key_code: "k",
          },
        ],
        to_if_held_down: [
          {
            key_code: "right_shift",
            modifiers: ["right_option"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "k",
            },
            {
              key_code: "semicolon",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "k",
          },
          {
            key_code: "semicolon",
          },
        ],
        to_if_held_down: [
          {
            key_code: "right_shift",
            modifiers: ["right_option"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "semicolon",
            },
            {
              key_code: "j",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "semicolon",
          },
          {
            key_code: "j",
          },
        ],
        to_if_held_down: [
          {
            key_code: "right_shift",
            modifiers: ["right_command"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "j",
            },
            {
              key_code: "semicolon",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "j",
          },
          {
            key_code: "semicolon",
          },
        ],
        to_if_held_down: [
          {
            key_code: "right_shift",
            modifiers: ["right_command"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "l",
            },
            {
              key_code: "k",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "l",
          },
          {
            key_code: "k",
          },
        ],
        to_if_held_down: [
          {
            key_code: "right_control",
            modifiers: ["right_option"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "k",
            },
            {
              key_code: "l",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "k",
          },
          {
            key_code: "l",
          },
        ],
        to_if_held_down: [
          {
            key_code: "right_control",
            modifiers: ["right_option"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "l",
            },
            {
              key_code: "j",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "l",
          },
          {
            key_code: "j",
          },
        ],
        to_if_held_down: [
          {
            key_code: "right_control",
            modifiers: ["right_command"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "j",
            },
            {
              key_code: "l",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "j",
          },
          {
            key_code: "l",
          },
        ],
        to_if_held_down: [
          {
            key_code: "right_control",
            modifiers: ["right_command"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "k",
            },
            {
              key_code: "j",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "k",
          },
          {
            key_code: "j",
          },
        ],
        to_if_held_down: [
          {
            key_code: "right_option",
            modifiers: ["right_command"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "j",
            },
            {
              key_code: "k",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "j",
          },
          {
            key_code: "k",
          },
        ],
        to_if_held_down: [
          {
            key_code: "right_option",
            modifiers: ["right_command"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          key_code: "j",
        },
        to_delayed_action: {
          to_if_canceled: [
            {
              key_code: "j",
            },
          ],
          to_if_invoked: [
            {
              key_code: "vk_none",
            },
          ],
        },
        to_if_alone: [
          {
            halt: true,
            key_code: "j",
          },
        ],
        to_if_held_down: [
          {
            halt: true,
            key_code: "right_command",
          },
        ],
        type: "basic",
      },
      {
        from: {
          key_code: "k",
        },
        to_delayed_action: {
          to_if_canceled: [
            {
              key_code: "k",
            },
          ],
          to_if_invoked: [
            {
              key_code: "vk_none",
            },
          ],
        },
        to_if_alone: [
          {
            halt: true,
            key_code: "k",
          },
        ],
        to_if_held_down: [
          {
            halt: true,
            key_code: "right_option",
          },
        ],
        type: "basic",
      },
      {
        from: {
          key_code: "l",
        },
        to_delayed_action: {
          to_if_canceled: [
            {
              key_code: "l",
            },
          ],
          to_if_invoked: [
            {
              key_code: "vk_none",
            },
          ],
        },
        to_if_alone: [
          {
            halt: true,
            key_code: "l",
          },
        ],
        to_if_held_down: [
          {
            halt: true,
            key_code: "right_control",
          },
        ],
        type: "basic",
      },
      {
        from: {
          key_code: "semicolon",
        },
        to_delayed_action: {
          to_if_canceled: [
            {
              key_code: "semicolon",
            },
          ],
          to_if_invoked: [
            {
              key_code: "vk_none",
            },
          ],
        },
        to_if_alone: [
          {
            halt: true,
            key_code: "semicolon",
          },
        ],
        to_if_held_down: [
          {
            halt: true,
            key_code: "right_shift",
          },
        ],
        type: "basic",
      },
    ],
  },
];

fs.writeFileSync(
  "karabiner.json",
  JSON.stringify(
    {
      global: {
        show_in_menu_bar: false,
      },
      profiles: [
        {
          name: "Default",
          virtual_hid_keyboard: { keyboard_type_v2: "ansi" },
          selected: true,
          complex_modifications: {
            rules,
          },
        },
      ],
    },
    null,
    2
  )
);
