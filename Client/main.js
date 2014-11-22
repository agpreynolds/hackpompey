var map;
var data;

var maxPop = 0;
var year = '2013-12-31';

function initialize() {
    SetupMap();

    data = GetCountries()

    ParseCSVs();

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


function GetCountries() {

    var jsonContents, headingsArray, dataArray, countriesArray = [];

    $.ajax({
        url: 'Data/Country_db.json',
        async: false,
        dataType: 'json',
        success: function (response) {
            jsonContents = response;
        }
    });

    headingsArray = jsonContents.meta.view.columns;
    dataArray = jsonContents.data;

    for (var i = dataArray.length - 1; i >= 0; i--) {

        countriesArray.push({});

        for (var b = headingsArray.length - 1; b >= 0; b--) {

            countriesArray[countriesArray.length - 1][headingsArray[b].name] = dataArray[i][b];

        };
    };

    return countriesArray;

}
