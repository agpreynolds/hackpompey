
function ParseCSVs() {
	$(data).each(function(index,item){
		if (!item.populationData) {
			$.ajax(
				'/Data/cache/WORLDBANK-'+ item['Alpha-3 code'] +'_SP_POP_TOTL.csv',{
					async: false,
					success: function(r) {
						item.populationData = $.csv.toObjects(r);						
					}
				});
		
		}
	});
}
