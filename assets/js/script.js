$(document).ready(function(){
	$(".all-inputs").find(".dropdown-menu").find("li").click(function(){
		var t = $(this).find("a").html();
		$(".all-inputs").find("button").html(t);
	});
});