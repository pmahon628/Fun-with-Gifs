// Javascript events: interacting with HTML.
// Select Elements - Button
// Listen for events - Click I.e. - onKeyUp
// Do stuff - Action 
// Do this over and over and over and over. And then one more time for good measure
//inline block attr for gifs instead of block so they are next to eachother


$(document).ready(function(){ 

var animal = "dog";

$("button").on("click", function() {
    event.preventDefault();
     animal = $(this).attr("data-animal");    
     console.log(animal);
});

var request = $(this).attr("data-name"); 
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


//new buttons to show up on screen.

   var fave;
   var action;

     $("#addGif").on("click", function(){

    var queryURL = "https://api.giphy.com/v1/gifs/search?q="  +
    fave + "&api_key=tR2p1rGStRu3kI4VUov20ZukpGnuDh4B&limit=10";

    $.ajax({
    url: queryURL,
    method: "GET",
    })
         
     event.preventDefault();

     fave = $("#fave-input").val().trim();
    
     if (fave == ""){
      return false; 
    }
    action.push(fave);

    displayGifButtons();
    return false;
    });

//meant to go through topics and show buttons in "gifsview"
function displayButtons() {

    $("gifsView").empty();

    for (var i = 0; i < fave.length; i++) {

      var a = $('<button class="btn btn-secondary>');

      a.attr("id", "show");

      a.attr("data-search", fave[i]);

      a.text(fave[i]);

      $("#gifsView").append(a);
    }
  }

// function displayGifs(){
//     var fave = $(this).attr("data-name");
//     var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + fave + "&api_key=tR2p1rGStRu3kI4VUov20ZukpGnuDh4B&limit=10";
//     console.log(queryURL);
//     $.ajax({
//         url: queryURL,
//         method: 'GET'
    })
    (function(response) {
        console.log(response); // console test to make sure something returns
        $("#gifsView").empty(); // erasing anything in this div id so that it doesnt keep any from the previous click
        var results = response.data; //shows results of gifs
        if (results == ""){
          alert("There isn't a gif for this selected button");
        }
        for (var i=0; i<results.length; i++){


     var gifDiv = $("<div>"); //div for the gifs to go inside

    gifDiv.addClass("gifDiv");

    var gifRating = $("<p>").text("Rating: " + results[i].rating);
          
    gifDiv.appendTo(gifRating);
         
    var gifImage = $("<img>");
            
    gifImage.attr("data-animate",results[i].images.fixed_height_small.url); 
          
   gifImage.addClass("image");
          
    gifDiv.appendTo(gifImage);
          
   $("#gifsView").prependTo(gifDiv);
        }
    });



