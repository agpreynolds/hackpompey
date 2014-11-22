
function ParseCSVs() {
	$(data).each(function(index,item){
		if (!item.populationData) {
			$.ajax(
				'/data/cache/'+ item['Alpha-3 code'] +'_SP_POP_TOTL.csv',{
					async: false,
					success: function() {
						item.populationData = $.csv.toObjects(r);						
					}
				});
		
		}
	});
}
