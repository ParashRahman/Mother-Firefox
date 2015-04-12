var data = require("sdk/self").data;
/**
var text_entry = require("sdk/panel").Panel({
    contentURL: data.url("text-entry.html"),
    contentScriptFile: data.url("get-text.js")
});

var buttons = require('sdk/ui/button/action');
**/
var tabs = require("sdk/tabs");
var tmr = require("sdk/timers");
/**var prefSet = require("sdk/simple-prefs").prefs;**/

var pageMod = require("sdk/page-mod");

exports.main = function() {
    tmr.setInterval( openTab, 1200000 );
/**
    pageMod.PageMod({
	include: ["*"],
	contentScriptWhen: 'end',
	contentScript: [data.url("html/prefscript.js")],
	onAttach: function (worker) {
	    var tI = prefSet.prefs.timeInterval;
	    var d1 = prefSet.prefs.description1;
	    var d2 = prefSet.prefs.description2;
	    var tP = prefSet.prefs.thePicture;
	    var bC = prefSet.prefs.bgColor;

	    worker.port.emit( "get-prefs", [tI, d1, d2, tP, bC] );

	    function onPrefChange(prefName){
		let payload = [prefName, prefSet.prefs[prefName]];
		worker.port.emit("prefchange", payload);
	    }

	    prefSet.on("timeInterval", onPrefChange);
	    prefSet.on("description1", onPrefChange);
	    prefSet.on("description2", onPrefChange);
	    prefSet.on("thePicture", onPrefChange);
	    prefSet.on("bgColor", onPrefChange);
	}
    });
**/
}
/**
var menuitem = require("menuitems").Menuitem({
    id: "clickme",
    menuid: "menu_ToolsPopup",
    label: "Click Me!",
    onCommand: handleClick2,
    insertbefore: "menu_pageInfo"
});
**/
/**
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
**/
function handleClick2(state) {
    console.log("clicked");
    tabs.open("../data/html/mother.html");
}

function openTab(state){
    tabs.open("../data/html/mother.html");
}
/**
text_entry.on("show", function() {
    text_entry.port.emit("show");
});

text_entry.port.on("text-entered", function(text) {
    console.log(text);
    text_entry.hide();
});
**/