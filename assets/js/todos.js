// Check Off Specific Todos By Clicking
// $("li").click(function()
$("ul").on("click", "li", function()
{
	$(this).toggleClass("completed");
	// // console.log($(this).css("color"));
	// if ($(this).css("color") === "rgb(128, 128, 128)")
	// {
	// 	// turn it black
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});
	// }
	// else
	// {
	// 	// turn it gray
	// 	$(this).css({
	// 		color: "gray",
	// 		textDecoration: "line-through"
	// 	});
	// }
});

//Click on X to delete Todo
// $("span").click(function(event)
$("ul").on("click", "span", function()
{
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});
// $("ul").click(function(){
// 	alert("clicked on ul");
// });

// $("div").click(function(){
// 	alert("clicked div");
// });

// $("body").click(function(){
// 	alert("clicked body");
// });


$("input[type='text'").keypress(function(){
	if (event.which === 13)
	{
		// grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text").fadeToggle();
});

