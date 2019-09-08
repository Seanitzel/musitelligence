(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{283:function(t,e,a){"use strict";a.r(e);var n=a(38),r=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"instrument"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instrument","aria-hidden":"true"}},[t._v("#")]),t._v(" Instrument")]),t._v(" "),a("h2",{attrs:{id:"classes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#classes","aria-hidden":"true"}},[t._v("#")]),t._v(" Classes")]),t._v(" "),a("dl",[a("dt",[a("a",{attrs:{href:"#Instrument"}},[t._v("Instrument")])]),t._v(" "),a("dd",[a("p",[t._v("Represents an abstract instrument with notes.\n￿Should be used for creating new instruments.")])])]),t._v(" "),a("h2",{attrs:{id:"members"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#members","aria-hidden":"true"}},[t._v("#")]),t._v(" Members")]),t._v(" "),a("dl",[a("dt",[a("a",{attrs:{href:"#name"}},[t._v("name")]),t._v(" : "),a("code",[t._v("string")])]),t._v(" "),a("dd",[a("p",[t._v("Returns the instrument's name.")])]),t._v(" "),a("dt",[a("a",{attrs:{href:"#server"}},[t._v("server")]),t._v(" ⇒ "),a("code",[t._v("string")])]),t._v(" "),a("dd",[a("p",[t._v("The server to load the audio files for the instrument from,\ncan be overridden.")])]),t._v(" "),a("dt",[a("a",{attrs:{href:"#instrumentPath"}},[t._v("instrumentPath")]),t._v(" ⇒ "),a("code",[t._v("string")])]),t._v(" "),a("dd",[a("p",[t._v("Returns string to be used when loading audio files from a specific path.\nCan be easily over-riden for a specific intrument by using the lib to set the instruments name.")])])]),t._v(" "),a("h2",{attrs:{id:"functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functions","aria-hidden":"true"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),a("dl",[a("dt",[a("a",{attrs:{href:"#getTonePlayers"}},[t._v("getTonePlayers()")]),t._v(" ⇒ "),a("code",[t._v("Tone.Players")])]),t._v(" "),a("dd"),t._v(" "),a("dt",[a("a",{attrs:{href:"#toMaster"}},[t._v("toMaster(context)")])]),t._v(" "),a("dd",[a("p",[t._v("Connects audio node to master.")])]),t._v(" "),a("dt",[a("a",{attrs:{href:"#init"}},[t._v("init(base, range)")])]),t._v(" "),a("dd",[a("p",[t._v("Should be called from any child class's constructor.\nInitializes all the notes and audio players for the instrument.")])]),t._v(" "),a("dt",[a("a",{attrs:{href:"#getKey"}},[t._v("getKey(note)")])]),t._v(" "),a("dd",[a("p",[t._v("Calculates a specific note's key.")])]),t._v(" "),a("dt",[a("a",{attrs:{href:"#normalizeNoteStr"}},[t._v("normalizeNoteStr(noteStr)")]),t._v(" ⇒ "),a("code",[t._v("String")])]),t._v(" "),a("dd",[a("p",[t._v("Turns a string representing a note to upper case.")])]),t._v(" "),a("dt",[a("a",{attrs:{href:"#generatePath"}},[t._v("generatePath(fileName)")])]),t._v(" "),a("dd",[a("p",[t._v("Generates Tone player for some audio.")])]),t._v(" "),a("dt",[a("a",{attrs:{href:"#setPlayer"}},[t._v("setPlayer(key, note)")])]),t._v(" "),a("dd",[a("p",[t._v("Add a player for a note.")])]),t._v(" "),a("dt",[a("a",{attrs:{href:"#getPlayer"}},[t._v("getPlayer(note)")]),t._v(" ⇒ "),a("code",[t._v("Tone.Player")])]),t._v(" "),a("dd",[a("p",[t._v("Get a note's player.")])]),t._v(" "),a("dt",[a("a",{attrs:{href:"#note"}},[t._v("note(note)")]),t._v(" ⇒ "),a("code",[t._v("Note")])]),t._v(" "),a("dd",[a("p",[t._v("Gets a string consisting of:")]),t._v(" "),a("ol",[a("li",[t._v("The pitch CLASS")]),t._v(" "),a("li",[t._v("The octave")])])]),t._v(" "),a("dt",[a("a",{attrs:{href:"#hasNote"}},[t._v("hasNote(note)")]),t._v(" ⇒ "),a("code",[t._v("boolean")])]),t._v(" "),a("dd",[a("p",[t._v("Whether an instrument has a note.")])]),t._v(" "),a("dt",[a("a",{attrs:{href:"#play"}},[t._v("play(note, [duration])")])]),t._v(" "),a("dd",[a("p",[t._v("Play sound, optionally for a duration.")])]),t._v(" "),a("dt",[a("a",{attrs:{href:"#toString"}},[t._v("toString()")]),t._v(" ⇒ "),a("code",[t._v("string")])]),t._v(" "),a("dd",[a("p",[t._v("Returns the name of the instrument.")])])]),t._v(" "),a("p",[a("a",{attrs:{name:"Instrument"}})]),t._v(" "),a("h2",{attrs:{id:"instrument-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instrument-2","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("em",[t._v("Instrument")])]),t._v(" "),a("p",[t._v("Represents an abstract instrument with notes.\n￿Should be used for creating new instruments.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": global abstract class"),a("br"),t._v(" "),a("a",{attrs:{name:"name"}})]),t._v(" "),a("h2",{attrs:{id:"name-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name-string","aria-hidden":"true"}},[t._v("#")]),t._v(" name : "),a("code",[t._v("string")])]),t._v(" "),a("p",[t._v("Returns the instrument's name.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": global variable"),a("br"),t._v(" "),a("a",{attrs:{name:"server"}})]),t._v(" "),a("h2",{attrs:{id:"server-⇒-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-⇒-string","aria-hidden":"true"}},[t._v("#")]),t._v(" server ⇒ "),a("code",[t._v("string")])]),t._v(" "),a("p",[t._v("The server to load the audio files for the instrument from,\ncan be overridden.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": global variable"),a("br"),t._v(" "),a("a",{attrs:{name:"instrumentPath"}})]),t._v(" "),a("h2",{attrs:{id:"instrumentpath-⇒-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instrumentpath-⇒-string","aria-hidden":"true"}},[t._v("#")]),t._v(" instrumentPath ⇒ "),a("code",[t._v("string")])]),t._v(" "),a("p",[t._v("Returns string to be used when loading audio files from a specific path.\nCan be easily over-riden for a specific intrument by using the lib to set the instruments name.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": global variable"),a("br"),t._v(" "),a("strong",[t._v("Example")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("lib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Piano'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MyUltimatePiano'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Piano will now load audio files from the")]),t._v("\n    server"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("MyUltimatePiano\n")])])]),a("p",[a("a",{attrs:{name:"getTonePlayers"}})]),t._v(" "),a("h2",{attrs:{id:"gettoneplayers-⇒-tone-players"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gettoneplayers-⇒-tone-players","aria-hidden":"true"}},[t._v("#")]),t._v(" getTonePlayers() ⇒ "),a("code",[t._v("Tone.Players")])]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": global function"),a("br"),t._v(" "),a("a",{attrs:{name:"toMaster"}})]),t._v(" "),a("h2",{attrs:{id:"tomaster-context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tomaster-context","aria-hidden":"true"}},[t._v("#")]),t._v(" toMaster(context)")]),t._v(" "),a("p",[t._v("Connects audio node to master.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": global function")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("context")]),t._v(" "),a("td",[t._v("File context instance.")])])])]),t._v(" "),a("p",[a("a",{attrs:{name:"init"}})]),t._v(" "),a("h2",{attrs:{id:"init-base-range"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-base-range","aria-hidden":"true"}},[t._v("#")]),t._v(" init(base, range)")]),t._v(" "),a("p",[t._v("Should be called from any child class's constructor.\nInitializes all the notes and audio players for the instrument.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": global function")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("base")])]),t._v(" "),a("tr",[a("td",[t._v("range")])])])]),t._v(" "),a("p",[a("a",{attrs:{name:"getKey"}})]),t._v(" "),a("h2",{attrs:{id:"getkey-note"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getkey-note","aria-hidden":"true"}},[t._v("#")]),t._v(" getKey(note)")]),t._v(" "),a("p",[t._v("Calculates a specific note's key.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": global function")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),t._v(" "),a("th",[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("note")]),t._v(" "),a("td",[a("code",[t._v("Note")])])])])]),t._v(" "),a("p",[a("a",{attrs:{name:"normalizeNoteStr"}})]),t._v(" "),a("h2",{attrs:{id:"normalizenotestr-notestr-⇒-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#normalizenotestr-notestr-⇒-string","aria-hidden":"true"}},[t._v("#")]),t._v(" normalizeNoteStr(noteStr) ⇒ "),a("code",[t._v("String")])]),t._v(" "),a("p",[t._v("Turns a string representing a note to upper case.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": global function")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("noteStr")])])])]),t._v(" "),a("p",[a("a",{attrs:{name:"generatePath"}})]),t._v(" "),a("h2",{attrs:{id:"generatepath-filename"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generatepath-filename","aria-hidden":"true"}},[t._v("#")]),t._v(" generatePath(fileName)")]),t._v(" "),a("p",[t._v("Generates Tone player for some audio.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": global function")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),t._v(" "),a("th",[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("fileName")]),t._v(" "),a("td",[a("code",[t._v("String")])])])])]),t._v(" "),a("p",[a("a",{attrs:{name:"setPlayer"}})]),t._v(" "),a("h2",{attrs:{id:"setplayer-key-note"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setplayer-key-note","aria-hidden":"true"}},[t._v("#")]),t._v(" setPlayer(key, note)")]),t._v(" "),a("p",[t._v("Add a player for a note.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": global function")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),t._v(" "),a("th",[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("key")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("note")]),t._v(" "),a("td",[a("code",[t._v("Note")])])])])]),t._v(" "),a("p",[a("a",{attrs:{name:"getPlayer"}})]),t._v(" "),a("h2",{attrs:{id:"getplayer-note-⇒-tone-player"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getplayer-note-⇒-tone-player","aria-hidden":"true"}},[t._v("#")]),t._v(" getPlayer(note) ⇒ "),a("code",[t._v("Tone.Player")])]),t._v(" "),a("p",[t._v("Get a note's player.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": global function")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),t._v(" "),a("th",[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("note")]),t._v(" "),a("td",[a("code",[t._v("String")])])])])]),t._v(" "),a("p",[a("a",{attrs:{name:"note"}})]),t._v(" "),a("h2",{attrs:{id:"note-note-⇒-note"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#note-note-⇒-note","aria-hidden":"true"}},[t._v("#")]),t._v(" note(note) ⇒ "),a("code",[t._v("Note")])]),t._v(" "),a("p",[t._v("Gets a string consisting of:")]),t._v(" "),a("ol",[a("li",[t._v("The pitch CLASS")]),t._v(" "),a("li",[t._v("The octave")])]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": global function")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),t._v(" "),a("th",[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("note")]),t._v(" "),a("td",[a("code",[t._v("String")])])])])]),t._v(" "),a("p",[a("strong",[t._v("Example")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" someInstrument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("note")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// C is now a Note object")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("interval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// D3")]),t._v("\n")])])]),a("p",[a("a",{attrs:{name:"hasNote"}})]),t._v(" "),a("h2",{attrs:{id:"hasnote-note-⇒-boolean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hasnote-note-⇒-boolean","aria-hidden":"true"}},[t._v("#")]),t._v(" hasNote(note) ⇒ "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("Whether an instrument has a note.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": global function")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),t._v(" "),a("th",[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("note")]),t._v(" "),a("td",[a("code",[t._v("string")])])])])]),t._v(" "),a("p",[a("a",{attrs:{name:"play"}})]),t._v(" "),a("h2",{attrs:{id:"play-note-duration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#play-note-duration","aria-hidden":"true"}},[t._v("#")]),t._v(" play(note, [duration])")]),t._v(" "),a("p",[t._v("Play sound, optionally for a duration.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": global function")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("note")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("[duration]")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("\"'10'\"")])])])])]),t._v(" "),a("p",[a("a",{attrs:{name:"toString"}})]),t._v(" "),a("h2",{attrs:{id:"tostring-⇒-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tostring-⇒-string","aria-hidden":"true"}},[t._v("#")]),t._v(" toString() ⇒ "),a("code",[t._v("string")])]),t._v(" "),a("p",[t._v("Returns the name of the instrument.")]),t._v(" "),a("p",[a("strong",[t._v("Kind")]),t._v(": global function")])])},[],!1,null,null,null);e.default=r.exports}}]);