var heatmap;

function PlotHeatmaps(json, year) {

    var heatmapData = [];

    for (var i = 0; i < data.length - 1; i++) {
        heatmapData[heatmapData.length] = PushNewHeatMapPoint(data[i]);
    }

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: new google.maps.MVCArray(heatmapData)
    });

    heatmap.setMap(map);

}

function PushNewHeatMapPoint(json) {
    return {location: new google.maps.LatLng(json['Latitude (average)'], json['Longitude (average)'],100) };//json['weight']};
}
