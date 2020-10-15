//Code as instructed via Google Maps & Course Material

function loadMap() {
  var options = {
    zoom: 10,
    center: { lat: 51.9143, lng: -8.1726 },
  };


// Code as instructed by Google Documentation along with following the YouTube Tutorial by Traversy Media. Link in README

  var map = new google.maps.Map(document.getElementById("map"), options);

  var markers = [
    {
      latlong: { lat: 51.9004, lng: -8.2923 }, // Fota Island Resort
      iconImage: "assets/images/hotel.png",
      content: "<img src='assets/images/fotaresortsm.jpg'><h4>Fota Island Resort</h4><a href='index.html#windmills-info'>Click here to learn more about Fota Island Resort</a>",
    },
    {
      latlong: { lat: 51.9102, lng: -8.0538 }, //Castlemartyr Resort
      iconImage: "assets/images/hotel.png",
      content: "<img src='assets/images/map-images/lighthouse_150px.jpg'><h4>Armenistis Lighthouse</h4><a href='index.html#armenistis-info'>Click here to learn more about Armenistis Lighthouse</a>",
    },
    {
      latlong: { lat:  51.8651, lng: -8.0750 }, //Ballymaloe House
      iconImage: "assets/images/hotel.png",
      content: "<img src='assets/images/map-images/little_venice_150px.jpg'><h4>Little Venice</h4><a href='index.html#little-venice-info'>Click here to learn more about Little Venice</a>",
    },
    {
      latlong: { lat: 51.8720, lng: -8.0160 }, //Garryvoe Hotel
      iconImage: "assets/images/hotel.png",
      content: "<img src='assets/images/map-images/church_150px.jpg'><h4>Panagia Paraportiani</h4><a href='index.html#panagia-info'>Click here to learn more about Panagia Paraportiani</a>",
    },
    {
      latlong: { lat: 51.8345, lng: -8.2862 }, // Spike Island
      iconImage: "assets/images/historical.png",
      content: "<img src='assets/images/map-images/hippie-fish_150px.jpg'><h4>Hippie Fish</h4><a href='index.html#hippie-fish-info'>Click here to learn more about Hippie Fish</a>",
    },
    {
      latlong: { lat: 51.8515, lng: -8.2937 }, //Cobh Cathedral
      iconImage: "assets/images/cathedral.png",
      content: "<img src='assets/images/map-images/kounelas_150px.jpg'><h4>Kounelas Fish Taverna</h4><a href='index.html#kounelas-info'>Click here to learn more about Kounelas Fish Taverna</a>",
    },
    {
      latlong: { lat: 51.8910, lng: -8.3070 }, //Fota Wildlife Park
      iconImage: "assets/images/zoo.png",
      content: "<img src='assets/images/map-images/lefteris_150px.jpg'><h4>Lefteris GrillHouse</h4><a href='index.html#lefteris-info'>Click here to learn more about Lefteris GrillHouse</a>",
    },
    {
      latlong: { lat: 53.3484, lng: -6.2774 }, //Jameson Distillery
      iconImage: "assets/images/whiskey.png",
      content: "<img src='assets/images/map-images/bakalo_150px.jpg'><h4>Bakalo Greek Eatery</h4><a href='index.html#bakalo-info'>Click here to learn more about Bakalo Greek Eatery</a>",
    },
    {
      latlong: { lat: 51.8986795, lng: -8.30035294 }, // Fota Golf Club
      iconImage: "assets/images/golfing.png",
      content: "<img src='assets/images/map-images/mykonos-town_150px.jpg'><h4>Mykonos Town</h4><a href='index.html#mykonos-town-info'>Click here to learn more about Mykonos Town</a>",
    },
    {
      latlong: { lat: 51.90948055, lng: -8.06539906 }, //Castlemartyr Golf Club
      iconImage: "assets/images/golfing.png",
      content: "<img src='assets/images/map-images/ornos_150px.jpg'><h4>Ornos</h4><a href='index.html#ornos-info'>Click here to learn more about Ornos</a>",
    },
    {
      latlong: { lat: 51.8295455, lng: -8.0142264 }, //Ballycotton Cliff Walk
      iconImage: "assets/images/walkingtour.png",
      content: "<img src='assets/images/map-images/platis_150px.jpg'><h4>Platis Gialos</h4><a href='index.html#platis-info'>Click here to learn more about Platis Gialos</a>",
    },
    {
      latlong: { lat: 51.8583306964, lng: -8.00319395652 }, //Garryvoe Strand
      iconImage: "assets/images/walkingtour.png",
      content: "<img src='assets/images/map-images/platis_150px.jpg'><h4>Platis Gialos</h4><a href='index.html#platis-info'>Click here to learn more about Platis Gialos</a>",
    },
  ];

  // Loop through markers
  for (var i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

  // Add marker function

  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.latlong,
      map: map,
    });

    // Check for customIcon
    if (props.iconImage) {
      // set icon image
      marker.setIcon(props.iconImage);
    }

    // Checks content
    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content,
      });

      marker.addListener("click", function () {
        infoWindow.open(map, marker);
        infowindow.close();
      });
    }

  }

// Code as instructed by Google Documentation along with YouTube Tutorial by Develop Mindfully. Link in ReadMe

  // Search Box
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