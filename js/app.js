
/* ==============================================
Google Maps
=============================================== */

	function initialize() {
	var myLatlng = new google.maps.LatLng(50.234369, 8.619146); // Change your location Latitude and Longitude 
	var mapOptions = {
	zoom: 15,
	center: myLatlng
	}
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	map.setOptions({'scrollwheel': false});

// style for Google Map
	var styles = [
    {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#aee0df"
            }
        ]
    },
    {
        featureType: "transit",
        stylers: [
            {
                color: "#808080"
            },
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
            {
                visibility: "on"
            },
            {
                color: "#aee0df"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#ffffff"
            }
        ]
    },
    {
        featureType: "road.local",
        elementType: "geometry.fill",
        stylers: [
            {
                visibility: "on"
            },
            {
                color: "#ffffff"
            },
            {
               weight: 1.8
            }
        ]
    },
    {
        featureType: "road.local",
        elementType: "geometry.stroke",
        stylers: [
            {
                color: "#aee0df"
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "geometry.fill",
        stylers: [
            {
                visibility: "on"
            },
            {
                color: "#ebebeb"
            }
        ]
    },
    {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [
            {
                color: "#a7a7a7"
            }
        ]
    },
    {
        featureType: "road.arterial",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#ffffff"
            }
        ]
    },
    {
        featureType: "road.arterial",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#ffffff"
            }
        ]
    },
    {
        featureType: "landscape",
        elementType: "geometry.fill",
        stylers: [
            {
                visibility: "on"
            },
            {
                color: "#efefef"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#5b3b2c"
            }
        ]
    },
    {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [
            {
                visibility: "on"
            },
            {
                color: "#aee0df"
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "labels",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {
        featureType: "road.arterial",
        elementType: "geometry.stroke",
        stylers: [
            {
                color: "#aee0df"
            }
        ]
    },
    {
        featureType: "road",
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "off"
            }
        ]
    },
    {},
    {
        featureType: "poi",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#dadada"
            }
        ]
    }
]
	map.setOptions({styles: styles});

// Google Map Maker 
	var marker = new google.maps.Marker({
	position: myLatlng,
	map: map,
	});
	}

    google.maps.event.addDomListener(window, 'load', initialize);
    