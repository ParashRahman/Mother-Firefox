var data = require("sdk/self").data;
var text_entry = require("sdk/panel").Panel({
    contentURL: data.url("text-entry.html"),
    contentScriptFile: data.url("get-text.js")
});
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var tmr = require('timer');

exports.main = function() {
    console.log("whassup");
    tmr.setInterval( handleClick2, 10000 );
}

var menuitem = require("menuitems").Menuitem({
    id: "clickme",
    menuid: "menu_ToolsPopup",
    label: "Click Me!",
    onCommand: handleClick2,
    insertbefore: "menu_pageInfo"
});

var button = buttons.ActionButton({
    id: "show-panel",
    label: "Show Panel",
    icon: {
	"16": "./icon-16.png",
	"32": "./icon-32.png",
	"64": "./icon-64.png"
    },
    onClick: handleClick
});

function handleClick(state) {
    text_entry.show();
}

function handleClick2(state) {
    console.log("clicked");
    tabs.open("../data/html/mother.html");
}

function openTab(){
    tabs.open("../data/html/mother.html");
}

text_entry.on("show", function() {
    text_entry.port.emit("show");
});

text_entry.port.on("text-entered", function(text) {
    console.log(text);
    text_entry.hide();
});