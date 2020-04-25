$(document).ready(function() {
	

	// setInterval(function () {
	// 	globe();
	// 	daerah();
	// },3000)
		globe();
		daerah();
	function daerah(data) {
		$.ajax({
			url : 'https://api.kawalcorona.com/indonesia/provinsi/',
			success : function (data) {
				try{
					var json = data;
					for (var i = 0; i < json.length; i++) {
						var dataDaerah = json[i];
						var provinsi = dataDaerah.attributes.Provinsi;
						// console.log(dataDaerah.attributes.Provinsi);
						if (provinsi === 'Jawa Barat') {
							var	positif = dataDaerah.attributes.Kasus_Posi,
								meninggal = dataDaerah.attributes.Kasus_Meni,
								sembuh = dataDaerah.attributes.Kasus_Semb;

							$('#lokalpositif').html(positif);
							$('#lokalmeninggal').html(meninggal);
							$('#lokalsembuh').html(sembuh);	

						}
					}
				}catch{
					console.log('gagal');
				}
			}
		});
	}

	function globe(data) {
		$.ajax({
			url : 'https://coronavirus-19-api.herokuapp.com/countries/indonesia',
			success : function (data) {
				try{
					var json = data,
						kasus = data.cases,
						positif = data.active,
						meninggal = data.deaths,
						sembuh = data.recovered;
					

						$('#kasus').html(kasus);
						$('#positif').html(positif);
						$('#meninggal').html(meninggal);
						$('#sembuh').html(sembuh);
				}catch{
					console.log('gagal');
				}
			}
		});
	}
})