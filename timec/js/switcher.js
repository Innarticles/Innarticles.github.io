jQuery(document).ready(function($) {
	$(".red-blue" ).click(function(){
		$("#colors" ).attr("href", "skins/red-blue/blue.css" );
		$.cookie("css", "skins/red-blue/blue.css");
		return false;
	});
	$(".orange-gray" ).click(function(){
		$("#colors" ).attr("href", "skins/orange-gray/orange-gray.css" );
		$.cookie("css", "skins/orange-gray/orange-gray.css");
		return false;
	});
	$(".orange-turquoise" ).click(function(){
		$("#colors" ).attr("href", "skins/orange-turquoise/orange-turquoise.css" );
		$.cookie("css", "skins/orange-turquoise/orange-turquoise.css");
		return false;
	});
	$(".green-gray" ).click(function(){
		$("#colors" ).attr("href", "skins/green-gray/green-gray.css" );
		$.cookie("css", "skins/green-gray/green-gray.css");
		return false;
	});
	$(".gray-purple" ).click(function(){
		$("#colors" ).attr("href", "skins/gray-purple/gray-purple.css" );
		$.cookie("css", "skins/gray-purple/gray-purple.css");
		return false;
	});	
	$(".gray-green" ).click(function(){
		$("#colors" ).attr("href", "skins/gray-green/gray-green.css" );
		$.cookie("css", "skins/gray-green/gray-green.css");
		return false;
	});	
	$(".gray-pink" ).click(function(){
		$("#colors" ).attr("href", "skins/gray-pink/gray-pink.css" );
		$.cookie("css", "skins/gray-pink/gray-pink.css");
		return false;
	});	
	$(".gray-yellow" ).click(function(){
		$("#colors" ).attr("href", "skins/gray-yellow/gray-yellow.css" );
		$.cookie("css", "skins/gray-yellow/gray-yellow.css");
		return false;
	});	
	$(".green-blue" ).click(function(){
		$("#colors" ).attr("href", "skins/green-blue/green-blue.css" );
		$.cookie("css", "skins/green-blue/green-blue.css");
		return false;
	});	
	$(".purple-lemon" ).click(function(){
		$("#colors" ).attr("href", "skins/purple-lemon/purple-lemon.css" );
		$.cookie("css", "skins/purple-lemon/purple-lemon.css");
		return false;
	});	
	$(".yellow-purple" ).click(function(){
		$("#colors" ).attr("href", "skins/yellow-purple/yellow-purple.css" );
		$.cookie("css", "skins/yellow-purple/yellow-purple.css");
		return false;
	});	
	$(".orange-green" ).click(function(){
		$("#colors" ).attr("href", "skins/orange-green/orange-green.css" );
		$.cookie("css", "skins/orange-green/orange-green.css");
		return false;
	});	

	
	
	$("#style-switcher h2 a").click(function(e){
		e.preventDefault();
		var div = $("#style-switcher");
		console.log(div.css("left"));
		if (div.css("left") === "-155px") {
			$("#style-switcher").animate({
				left: "0px"
			}); 
		} else {
			$("#style-switcher").animate({
				left: "-155px"
			});
		}
	})
	if($.cookie("css") != undefined) {$("#colors" ).attr("href", $.cookie("css") );}
});