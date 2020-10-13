  function loadMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: {
            lat: 51.9143,
            lng: -8.1726,
        },
    });
    $(".towns").click(function () {
        
        map.setCenter(new google.maps.LatLng(this.dataset.lat, this.dataset.lng));
        map.setZoom(12);
    });
    const towns = [
        ["midleton", 51.9143, -8.1726],
        ["ballycotton", 51.8299, -8.0098],
        ["castlemartyr", 51.9119, -8.0535],
        ["cobh", 51.8503, -8.2943],
        ["youghal", 51.9543, -7.8472],
        
    ];

    let bounds = new google.maps.LatLngBounds();
    for (i = 0; i < towns.length; i++) {
        var marker = new google.maps.Marker({
            position: {
                lat: towns[i][1],
                lng: towns[i][2],
            },
            title: towns[i][0],
            map: map,
        });
        bounds.extend(marker.getPosition());
    }
    map.fitBounds(bounds);
}



