

$(document).ready(function(){

    // click event for weather and grabbing weather data in after button is clicked
     $('submitWeather').click(function(){

        var city = $("#city").val(); 

        if(city!=' '){
            $.ajax({
                 url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&APPID=f20741f8dbd707c14900e7828566a854",
                 type: "GET",
                 datatype:"JSON",
                 success: function(data){
                     var widget = show(data);
                     $("show").html(widget); 
                      $("#city").val(' '); 
                    
                 }
            });

        }else {
            $("#error").html("Field Needs A City");
        }

     });
});

// function that displays recently fetched data 

function show(data){
    return "<h2>Name: "+ data.city.name +"</h2>" + 
           "<h2>todays date: "+ +"</h2>" +
           "<h2>description: <img src= http://openweathermap.org/img/wn/ "+ data.weather.icon +" @2x.png> "+ data.weather.description +" </h2>" +
           "<h2>temperature: "+ data.temperature.value +"&deg;F</h2>" +
           "<h2>humidity: "+ data.humidity.value +"%</h2>" +
           "<h2>wind speed: "+ data.wind.speed.value +"m/s</h2>"; 
           
}

