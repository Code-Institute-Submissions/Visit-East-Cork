//   JavaScript as per Google Maps API Documentation and course content

  function loadMap2() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: {
            lat: 51.9143,
            lng: -8.1726,
        },
    });

// JavaScript to add town markers to map and buttons that allow the map to jump to towns
    // $(".towns").click(function () {
        
    //     map.setCenter(new google.maps.LatLng(this.dataset.lat, this.dataset.lng));
    //     map.setZoom(12);
    // });
    // const towns = [
    //     ["midleton", 51.9143, -8.1726],
    //     ["ballycotton", 51.8299, -8.0098],
    //     ["castlemartyr", 51.9119, -8.0535],
    //     ["cobh", 51.8503, -8.2943],
    //     ["youghal", 51.9543, -7.8472],
        
    // ];

    // let bounds = new google.maps.LatLngBounds();
    // for (i = 0; i < towns.length; i++) {
    //     var marker = new google.maps.Marker({
    //         position: {
    //             lat: towns[i][1],
    //             lng: towns[i][2],
    //         },
    //         title: towns[i][0],
    //         map: map,
    //     });
    //     bounds.extend(marker.getPosition());
    // }
    // map.fitBounds(bounds);


// Add Search Bar to Map that allows users to search for hotels, attractions and restaurants

 var input = document.getElementById("search");
  var searchBox = new google.maps.places.SearchBox(input);

  map.addListener("bounds_changed", function () {
    searchBox.setBounds(map.getBounds());
  });

  var markersPlaces = [];

  searchBox.addListener("places_changed", function () {
    var places = searchBox.getPlaces();

    if (places.length == 0) return;

    markersPlaces.forEach(function (m) {
      m.setMap(null);
    });
    

    var bounds = new google.maps.LatLngBounds();
    places.forEach(function (p) {
      if (!p.geometry) return;

      markersPlaces.push(
        new google.maps.Marker({
          map: map,
          title: p.name,
          position: p.geometry.location,
        })
      );

      if (p.geometry.viewport) bounds.union(p.geometry.viewport);
      else bounds.extend(p.geometry.location);
    });

    map.fitBounds(bounds);
  });
}
 
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
function loadMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.9143, lng: -8.1726 },
    zoom: 10,
  });
  const input = document.getElementById("search");
  const autocomplete = new google.maps.places.Autocomplete(input);
  // Bind the map's bounds (viewport) property to the autocomplete object,
  // so that the autocomplete requests use the current map bounds for the
  // bounds option in the request.
  autocomplete.bindTo("bounds", map);
  // Set the data fields to return when the user selects a place.
  autocomplete.setFields(["address_components", "geometry", "icon", "name"]);
  const infowindow = new google.maps.InfoWindow();
  const infowindowContent = document.getElementById("infowindow-content");
  infowindow.setContent(infowindowContent);
  const marker = new google.maps.Marker({
    map,
    anchorPoint: new google.maps.Point(0, -29),
  });
  autocomplete.addListener("place_changed", () => {
    infowindow.close();
    marker.setVisible(false);
    const place = autocomplete.getPlace();

    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17); // Why 17? Because it looks good.
    }
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);
    let address = "";

    if (place.address_components) {
      address = [
        (place.address_components[0] &&
          place.address_components[0].short_name) ||
          "",
        (place.address_components[1] &&
          place.address_components[1].short_name) ||
          "",
        (place.address_components[2] &&
          place.address_components[2].short_name) ||
          "",
      ].join(" ");
    }
    infowindowContent.children["place-icon"].src = place.icon;
    infowindowContent.children["place-name"].textContent = place.name;
    infowindowContent.children["place-address"].textContent = address;
    infowindow.open(map, marker);
  });

}