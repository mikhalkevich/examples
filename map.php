<?php
//testtest
 if($_GET['end']){
  $end = $_GET['end']; 
 }
  if($_GET['start']){
  $start = $_GET['start']; 
 }
?>
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <title>Проложить маршрут</title>
    <style>
	html, body {
	  height: 100%;
	  margin: 0;
	  padding: 0;
	}

	#map-canvas, #map_canvas {
	  height: 100%;
	}

	@media print {
	  html, body {
		height: auto;
	  }

	  #map_canvas {
		height: 650px;
	  }
	}
	</style>
    <script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyCMbk8HIa5GS75QbsOpESnmHLMMX_dAThE&sensor=false"> </script>
    <script>
      var directionsDisplay;
      var directionsService = new google.maps.DirectionsService();
      var map;

      function initialize() {
        directionsDisplay = new google.maps.DirectionsRenderer();
        var chicago = new google.maps.LatLng(53.882949, 27.580941);
        var mapOptions = {
          zoom:7,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          center: chicago
        }
        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        directionsDisplay.setMap(map);
		<?if(($_GET['end'])AND($_GET['start'])):?>
			calcRoute();
		<?endif?>
      }

      function calcRoute() {
        var start = document.getElementById('start').value;
        var end = document.getElementById('end').value;
        var request = {
            origin:start,
            destination:end,
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        };
        directionsService.route(request, function(response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
          }
        });
      }
    </script>
  </head>
	<body onload="initialize()">
      <div align="right"><em><a href="http://obmenka.by">obmenka.by</a></em></div>
    <div align="center">
    <b>Мое местоположение: </b>
    <input type="text" id="start" value="<?=$start?>" onchange="calcRoute();">
    <b>Конечная точка: </b>
	<input type="text" id="end" value="<?=$end?>" onchange="calcRoute();">
    </div>
    <div id="map-canvas" style="top:20px;"></div>
  </body>
</html>