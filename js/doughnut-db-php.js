$(document).ready(function(){

	$.ajax({
		url : "http://localhost/chartjs2/api/data.php",
		type : "GET",
		success : function(data) {

			console.log(data);

			var score = {
				TeamA : [],
				TeamB : []
			};

			var len = data.length;

			for (var i = 0; i < len; i++) {
				if (data[i].team == "TeamA") {
					score.TeamA.push(data[i].score);
				}
				else if (data[i].team == "TeamB") {
					score.TeamB.push(data[i].score);
				}
			}

			var ctx1 = $("#doughnut-chartcanvas-1");
			var ctx2 = $("#doughnut-chartcanvas-2");

			var data1 = {
				labels : ["match1", "match2", "match3", "match4", "match5"],
				datasets : [
					{
						label : "TeamA score",
						data : score.TeamA,
						backgroundColor : [
		                    "#DEB887",
		                    "#A9A9A9",
		                    "#DC143C",
		                    "#F4A460",
		                    "#2E8B57"
		                ],
		                borderColor : [
		                    "#CDA776",
		                    "#989898",
		                    "#CB252B",
		                    "#E39371",
		                    "#1D7A46"
		                ],
		                borderWidth : [1, 1, 1, 1, 1]
					}
				]
			};

			var data2 = {
				labels : ["match1", "match2", "match3", "match4", "match5"],
				datasets : [
					{
						label : "TeamB score",
						data : score.TeamB,
						backgroundColor : [
		                    "#FAEBD7",
		                    "#DCDCDC",
		                    "#E9967A",
		                    "#F5DEB3",
		                    "#9ACD32"
		                ],
		                borderColor : [
		                    "#E9DAC6",
		                    "#CBCBCB",
		                    "#D88569",
		                    "#E4CDA2",
		                    "#89BC21"
		                ],
		                borderWidth : [1, 1, 1, 1, 1]
					}
				]
			};

			var options1 = {
				title : {
					display : true,
					position : "top",
					text : "Doughnut Chart - TeamA Score",
					fontSize : 18,
					fontColor : "#111"
				},
				legend : {
					display : true,
					position : "bottom"
				}
			};

			var options2 = {
				title : {
					display : true,
					position : "top",
					text : "Doughnut Chart - TeamB Score",
					fontSize : 18,
					fontColor : "#111"
				},
				legend : {
					display : true,
					position : "bottom"
				}
			};

			var chart1 = new Chart( ctx1, {
				type : "doughnut",
				data : data1,
				options : options1
			} );

			var chart2 = new Chart( ctx2, {
				type : "doughnut",
				data : data2,
				options : options2
			} );

		},
		error : function(data) {

			console.log(data);

		}
	});

})