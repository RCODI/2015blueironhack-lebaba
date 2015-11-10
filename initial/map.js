CTYPE html>
<html>
  <head>
    <title>Simple click event</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <style>
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      #map {
        height: 100%;
      }
    </style>

  </head>
  <body>
    <div id="map"></div>
    <script>
function initMap() {
  var myLatlng = {lat: 40.4172, lng: -86.8786};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: myLatlng
  });

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Click to zoom'
  });

  map.addListener('center_changed', function() {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
    }, 3000);
  });

  marker.addListener('click', function() {
    map.setZoom(9);
    map.setCenter(marker.getPosition());
  });
}

    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAylHZcBOfjK4LI078BVQ-bFDjUS7zYV-Q&signed_in=true&callback=initMap" async defer>
    </script>
  </body>
</html>

