// ----------------------------------------------
// buttons
function blendCtrl($scope) {
	$scope.modes = [
		{"mode":"normal"},
		{"mode":"multiply"},
		{"mode":"screen"},
		{"mode":"overlay"},
		{"mode":"darken"},
		{"mode":"lighten"},
		{"mode":"color-dodge"},
		{"mode":"color-burn"},
		{"mode":"hard-light"},
		{"mode":"soft-light"},
		{"mode":"difference"},
		{"mode":"exclusion"},
		{"mode":"hue"},
		{"mode":"saturation"},
		{"mode":"color"},
		{"mode":"luminosity"}
	];
}

// ----------------------------------------------
// init
$(document).on("ready", function() {

	$("button.mode").click(function() {
		var targetSelector = $(this).attr("data-target");
		var targetBlendMode = $(this).attr("data-blend-mode") + ", normal";
		var target = $(targetSelector);
		
		target.css("background-blend-mode", targetBlendMode); 
	});
	
	$("button.bgColor").click(function() {
		var targetSelector = $(this).attr("data-target");
		var targetBG = "url(img/bg1.jpg) no-repeat center center fixed, #" + $("#bgColor").val();
		var target = $(targetSelector);
		
		target.css("background", targetBG); 
		target.css("background-size", "cover");
	});
	
});