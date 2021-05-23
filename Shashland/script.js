var dis = ""
if (sessionStorage.getItem("mat") == 1)
{
	dis = "Math"
}
else if (sessionStorage.getItem("eng") == 1)
{
	dis = "English"
}

window.onload = function() {
	$('.popup').show()
	var q = 0
	$('.ok').on('click', function() {
		if (q == 0) {
			$('.popup').hide()
			newground()
		}
		else {
			$('.popup').hide()
			sessionStorage.removeItem(dis)
			sessionStorage.setItem(dis, document.body.innerHTML.replace(document.body.innerHTML.substr(660,103), ""))
		}
		q++;
	});

}




function newground() {
	var branch_1 = 3
	var branch_2 = 5
	var branch_3 = 7

	if (sessionStorage.getItem(dis) != null) {
		console.log(sessionStorage.getItem(dis))
		document.body.innerHTML = sessionStorage.getItem(dis)
	}
	else {
	var x = 0
	var y = 0
	var x1 = 0
	var y1 = 0
	for(var i=0; i<10; i++)
	{
		if(i==0)
		{
			x = getRandomInt(80, 90)
			y = getRandomInt(10, 20)
			var but = document.createElement("button")
			but.className = "start_point"
			but.id = "task_" + i.toString()
			but.style.position = "absolute"
			but.style.top= x.toString() + '%'
			but.style.left= y.toString() + '%'
			but.setAttribute("onclick", "open_task(this)")
			$(but).attr("complete", false)
			document.getElementById('map_id').appendChild(but)
		}
		else {
			var k = 0
			while (k==0) {
				k = 1
				x1 = getRandomInt(x - 7, x - 4)
				y1 = getRandomInt(y + 3, y + 7)
				for (var j =0; j < i; j++) {
					var el = document.getElementById("task_" + j.toString())
					var r = el.style.top.substring(0, el.style.top.length - 1)
					var t = el.style.left.substring(0, el.style.left.length - 1)
					if (getDistance(r, t, x1, y1) < 1) {
						k = 0
					}
				}
			}

			x = x1
			y = y1

			var type = getRandomInt(0, 3)

			var but = document.createElement("button")
			if ((i + 1) % 10 == 0) {
				but.className = "boss_point"

			}
			else if (type == 2 && i % 3 == 0) {
				but.className = "suprize_point"
			}
			else if (type == 0 || i < 3) {
				but.className = "lesson_point"
			}
			else if (type == 1 || type == 2 ) {
				but.className = "task_point"
			}
			else {
				but.className = "lesson_point"
			}

			but.id = "task_" + i.toString()
			but.style.position = "absolute"
			but.style.top= x1.toString() + '%'
			but.style.left= y1.toString() + '%'
			but.setAttribute("onclick", "open_task(this)")
			$(but).attr("complete", false)
			document.getElementById('map_id').appendChild(but);

			if (i == 3 || i == 5 || i == 7) {
				var count = getRandomInt(2, 5)
				var k = 0
				while (k==0) {
				k = 1
				x1 = getRandomInt(x - 7, x - 4)
				y1 = getRandomInt(y - 5, y)
				for (var j =0; j < i; j++) {
					var el = document.getElementById("task_" + j.toString())
					var r = el.style.top.substring(0, el.style.top.length - 1)
					var t = el.style.left.substring(0, el.style.left.length - 1)
					if (getDistance(r, t, x1, y1) < 1) {
						k = 0
					}
				}
			}
				var but = document.createElement("button")
				but.className = "lesson_point"
				but.id = "task_" + i.toString() + "_0"
				but.style.position = "absolute"
				but.style.top= x1.toString() + '%'
				but.style.left= y1.toString() + '%'
				but.setAttribute("onclick", "open_task(this)")
				$(but).attr("complete", false)
				document.getElementById('map_id').appendChild(but);

				for (var q = 1; q < count; q++)
				{
					var x2 = 0
					var y2 = 0
					k = 0
					while (k==0) {
					k = 1
					x2 = getRandomInt(x1 - 10, x1 - 5)
					y2 = getRandomInt(y1 - 10, y1 - 5)
					var el = document.getElementById("task_" + i.toString() + "_" + (q-1).toString())
					var r = el.style.top.substring(0, el.style.top.length - 1)
					var t = el.style.left.substring(0, el.style.left.length - 1)
					if (getDistance(r, t, x2, y2) < 3) {
						k = 0
					}
					}

					x1 = x2
					y1 = y2

					var but = document.createElement("button")

					type = getRandomInt(0, 2)

					if ((q + 1) == count) {
						but.className = "task_point"
					}
					else if (type == 0 && j % 2 == 0 ) {
						but.className = "suprize_point"
					}
					else if (type == 1) {
						but.className = "task_point"
					}
					else {
						but.className = "lesson_point"
					}

					but.id = "task_" + i.toString() + "_" + q.toString()
					but.style.position = "absolute"
					but.style.top= x1.toString() + '%'
					but.style.left= y1.toString() + '%'
					but.setAttribute("onclick", "open_task(this)")
					$(but).attr("complete", false)
					document.getElementById('map_id').appendChild(but);

					//arrowsDrawer1.arrow('#' + document.getElementById("task_" + i.toString() + "_" + (q-1).toString()).id, '#' + document.getElementById("task_" + i.toString() + "_" + (q).toString()).id)
				}

				if (i == 3) {
					branch_1 = count
				}
				else if (i == 5) {
					branch_2 = count
				}
				else if (i == 7) {
					branch_3 = count
				}
			}
		}
	}

		sessionStorage.setItem(dis, document.body.innerHTML)
	}

	var arrowsDrawer1 = $cArrows('.map', { render:{lineWidth: 3, strokeStyle: '#0000000'}})
	for (var i = 0; i < 9; i++) {
		arrowsDrawer1.arrow('#' + document.getElementById("task_" + i.toString()).id, '#' + document.getElementById("task_" + (i+1).toString()).id)
	}

	arrowsDrawer1.arrow('#' + document.getElementById("task_3").id, '#' + document.getElementById("task_3_0").id)
	arrowsDrawer1.arrow('#' + document.getElementById("task_5").id, '#' + document.getElementById("task_5_0").id)
	arrowsDrawer1.arrow('#' + document.getElementById("task_7").id, '#' + document.getElementById("task_7_0").id)
	
	var p = 1
	while (document.getElementById("task_3_" + (p).toString())) {
		arrowsDrawer1.arrow('#' + document.getElementById("task_3_" + (p-1).toString()).id, '#' + document.getElementById("task_3_" + (p).toString()).id)
		p++
	}
	p = 1
	while (document.getElementById("task_5_" + (p).toString())) {
		arrowsDrawer1.arrow('#' + document.getElementById("task_5_" + (p-1).toString()).id, '#' + document.getElementById("task_5_" + (p).toString()).id)
		p++
	}
	p = 1
	while (document.getElementById("task_7_" + (p).toString())) {
		arrowsDrawer1.arrow('#' + document.getElementById("task_7_" + (p-1).toString()).id, '#' + document.getElementById("task_7_" + (p).toString()).id)
		p++
	}

	$('.ok').on('click', function() {
		$('.popup').hide()
		sessionStorage.removeItem(dis)
		sessionStorage.setItem(dis, document.body.innerHTML.replace(document.body.innerHTML.substr(660,103), ""))
	});
}

function getRandomInt(min, max) {
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
  }

function getDistance(a, b, c, d) {
	return Math.pow(Math.pow((c-a),2) + Math.pow((d-b), 2), 0.5)
  }

function open_task(el) {
	if (el.id == "task_0") {
		var l = getRandomInt(1,4)
		$('.popup').empty()
		$('.popup').html("<img src=\"mem" + l + ".jpg\" id=\"mem1\"><button class=\"ok\" onclick=\"openclose()\"><b>ОК</b></button>")
		$('.popup').show()
		el.setAttribute("complete", "true")
		document.getElementById("task_1").setAttribute("complete", "true")
	}
	else if ((el.id == "task_3" || el.id == "task_5" || el.id == "task_7") && el.getAttribute("complete") == "true") {
		var l = getRandomInt(1,4)
		$('.popup').empty()
		$('.popup').html("<img src=\"mem" + l + ".jpg\" id=\"mem1\"><button class=\"ok\" onclick=\"openclose()\"><b>ОК</b></button>")
		$('.popup').show()
		el.nextElementSibling.setAttribute("complete", "true")
		document.getElementById("task_" + String(Number(el.id.substring(5)) + 1)).setAttribute("complete", "true")
	}
	else if (el.getAttribute("complete") == "true"){
		var l = getRandomInt(1,20)
		$('.popup').empty()
		if (l > 17) {
			$('.popup').html("<img src=\"pvp.jpg\" id=\"mem1\"><button class=\"ok\" onclick=\"openclose()\"><b>ОК</b></button>")
		}
		else {
			$('.popup').html("text №" + l.toString() +"<button class=\"ok\" onclick=\"openclose()\"><b>ОК</b></button>")
		}
		$('.popup').show()
		el.nextElementSibling.setAttribute("complete", "true")
	}
}

function openclose(){
	$('.popup').hide()
}
//el.nextElementSibling.style.display = 'block'
//document.getElementById('sup_' + el.id.substr(5)).style.display = 'block'
//<script src="script.js"></script>
//"position: absolute; top: 550px; right: 1590px; display: none;"
//<button class="start_point" style=random(0, 0) id='task_0' onclick="open_task(this)"></button>
		//<button class="lesson_point" style="position: absolute; top: 520px; right: 1530px; display: none;" id='task_1' onclick="open_task(this)"></button>
		//<button class="lesson_point" style="position: absolute; top: 540px; right: 1470px; display: none" id='task_2' onclick="open_task(this)"></button>
		//<button class="task_point" style="position: absolute; top: 490px; right: 1400px; display: none" id='task_3' onclick="open_task(this)"></button>
		//<button class="lesson_point" style="position: absolute; top: 490px; right: 1320px; display: none" id='task_4' onclick="open_task(this)"></button>
		//<button class="task_point" style="position: absolute; top: 440px; right: 1260px; display: none" id='task_5' onclick="open_task(this)"></button>
		//<button class="boss_point" style="position: absolute; top: 390px; right: 1180px; display: none" id='task_6' onclick="open_task(this)"></button>
		//<button class="suprize_point" style="position: absolute; top: 550px; right: 1360px; display: none" id='sup_3' onclick="open_task(this)"></button>


		//task_0
		//task_1    
		//task_3  ->  task_3_0
		//task_9




