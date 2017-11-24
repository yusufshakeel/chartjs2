$(document).ready(function () {

	var ctx = $("#bar-chartcanvas");

	var data = {
		labels : ["match1", "match2", "match3", "match4", "match5"],
		datasets : [
			{
				label : "TeamA score",
				data : [10, 50, 25, 70, 40],
				backgroundColor : [
					getRandomColorHex(),
					getRandomColorHex(),
					getRandomColorHex(),
					getRandomColorHex(),
					getRandomColorHex()
				],
				borderColor : [
					"#111",
					"#111",
					"#111",
					"#111",
					"#111"
				],
				borderWidth : 1
			},
			{
				label : "TeamB score",
				data : [20, 35, 40, 60, 50],
				backgroundColor : [
					getRandomColorHex(),
					getRandomColorHex(),
					getRandomColorHex(),
					getRandomColorHex(),
					getRandomColorHex()
				],
				borderColor : [
					"#111",
					"#111",
					"#111",
					"#111",
					"#111"
				],
				borderWidth : 1
			}
		]
	};

	var options = {
		title : {
			display : true,
			position : "top",
			text : "Random Multicolor Bar Graph",
			fontSize : 18,
			fontColor : "#111"
		},
		legend : {
			display : false
		},
		scales : {
			yAxes : [{
				ticks : {
					min : 0
				}
			}]
		}
	};

	var chart = new Chart( ctx, {
		type : "bar",
		data : data,
		options : options
	});

	/**
	 * function to generate random color in hex form
	 */
	function getRandomColorHex() {
		var hex = "0123456789ABCDEF",
			color = "#";
		for (var i = 1; i <= 6; i++) {
			color += hex[Math.floor(Math.random() * 16)];
		}
		return color;
	}

});