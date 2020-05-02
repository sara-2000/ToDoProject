//check out lis by clicking
$("ul").on("click" , "li" , function(){
	$(this).toggleClass("completed");
});

//click on X to delete ToDo
$("ul").on("click" ,"span" , function(event){
	$(this).parent().fadeOut(500 , function(){
		$(this).remove();
	})
	event.stopPropagation();
});

//adding todo :- listener on the input
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input and clearing the value
		var newTodo = $(this).val();
		$(this).val("");
		//append to the li in ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newTodo + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});