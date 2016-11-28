var appendCats = 
	$.ajax({
	dataType: "json",
	url: "https://ga-cat-rescue.herokuapp.com/api/cats",
	success: function(data){
	var list = $("ul#cats");
		for (var i=0; i<data.length; i++){
			list.append("<li>"+data[i].name+"</li>");
		}
	}
});

var addCats = 
	$.ajax({
	dataType: "json",
	url: "https://ga-cat-rescue.herokuapp.com/api/cats",
	success: function(data){
	var newName = $("#cat-name").val();
	var list = $("ul#cats");
	list.append("<li>"+newName+"</li>");
	}
});


