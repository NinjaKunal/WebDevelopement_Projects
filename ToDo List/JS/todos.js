//Check of Speciific ToDos by Clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

//Click on trash icon to delete specific ToDos
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Enter a new ToDo
$("input[type='text']").keypress(function(event){
	if(event.which===13){
		//Extracting New ToDo text
		var ToDoText= $(this).val();
		//Clear the input field
		$(this).val("");
		//Create new li and add to ul
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+ ToDoText +"</li>")
	}

});

$("#plus").click(function(){
	$("input[type='text']").fadeToggle();
});