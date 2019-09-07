// Javascript events: interacting with HTML.
// Select Elements - Button
// Listen for events - Click I.e. - onKeyUp
// Do stuff - Action 
// Do this over and over and over and over. And then one more time for good measure
//inline block attr for gifs instead of block so they are next to eachother


$(document).ready(function(){ 

var animal = ;
var apiKey = "ONPUIGAU3VNI";
var searchTerm  = "dog";

$("button").on("click", function() {
    event.preventDefault();
     animal = $(this).attr("data-animal");    
     console.log(animal);
});

var request = $(this).attr("data-name"); 
var search_url = "https://api.tenor.com/v1/search?tag=" + search_term + "&key=" +
apiKey + "&limit=" + lmt;

httpGetAsync(search_url,tenorCallback_search);

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

// url Async requesting function
function httpGetAsync(theUrl, callback)
{
// create the request object
  var xmlHttp = new XMLHttpRequest();
// set the state change callback to capture when the response comes in
    xmlHttp.onreadystatechange = function()
    {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
            callback(xmlHttp.responseText);
        }
    }
     // open as a GET call, pass in the url and set async = True
    xmlHttp.open("GET", theUrl, true);
 // call send with no params as they were passed in on the url string
    xmlHttp.send(null);
return;
}

// callback for the top 8 GIFs of search
function tenorCallback_search(responsetext)
{
    // parse the json response
    var response_objects = JSON.parse(responsetext);

    top_10_gifs = response_objects["results"];

    // load the GIFs -- for our example we will load the first GIFs preview size (nanogif) and share size (tinygif)

    document.getElementById("preview_gif").src = top_10_gifs[0]["media"][0]["nanogif"]["url"];

    document.getElementById("share_gif").src = top_10_gifs[0]["media"][0]["tinygif"]["url"];

    return;

}

