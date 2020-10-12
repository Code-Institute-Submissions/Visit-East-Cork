  function loadMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: {
            lat: 51.9143,
            lng: -8.1726,
        },
    });
}