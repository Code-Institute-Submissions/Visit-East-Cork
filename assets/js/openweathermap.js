$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Cork&units=metric&APPID=e36184944b6d6482292bede0ad3a5018", function (data) {
    
    let icon = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";

    let temp = Math.floor(data.main.temp);
    let weather = data.weather[0].main;
    let temp_max = Math.floor(data.main.temp_max);
    let temp_min = Math.floor(data.main.temp_min);

    $(".icon").attr("src", icon);
    $(".weather").append(weather);
    $(".temperature").append(temp);
    $(".temp_max").append(temp_max);
    $(".temp_min").append(temp_min);
})
.fail(function(jqxhr, textStatus, error) {
    let err = textStatus + ", " +error;
    console.log( "Request Failed " + err );
});


