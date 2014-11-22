var heatmap;

function PlotHeatmaps(json, year) {

    var heatmapData = [];

    for (var i = 0; i < json.length - 1; i++) {
        heatmapData[heatmapData.length] = PushNewHeatMapPoint(json[i]);
    }

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: new google.maps.MVCArray(heatmapData)
    });

    heatmap.setMap(map);

}

function PushNewHeatMapPoint(json, year) {
    return {
        location: new google.maps.LatLng(json['latitude'], json['longitude']),
        weight: (json['populations'][year] / 1000000)
    };
}
