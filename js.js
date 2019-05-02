// Javascript events: interacting with HTML.
// Select Elements - Button
// Listen for events - Click I.e. - onKeyUp
// Do stuff - Action 
// Do this over and over and over and over. And then one more time for good measure

$(document).ready(function() {
    
    var animal;

$("button").on("click", function() {
     animal = $(this).attr("data-animal");    
     console.log(animal);
});

  var queryURL = "https://api.giphy.com/v1/gifs/search?q="  +
    animal + "&api_key=tR2p1rGStRu3kI4VUov20ZukpGnuDh4B&limit=10";

    $.ajax({
    url: queryURL,
    method: "GET",
    })

    .then(function(response){
        console.log(queryURL);
        console.log(response);
    
    var results = response.data;

    for (var i = 0; i < results.length; i++) {

    var gifsDiv = $("<div>");

     var favesImage = $("<img>");

    favesImage.attr("src", results[i].images.fixed_height.url);

    gifsDiv.append(favesImage);

    $("#gifs-appear-here").prepend(gifsDiv);
    }
    });   
});

// $(document).ready(function(){

//     var object;

//   $("input")
//       var value =(this).val();
//       $("input").text(value);
//   })
  