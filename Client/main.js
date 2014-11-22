var map;

function initialize() {
    SetupMap();
    PlotHeatmaps();
}

function SetupMap() {

    var mapOptions = {
        center: {
            lat: 54.523610,
            lng: -1.559458
        },
        zoom: 6
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);


$(document).foundation({
    slider: {
        on_change: function () {

        }
    }
});
