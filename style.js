$(document).ready(function(){
	$("button").click(function(){
		$("#dp_menu > ul").toggle(500);
		$("#dp_menu").toggleClass("show");
	});
});