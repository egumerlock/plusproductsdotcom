
function getPropertyMarkers() {
  var myData;
}

function initMap() {
  // store openInfoWindow to close it when another opens
  var openInfoWindow = null;
  // keep track of bounds so that we can center the map
  var bounds = new google.maps.LatLngBounds();

  // make draggable false when on a phone (where the map can take up the whole page)
  var isDraggable = jQuery(document).width() > 700 ? true : false; // If document (your website) is wider than 480px, isDraggable = true, else isDraggable = false

  var mapCanvas = document.getElementById('map');
  var mapOptions = {
    center: new google.maps.LatLng(37.6344, -122.1460),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    draggable: isDraggable,
    scrollwheel: true
    }
  var map = new google.maps.Map(mapCanvas, mapOptions);

  // create property markers
  function createStoreMarkerWithTooltip(store_info){
    var image = {
      url: '/assets/plus_pushpin.png',
      size: new google.maps.Size(41,65),
      origin: new google.maps.Point(0,0),
      anchor: new google.maps.Point(20,65)
    };

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(store_info.latitude, store_info.longitude),
      map: map,
      title: store_info.title,
      icon: image,
      animation: google.maps.Animation.DROP
    });

    // resize the map
    bounds.extend(marker.position);
    map.fitBounds(bounds);

    var infoWindow = new google.maps.InfoWindow({
      content: store_info.tooltip_string
    });

    marker.addListener('click', function() {
      if (openInfoWindow) {
        openInfoWindow.close();
      }
      openInfoWindow = infoWindow;
      infoWindow.open(map, marker)
    });


  }
  // pull store info
  jQuery.ajax({
    url: '/store-locations',
    type: 'GET',
    dataType: 'json',
    beforeSend: function(xhr) {
      xhr.setRequestHeader('X-CSRF-Token', jQuery('meta[name="csrf-token"]').attr('content'));
    },
    success: function(store_locations) {
      jQuery.each(store_locations, function(_, store_info) {
        createStoreMarkerWithTooltip(store_info)
      });
    },
    error: function(xhr, status, response) {
      console.log(status);
    }
  });

}

