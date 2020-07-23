

$(document).ready(function () {
    var lastSearch;

    // click event for weather and grabbing weather data in after button is clicked
    $('#submitWeather').click(function () {

        var city = $("#city").val();

        if (city != ' ') {
          searchCity(city)

        } else {
            $("#error").html("Field Needs A City");
        }

    });
});

// function that displays current weather conditions

function searchCity(city){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&APPID=f20741f8dbd707c14900e7828566a854",
        method: "GET",
        datatype: "JSON",
        success: function (data) {
            var widget = show(data);
            console.log
            $("#show").html(widget);
            $("#city").val(' ');

            lastSearch = JSON.parse(localStorage.getItem("lastSearch"));
            if (!lastSearch) {
                lastSearch = []
            }

            if (lastSearch.indexOf(city) === -1) {
                lastSearch.push(city)
                console.log(lastSearch)
                localStorage.setItem("lastSearch", JSON.stringify(lastSearch));
                //   localStorage.setItem("lastSearch", JSON.Stringify(response))
            }
            $.ajax({
                url: 'api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=f20741f8dbd707c14900e7828566a854',
                method:"GET",
                datatype: "JSON",
                success: function (data) {

                    
                    // logic for the second API call here
                }
            });
        }
    });

    

}

function show(data) {
    console.log(data);
    return "<h2>City: " + data.name + "</h2>" +
        "<h2>Today's date:" + new Date().toLocaleDateString() + "</h2>" +
        "<h2> Condition:<img src= http://openweathermap.org/img/w/" + data.weather[0].icon + ".png></img></h2>" +
        "<h2>temperature: " + data.main.temp + "&deg;F</h2>" +
        "<h2>humidity: " + data.main.humidity + "%</h2>" +
        "<h2>wind speed: " + data.wind.speed + "m/s</h2>";

}

// function showHistory(){
// lastSearch= JSON.parse(localStorage.getItem("lastSearch"));

// for (var i=0; i<lastSearch.length;i++){
//     $("#history").append("<button class='btnhist'>"+ lastSearch[i]+"</button>")
// }
// $(".btnhist").on("click", function(){

//     console.log("clicked: ", this)
// searchCity($(this).text())
//     // search for the city get the city inside the button and call searchcity()
// })

// }

// showHistory()

