var heatmap;
var heatmapData = [];

function PlotHeatmaps(json, year) {

    for (var i = 0; i < data.length - 1; i++) {
        PushCountry(data[i]);
        //heatmapData[heatmapData.length] = PushNewHeatMapPoint(data[i]);
    }

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: new google.maps.MVCArray(heatmapData)
    });

    var gradient = [
        'rgba(0, 255, 255, 0)',
        'rgba(0, 255, 255, 1)',
        'rgba(0, 191, 255, 1)',
        'rgba(0, 127, 255, 1)',
        'rgba(0, 63, 255, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(0, 0, 223, 1)',
        'rgba(0, 0, 191, 1)',
        'rgba(0, 0, 159, 1)',
        'rgba(0, 0, 127, 1)',
        'rgba(63, 0, 91, 1)',
        'rgba(127, 0, 63, 1)',
        'rgba(191, 0, 31, 1)',
        'rgba(255, 0, 0, 1)'
    ];
    heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);

    heatmap.setMap(map);

}

function PushCountry(json) {
    
    var weight = 0;
    
    $(json.populationData).each(function(index,item){
        if (item.Date == year) {
            weight = ( parseInt(item.Value) / maxPop );
            if (parseInt(item.Value) < 1000000) {
               heatmapData.push({location: new google.maps.LatLng(json['Latitude (average)'], json['Longitude (average)'],weight)})                
            }
            for (var x = 0; x < parseInt(item.Value / 100000); x++) {
               heatmapData.push({location: new google.maps.LatLng(json['Latitude (average)'], json['Longitude (average)'],weight)})
            }
        }
    })

    //return {location: new google.maps.LatLng(json['Latitude (average)'], json['Longitude (average)'],weight) };
}
