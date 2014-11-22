var json = [{
    "latitude": 51.50722,
    "longitude": -0.12750,
    "population": 50,
    "weight": 100,
    "name": "UK"
}, {
    "latitude": 0,
    "longitude": 0,
    "population": 50,
    "weight": 1,
    "name": "misc"
}];

var heatmap;

function PlotHeatmaps() {

    var heatmapData = [];

    for (var i = 0; i < json.length - 1; i++) {
        heatmapData[heatmapData.length] = PushNewHeatMapPoint(json[i]);
    }

    heatmap = new google.maps.visualization.HeatmapLayer({
      data: new google.maps.MVCArray(heatmapData)
    });

    heatmap.setMap(map);

}

function PushNewHeatMapPoint(json) {
    return {location: new google.maps.LatLng(json['latitude'], json['longitude']), weight: json['weight']};
}
