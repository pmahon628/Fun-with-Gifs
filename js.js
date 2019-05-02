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

function addNewButton(){
    $("#addGif").on("click", function(){
    var action = $("#action-input").val().trim();
    
    if (action == ""){
      return false; 
    }
    actions.push(action);


    displayGifButtons();
    return false;
    });
}

function displayGifs(){
    var action = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +  + "&api_key=dc6zaTOxFJmzC&limit=10";
    console.log(queryURL); // displays the constructed url
    $.ajax({
        url: queryURL,
        method: 'GET'
    })
    .done(function(response) {
        console.log(response); // console test to make sure something returns
        $("#gifsView").empty(); // erasing anything in this div id so that it doesnt keep any from the previous click
        var results = response.data; //shows results of gifs
        if (results == ""){
          alert("There isn't a gif for this selected button");
        }
        for (var i=0; i<results.length; i++){


     var gifDiv = $("<div>"); //div for the gifs to go inside

      gifDiv.addClass("gifDiv");

 // pulling rating of gif
    
 var gifRating = $("<p>").text("Rating: " + results[i].rating);
          
 gifDiv.append(gifRating);
         
 // pulling gif
    var gifImage = $("<img>");
            
    gifImage.attr("data-animate",results[i].images.fixed_height_small.url); // animated image
          
   gifImage.addClass("image");
          
    gifDiv.append(gifImage);
          
   $("#gifsView").prepend(gifDiv);
        }
    });
}