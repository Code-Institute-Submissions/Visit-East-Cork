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
      content:
        "<img src='assets/images/fotaresortsm.jpg'><h4>Fota Island Resort</h4><a href='index.html#windmills-info'>Click here to learn more about Fota Island Resort</a>",
    },
    {
      latlong: { lat: 51.9102, lng: -8.0538 }, //Castlemartyr Resort
      iconImage: "assets/images/hotel.png",
      content:
        "<img src='assets/images/castlemartyrsm.jpg'><h4>Castlemartyr Resort</h4><a href='index.html#armenistis-info'>Click here to learn more about Catlemartyr Resort</a>",
    },
    {
      latlong: { lat: 51.8651, lng: -8.075 }, //Ballymaloe House
      iconImage: "assets/images/hotel.png",
      content:
        "<img src='assets/images/little_venice_150px.jpg'><h4>Ballymaloe House</h4><a href='index.html#little-venice-info'>Click here to learn more about Ballymaloe House</a>",
    },
    {
      latlong: { lat: 51.872, lng: -8.016 }, //Garryvoe Hotel
      iconImage: "assets/images/hotel.png",
      content:
        "<img src='assets/images/garryvoesm.jpg'><h4>Garryvoe Hotel</h4><a href='index.html#panagia-info'>Click here to learn more about Garryvoe Hotel</a>",
    },
    {
      latlong: { lat: 51.8345, lng: -8.2862 }, // Spike Island
      iconImage: "assets/images/historical.png",
      content:
        "<img src='assets/images/spikeislandsm.jpg'><h4>Spike Island</h4><a href='index.html#hippie-fish-info'>Click here to learn more about Spike Island</a>",
    },
    {
      latlong: { lat: 51.8515, lng: -8.2937 }, //Cobh Cathedral
      iconImage: "assets/images/cathedral.png",
      content:
        "<img src='assets/images/cobhcathedralsm.jpg'><h4>Cobh Cathedral</h4><a href='index.html#kounelas-info'>Click here to learn more about Cobh Cathedral</a>",
    },
    {
      latlong: { lat: 51.891, lng: -8.307 }, //Fota Wildlife Park
      iconImage: "assets/images/zoo.png",
      content:
        "<img src='assets/images/fotawildlifesm.jpg'><h4>Fota Wildlife Park</h4><a href='index.html#lefteris-info'>Click here to learn more about Fota Wildlife Park</a>",
    },
    {
      latlong: { lat: 51.9132, lng: -8.1693 }, //Jameson Distillery
      iconImage: "assets/images/whiskey.png",
      content:
        "<img src='assets/images/jamesonsm.jpg'><h4>Jameson Distillery</h4><a href='index.html#bakalo-info'>Click here to learn more about The Jameson Distillery</a>",
    },
    {
      latlong: { lat: 51.8986795, lng: -8.30035294 }, // Fota Golf Club
      iconImage: "assets/images/golfing.png",
      content:
        "<img src='assets/images/fotagolfclubsm.jpg'><h4>Fota Golf Club</h4><a href='index.html#mykonos-town-info'>Click here to learn more about Fota Golf Club</a>",
    },
    {
      latlong: { lat: 51.90948055, lng: -8.06539906 }, //Castlemartyr Golf Club
      iconImage: "assets/images/golfing.png",
      content:
        "<img src='assets/images/castlegolfsm.jpg'><h4>Castlemartyr Golf Club</h4><a href='index.html#ornos-info'>Click here to learn more about Castlemartyr Golf Club</a>",
    },
    {
      latlong: { lat: 51.8295455, lng: -8.0142264 }, //Ballycotton Cliff Walk
      iconImage: "assets/images/walkingtour.png",
      content:
        "<img src='assets/images/ballycottoncliffsm.jpg'><h4>Ballycotton Cliff Walk</h4><a href='index.html#platis-info'>Click here to learn more about Ballycotton Cliff Walk</a>",
    },
    {
      latlong: { lat: 51.8583306964, lng: -8.00319395652 }, //Garryvoe Strand
      iconImage: "assets/images/walkingtour.png",
      content:
        "<img src='assets/images/garryvoebeachsm.jpg'><h4>Garryvoe Beach</h4><a href='index.html#platis-info'>Click here to learn more about Garryvoe Beach</a>",
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

      map.addListener("click", function () {
        if (infoWindow) infoWindow.close();
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
