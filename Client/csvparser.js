var data = {
	countries : [
		{
			code: 'GBR'
		},
		{
			code: 'USA'
		}
	]
};

$(function(){
	$(data.countries).each(function(index,item){
		if (!item.data) {
			$.get('https://www.quandl.com/api/v1/datasets/WORLDBANK/'+ item.code +'_SP_POP_TOTL.csv')
				.done(function(r){
					item.data = $.csv.toObjects(r);
				});
		}
	})
})
