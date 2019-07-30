// ----------------------------------------------
// Globals
var boxes = [];
var buttons = [];
var overlay = null;
//var background = null;

// ----------------------------------------------
// registerBoxes()
function registerBoxes(selector) {
	
}
// ----------------------------------------------
// bindButtons()
function bindButtons() {	
	buttons.each(function() {
		$(this).bindButton();
	});
}
// ----------------------------------------------
// jquery.bindButton()
$.fn.bindButton = function() {
	var targetSelector = this.attr("data-target");
	var target = $(targetSelector);
	
	this.click(function() {
		overlay.toggle();
		$("body").toggleClass("effect");
		if ($(this).hasClass('ok')) { clearEffects(); } 
		else { target.toggleEffect("effect"); }
	});
}
// ----------------------------------------------
// jquery.toggleEffect()
$.fn.toggleEffect = function() {
	clearEffects();
	this.toggleClass("effect");
}
// ----------------------------------------------
// clearEffects()
function clearEffects() {
	boxes.each(function() {
		$(this).removeClass("effect");
	});
}

// ----------------------------------------------
// init	
$(document).on("ready", function() {
	boxes = $(".box");
	buttons = $("button");
	//background = $("#background");
	overlay = $("#overlay");
	bindButtons();
});