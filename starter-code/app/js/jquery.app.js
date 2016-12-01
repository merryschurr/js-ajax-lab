var adoptACat = $.get("https://ga-cat-rescue.herokuapp.com/api/cats").done(function(adoptACat) {
    
	var getCat = document.getElementById("cats");
        
    function adoptACatDance(){
        for (i = 0; i < adoptACatAll.length; i++ ) {
        var li = document.createElement("li");
        var tn = document.createTextNode(adoptACatAll[i]); 
        getCat.appendChild(li);
        li.appendChild(tn);
        }
    }

    var adoptACatParsed = JSON.parse(adoptACat);
    var adoptACatAll = [];
       for (var i = 0; i < adoptACatParsed.length; i++) {
        adoptACatAll.push(adoptACatParsed[i].name);
    }
    
    adoptACatDance();

$("#new-cat").click(function(e) {

    var name = $('#cat-name').val();
    var note = $('#cat-note').val();

    $.ajax ({
    	type: "POST",
        url: "https://ga-cat-rescue.herokuapp.com/api/cats",
        data: JSON.stringify({ 'name' : name, 'note' : note}),
        dataType: "json"
        }).done(function(addCats) {
        });
    });

    e.preventDefault();

});