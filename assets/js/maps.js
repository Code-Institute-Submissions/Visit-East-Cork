//Code as learned through via Google Maps Documentation & Course Material

function loadMap() {
  var options = {
    zoom: 11,
    center: { lat: 51.8631, lng: -8.1212 },
  };

  // Code as learned through Google Maps Documentation along with following the YouTube Tutorial by Traversy Media. Link in README

  var map = new google.maps.Map(document.getElementById("map"), options);

  var markers = [
    {
      latlong: { lat: 51.9004, lng: -8.2923 }, // Fota Island Resort
      iconImage: "assets/images/hotel.png",
      content:
        "<img src='assets/images/fotaresortsm.jpg'><h4>Fota Island Resort</h4>",
    },
    {
      latlong: { lat: 51.9102, lng: -8.0538 }, //Castlemartyr Resort
      iconImage: "assets/images/hotel.png",
      content:
        "<img src='assets/images/castlemartyrsm.jpg'><h4>Castlemartyr Resort</h4>",
    },
    {
      latlong: { lat: 51.8651, lng: -8.075 }, //Ballymaloe House
      iconImage: "assets/images/hotel.png",
      content:
        "<img src='assets/images/ballymaloesm.jpg'><h4>Ballymaloe House</h4>",
    },
    {
      latlong: { lat: 51.872, lng: -8.016 }, //Garryvoe Hotel
      iconImage: "assets/images/hotel.png",
      content:
        "<img src='assets/images/garryvoesm.jpg'><h4>Garryvoe Hotel</h4>",
    },
    {
      latlong: { lat: 51.8345, lng: -8.2862 }, // Spike Island
      iconImage: "assets/images/historical.png",
      content:
        "<img src='assets/images/spikeislandsm.jpg'><h4>Spike Island</h4>",
    },
    {
      latlong: { lat: 51.8515, lng: -8.2937 }, //Cobh Cathedral
      iconImage: "assets/images/cathedral.png",
      content:
        "<img src='assets/images/cobhcathedralsm.jpg'><h4>Cobh Cathedral</h4>",
    },
    {
      latlong: { lat: 51.891, lng: -8.307 }, //Fota Wildlife Park
      iconImage: "assets/images/zoo.png",
      content:
        "<img src='assets/images/fotawildlifesm.jpg'><h4>Fota Wildlife Park</h4>",
    },
    {
      latlong: { lat: 51.9132, lng: -8.1693 }, //Jameson Distillery
      iconImage: "assets/images/whiskey.png",
      content:
        "<img src='assets/images/jamesonsm.jpg'><h4>Jameson Distillery</h4>",
    },
    {
      latlong: { lat: 51.8986795, lng: -8.30035294 }, // Fota Golf Club
      iconImage: "assets/images/golfing.png",
      content:
        "<img src='assets/images/fotagolfclubsm.jpg'><h4>Fota Golf Club</h4>",
    },
    {
      latlong: { lat: 51.90948055, lng: -8.06539906 }, //Castlemartyr Golf Club
      iconImage: "assets/images/golfing.png",
      content:
        "<img src='assets/images/castlegolfsm.jpg'><h4>Castlemartyr Golf Club</h4>",
    },
    {
      latlong: { lat: 51.8295455, lng: -8.0142264 }, //Ballycotton Cliff Walk
      iconImage: "assets/images/walkingtour.png",
      content:
        "<img src='assets/images/ballycottoncliffsm.jpg'><h4>Ballycotton Cliff Walk</h4>",
    },
    {
      latlong: { lat: 51.8583306964, lng: -8.00319395652 }, //Garryvoe Strand
      iconImage: "assets/images/walkingtour.png",
      content:
        "<img src='assets/images/garryvoebeachsm.jpg'><h4>Garryvoe Beach</h4>",
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

  // Code as learned through Google Documentation along with YouTube Tutorial by Develop Mindfully. Link in ReadMe

  // Search Box
  var defaultBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(51.8179, -8.3915),
    new google.maps.LatLng(51.9543, -7.8472)
  );

  var input = document.getElementById("search");
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  var options = {
    bounds: defaultBounds,
    types: ["establishment"],
  };
  var autocomplete = new google.maps.places.Autocomplete(input, options);

  autocomplete.bindTo("defaultBounds", map);

  autocomplete.setFields(["address_components", "geometry", "icon", "name"]);
  var infowindow = new google.maps.InfoWindow();
  var infowindowContent = document.getElementById("infowindow-content");
  infowindow.setContent(infowindowContent);
  var marker = new google.maps.Marker({
    map,
    anchorPoint: new google.maps.Point(0, -29),
  });
  autocomplete.addListener("place_changed", () => {
    infowindow.close();
    marker.setVisible(false);
    var place = autocomplete.getPlace();

    if (!place.geometry) {
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
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

  //   Code to add town buttons to map

  $(".towns").click(function () {
    map.setCenter(new google.maps.LatLng(this.dataset.lat, this.dataset.lng));
    map.setZoom(12);
  });
  const towns = [
    ["midleton", 51.9143, -8.1726],
    ["ballycotton", 51.8299, -8.0098],
    ["castlemartyr", 51.9119, -8.0535],
    ["cobh", 51.8503, -8.2943],
  ];

  // Code to add reset button to map
  $(".reset-state").click(function () {
    infowindow.close();
    map.fitBounds(defaultBounds);
  });
}
