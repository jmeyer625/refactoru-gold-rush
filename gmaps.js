
$(function(){
	var mapOptions = {
          center: new google.maps.LatLng(51.507, 0.1275),
          zoom: 8
    };

	var map = new google.maps.Map($('#map-canvas').get(0),mapOptions);

	var infowindow = new google.maps.InfoWindow({
		content: ''
	})

	//creates new infoWindow and populates it with HTML that contains message stored on marker

	var updateInfoWindow = function(marker,infowindow) {
		var newDiv = $('<div id="mydiv"></div>');
		var newPar = $('<p contenteditable="true"></p>');
		newPar.text(marker.message);		
		var newSubmit = $('<input type="submit" class="submit">');
		newSubmit.click(function(){
			marker.message = $(this).prev().text();
			updateInfoWindow(marker,infowindow);
			infowindow.close();
		});
		var newDelete = $('<button>Delete marker</button>');
		newDelete.click(function(){
			marker.setMap(null);
		})
		newDiv.append(newPar);
		newDiv.append(newSubmit);
		newDiv.append(newDelete);
		infowindow.setContent($(newDiv).get(0));
	}

	/*places marker on map and adds event listener to make it clickable*/

	var placeMarker = function(location,map){
		var marker = new google.maps.Marker({
			position: location,
			map: map,
			message:'hello'
		})
		google.maps.event.addListener(marker,'click',function(){
			updateInfoWindow(marker,infowindow);
			infowindow.open(map,marker)
		})
	};

	google.maps.event.addListener(map,'click',function(e){
		placeMarker(e.latLng,map);
	});
});