const topSports = [1, 3, 13, 91, 92, 18, 16]; //Top sports

toastr.options = {  
	"positionClass": "toast-bottom-left", // Position in the bottom-left corner  
	"timeOut": "5000", // Duration to display the toast  
	"closeButton": true, // Enable close button  
	"progressBar": true // Enable progress bar  
};  

const sport_names={
    1:"Soccer", 
    13:"Tennis",
    78:"Handball",
    2: "Horse Racing",
    17:"Ice Hockey",
    12:"American footbal",
    83: "Futsal",
    92: "Table Tennis",
    8: "Rugby Union",
    36: "Australian Rules",
    9 :"Boxing",
    90: "Floorball",
    110: "Water Polo",
    151: "E-Sports",
    148: "Surfing",
    18:"Basketball",
    91:"Volleyball",
    16:"Baseball",
    4: "Greyhounds",
    14:"Snooker",
    3:"Cricket",
    15:"Darts",
    94:"Badminton",
    19: "Rugby League",
    66:"Bowls",
    75:"Gaelic Sports",
    95:"Beach Volleyball",
    107: "Squash",
    162: "MMA"
}

const cornerImage = `<img style='width:12px' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjlweCIgaGVpZ2h0PSIxMHB4IiB2aWV3Qm94PSIwIDAgOSAxMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8dGl0bGU+NURBNjNGRDEtQUE4Qi00OTYyLUJENzAtMTQzNDQwRDk2MTJFQDF4PC90aXRsZT4NCiAgICA8ZyBpZD0iTGl2ZS1TY29yZWJvYXJkcyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSIwNi41X2RhcmtNb2RlX21vYmlsZV9ETVNCIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjUxLjAwMDAwMCwgLTE0NS4wMDAwMDApIj4NCiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDEwMC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1MS4wMDAwMDAsIDM1LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDEwLjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5LTUiIGZpbGw9IiNGRkZGRkYiIHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEwIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjRkZGRkZGIiB4PSIwIiB5PSIwIiB3aWR0aD0iOS4wMDMwMzA1NSIgaGVpZ2h0PSI2LjY2NjY2NjY3Ij48L3JlY3Q+DQogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLUNvcHktOSIgZmlsbD0iIzMzNEU2QSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi4zNDA5MDksIDIuMDgzMzMzKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC02LjM0MDkwOSwgLTIuMDgzMzMzKSAiIHg9IjQuNSIgeT0iMC44MzMzMzMzMzMiIHdpZHRoPSIzLjY4MTgxODE4IiBoZWlnaHQ9IjIuNSI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5LTEwIiBmaWxsPSIjMzM0RTZBIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjY1OTA5MSwgNC41ODMzMzMpIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTIuNjU5MDkxLCAtNC41ODMzMzMpICIgeD0iMC44MTgxODE4MTgiIHk9IjMuMzMzMzMzMzMiIHdpZHRoPSIzLjY4MTgxODE4IiBoZWlnaHQ9IjIuNSI+PC9yZWN0Pg0KICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+DQo=" class="icon-dac43ecd499d0fefdaaa" alt="corner-flag">`;
$(document).ready(function(){  

	$("#main_contents").delegate("#show_all_live","click", function(e) {
	const b = $(this).hasClass("showAll");
	if(b == false) {
		$(`#main_contents .table__items`).css("display","flex");
		$(this).addClass("showAll");
		$(this).html(`<span>Show less</span><span class="icons"><i class="fas fa-chevron-up"></i></span>`);
	}
	else {
		$(this).removeClass("showAll")
		$("#main_contents .table__items:nth-child(n+7)").css("display","none");  
		$(this).html(`<span>Show more</span><span class="icons"><i class="fas fa-chevron-down"></i></span>`);
	}
	//$(this).css("display", "none");
})

$("#main_contents").delegate(".inplay_removestar","click", function(e) {	
	const tid = $(this).attr("tid");
	$.ajax({  
		url: '/api/remove_fav',  
		type: 'POST',  
		data: {
			tid,
			type: 'inplay',
		},  
		success: function(response) {  
			// Use the callback to pass the data to the DataTable  
			toastr.info("Removed successfully.");
		},  
		error: function(jqXHR, textStatus, errorThrown) {  
		}  
	});  
});

$("#main_contents").delegate(".inplay_likestar","click", function(e) {	
	const tid = $(this).attr("tid");
	const data = $(this).attr("data");
	$.ajax({  
		url: '/api/register_fav',  
		type: 'POST',  
		data: {
			tid,
			type: 'inplay',
			token,
			data,
		},  
		success: function(response) {  
			// Use the callback to pass the data to the DataTable  
			toastr.info("Registered successfully.");
		},  
		error: function(jqXHR, textStatus, errorThrown) {  
		}  
	});  
});

$("#main_contents").delegate(".inplay_detail_view_btn","click", function(e) {
	$("#main_contents>div").remove();
	const id = $(this).attr("tid");
	
	//only request current information
	sportsSocket.send(JSON.stringify({
		type: 'detail_live',
		id: id,
	}));

	const data = JSON.parse(sessionStorage.getItem('live_data'));
	let o = null;
	for(i = 0; i < data.data.length; i++) {
		if(data.data[i].id == id) {
			o = data.data[i];
			break;
		}
	}
	if(o == null) {
		toastr.error("Invalid match");
		return;
	}

	const sid = o.sport_id;
	const sports_name = sport_names[sid];
	const title = `${sports_name} \/ ${o.league_name} \/ ${o.home_name} vs ${o.away_name}`;
	const date = new Date(o.time_str);  
	const home_image = o.home_image_id;
	const away_image = o.away_image_id;
	const scores = o.scores;
	const names = o.names;
	const passed_second = o.passed_second;
	const pass_time_str = Math.floor(passed_second / 60) + "' " + passed_second % 60;

	let order = true;
	if(o.home_name != names.names1) {
		order = false;
	}
	let corner_home = 0, corner_away = 0;
	let ycard_home=0, ycard_away = 0;
	let rcard_home=0, rcard_away = 0;
	let goal_home=0, goal_away=0;
	for(let i = 0; i < scores;i++) {
		if(scores[i].name == "ICorner") {
			corner_home = order ? scores[i].score1 : scores[i].score2;
			corner_away = order ? scores[i].score2 : scores[i].score1;
		}
		if(scores[i].name == "IYellowCard") {
			ycard_home = order ? scores[i].score1 : scores[i].score2;
			ycard_away = order ? scores[i].score2 : scores[i].score1;
		}
		if(scores[i].name == "IRedCard") {
			rcard_home = order ? scores[i].score1 : scores[i].score2;
			rcard_away = order ? scores[i].score2 : scores[i].score1;
		}
		if(scores[i].name == "IGoal") {
			goal_home = order ? scores[i].score1 : scores[i].score2;
			goal_away = order ? scores[i].score2 : scores[i].score1;
		}
	}

	const team1_str = (home_image == 0) ? `<i class='icon-star'></i>${o.home_name}`:`<img src='https://assets.b365api.com/images/team/s/${home_image}.png'/>${o.home_name}`;
	const team2_str = (away_image == 0) ? `<i class='icon-star'></i>${o.away_name}`:`<img src='https://assets.b365api.com/images/team/s/${away_image}.png'/>${o.away_name}`;
	const team1_scores = `<div style='min-width:12px' class='corner-home'>${corner_home}</div><div style='min-width:12px' class='ycard-home'>${ycard_home}</div><div style='min-width:12px' class='rcard-home'>${rcard_home}</div><div style='min-width:14px' class='goal-home'>${goal_home}</div>`;
	const team2_scores = `<div style='min-width:12px' class='corner-away'>${corner_away}</div><div style='min-width:12px' class='ycard-away'>${ycard_away}</div><div style='min-width:12px' class='rcard-away'>${rcard_away}</div><div style='min-width:14px' class='goal-away'>${goal_away}</div>`;

	let accordionElems = '';
	for(let i = 0; i < o.data.length; i++) {
		const item = o.data[i];
		const odds = item.odds;

		let bettingItem = '';
		if(odds.length == 3) {
			for(let j = 0; j < odds.length; j++) {
				const n = odds[j].name;
				const h = odds[j].header;
				const v = odds[j].odds;
				const t = h == undefined ? n : n+", "+h;
				bettingItem += `<div class="col-md-4 col-sm-4">
					<div style='display:flex; justify-content:space-between; padding: 10px' class='bet-btn' id='idl-${id}-${i}-${j}' groupNo="${i}" mid="${id}" t="${item.name}" d1="${n}" d2="${h}" o="${v}" d3="${o.home_name} vs ${o.away_name}">
						<span>${v == "NaN" ? '<i class="icon-lock"></i>':t}</span>
						<span>${v == "NaN" ? '<i class="icon-lock"></i>':v}</span>
					</div>
				</div>`;
			}			
		}
		else {
			for(let j = 0; j < odds.length; j++) {
				const n = odds[j].name;
				const h = odds[j].header;
				const v = odds[j].odds;
				const t = h == undefined ? n : n+", "+h;
				let n1 = "";
				if(odds.length == 2) {
					n1 = j == 0 ? o.home_name : o.away_name;
				}
				bettingItem += `<div class="col-md-6 col-sm-6">
					<div style='display:flex; justify-content:space-between; padding: 10px' class='bet-btn' id='idl-${id}-${i}-${j}' groupNo="${i}" t="${item.name}" mid="${id}" n="${n1}" d1="${n}" d2="${h}" o="${v}" d3="${o.home_name} vs ${o.away_name}">
						<span>${v == "NaN" ? '<i class="icon-lock"></i>':t}</span>
						<span>${v == "NaN" ? '<i class="icon-lock"></i>':v}</span>
					</div>
				</div>`;
			}
		}

		accordionElems += `<div class="accordion-item">
			<h2 class="accordion-header" id="headingOne${i}">
				<button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#odd-${id}-${i}" aria-expanded="true" aria-controls="odd-${id}-${i}">
				<span class="d-flex align-items-center gap-2 left-chokoboko">
					<span class="mt-1"><i class="icon-football"></i></span>
					<span class="score text-white">
						${item.name}
					</span>
				</span>
				<span class="d-flex align-items-center gap-1 icon-rightfs10">
					<i class="fa-solid fa-chevron-down"></i>
				</span>
				</button>
			</h2>
			<div id="odd-${id}-${i}" class="accordion-collapse collapse show" aria-labelledby="headingOne${i}">
				<div class="accordion-body">
					<div class="row g-0">
                        ${bettingItem}
					</div>
				</div>
			</div>
		</div>`;
	}
	// Options for formatting  
	const options = {  
		weekday: 'long',  
		year: 'numeric',  
		month: 'long',  
		day: 'numeric',  
		hour: '2-digit',  
		minute: '2-digit',  
		hour12: false,  
	};  

	// Convert to local time and format  
	const localeDateString = `Live | ${pass_time_str}`//date.toLocaleString('en-US', options);  
	

	$("#main_contents").prepend(`<div class="main__body__wrap left__right__space mt__30" id="detail-${id}">                                                       
		<div class="live__heightlight mb__30">
			<div class="section__title">
				<h5>
					${title}
				</h5>
			</div>
			<div class='b__bottom' style='margin-left:2rem; padding:10px 0px; justify-content:space-between; display:flex'>
				<div style='color:#09ff8d; font-weight:bold'>${localeDateString}</div>
				<div style='display:flex;gap:1rem;align-items:center;'>
					${cornerImage}
					<div style='width:12px;background-color:#ffff00; height:14px'></div>
					<div style='width:12px;background-color:#ff0000; height:14px'></div>
					<i class='icon-football'></i>
				</div>
			</div>
			<div class='b__bottom' style='margin-left:2rem; padding:10px 0px; justify-content:space-between; display:flex'>
				<div style='display:flex; gap:5px'>${team1_str}</div>
				<div style='display:flex;gap:1rem;align-items:center;'>${team1_scores}</div>
			</div>
			<div class='b__bottom' style='margin-left:2rem;padding:10px 0px; justify-content:space-between; display:flex'>
				<div style='display:flex; gap:5px'>${team2_str}</div>
				<div style='display:flex;gap:1rem;align-items:center;'>${team2_scores}</div>
			</div>			
			<div class="height__table" style='margin-top:1.5rem'>
				<div class="tab-content sidebar-livematch">
					<div class="accordion">
						${accordionElems}
					</div>
				</div>
			</div>
		</div>                                                  
	</div>`);
});

$("#main_contents").delegate(".prematch_detail_view_btn","click", function(e) {
	$("#main_contents>div").remove();
	const id = $(this).attr("tid");
	
	//only request current information
	sportsSocket.send(JSON.stringify({
		type: 'detail_prematch',
		id: id,
	}));

	const data = JSON.parse(sessionStorage.getItem('prematch_data'));
	let o = null;
	for(i = 0; i < data.data.length; i++) {
		if(data.data[i].id == id) {
			o = data.data[i];
			break;
		}
	}
	if(o == null) {
		toastr.error("Invalid match");
		return;
	}
	console.log(o);

	const sid = o.sport_id;
	const sports_name = sport_names[sid];
	const title = `${sports_name} \/ ${o.league_name} \/ ${o.home_name} vs ${o.away_name}`;
	const date = new Date(o.time_str);  
	const home_image = o.home_image_id;
	const away_image = o.away_image_id;
	let order = true;
	if(o.home_name != names.names1) {
		order = false;
	}
	

	const team1_str = (home_image == 0) ? `<i class='icon-star'></i>${o.home_name}`:`<img src='https://assets.b365api.com/images/team/s/${home_image}.png'/>${o.home_name}`;
	const team2_str = (away_image == 0) ? `<i class='icon-star'></i>${o.away_name}`:`<img src='https://assets.b365api.com/images/team/s/${away_image}.png'/>${o.away_name}`;
	const bettings = ["asian_lines", "goals", "half", "main", "minutes", "others", "specials"];

	let accordionElems = '';
	for(let i = 0; i < bettings.length; i++) {
		const item = bettings[i];
		const odds = item.odds;

		let bettingItem = '';
		if(odds.length == 3) {
			for(let j = 0; j < odds.length; j++) {
				const n = odds[j].name;
				const h = odds[j].header;
				const v = odds[j].odds;
				const t = h == undefined ? n : n+", "+h;
				bettingItem += `<div class="col-md-4 col-sm-4">
					<div style='display:flex; justify-content:space-between; padding: 10px' class='bet-btn' id='idr-${id}-${i}-${j}' groupNo="${i}" mid="${id}" t="${item.name}" d1="${n}" d2="${h}" o="${v}" d3="${o.home_name} vs ${o.away_name}">
						<span>${v == "NaN" ? '<i class="icon-lock"></i>':t}</span>
						<span>${v == "NaN" ? '<i class="icon-lock"></i>':v}</span>
					</div>
				</div>`;
			}			
		}
		else {
			for(let j = 0; j < odds.length; j++) {
				const n = odds[j].name;
				const h = odds[j].header;
				const v = odds[j].odds;
				const t = h == undefined ? n : n+", "+h;
				let n1 = "";
				if(odds.length == 2) {
					n1 = j == 0 ? o.home_name : o.away_name;
				}
				bettingItem += `<div class="col-md-6 col-sm-6">
					<div style='display:flex; justify-content:space-between; padding: 10px' class='bet-btn' id='idr-${id}-${i}-${j}' groupNo="${i}" t="${item.name}" mid="${id}" n="${n1}" d1="${n}" d2="${h}" o="${v}" d3="${o.home_name} vs ${o.away_name}">
						<span>${v == "NaN" ? '<i class="icon-lock"></i>':t}</span>
						<span>${v == "NaN" ? '<i class="icon-lock"></i>':v}</span>
					</div>
				</div>`;
			}
		}

		accordionElems += `<div class="accordion-item">
			<h2 class="accordion-header" id="headingOne${i}">
				<button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#odd-${id}-${i}" aria-expanded="true" aria-controls="odd-${id}-${i}">
				<span class="d-flex align-items-center gap-2 left-chokoboko">
					<span class="mt-1"><i class="icon-football"></i></span>
					<span class="score text-white">
						${item.name}
					</span>
				</span>
				<span class="d-flex align-items-center gap-1 icon-rightfs10">
					<i class="fa-solid fa-chevron-down"></i>
				</span>
				</button>
			</h2>
			<div id="odd-${id}-${i}" class="accordion-collapse collapse show" aria-labelledby="headingOne${i}">
				<div class="accordion-body">
					<div class="row g-0">
                        ${bettingItem}
					</div>
				</div>
			</div>
		</div>`;
	}
	// Options for formatting  
	const options = {  
		weekday: 'long',  
		year: 'numeric',  
		month: 'long',  
		day: 'numeric',  
		hour: '2-digit',  
		minute: '2-digit',  
		hour12: false,  
	};  

	// Convert to local time and format  
	const localeDateString = `Live | ${pass_time_str}`//date.toLocaleString('en-US', options);  
	

	$("#main_contents").prepend(`<div class="main__body__wrap left__right__space mt__30" id="detail-${id}">                                                       
		<div class="live__heightlight mb__30">
			<div class="section__title">
				<h5>
					${title}
				</h5>
			</div>
			<div class='b__bottom' style='margin-left:2rem; padding:10px 0px; justify-content:space-between; display:flex'>
				<div style='color:#09ff8d; font-weight:bold'>${localeDateString}</div>
				<div style='display:flex;gap:1rem;align-items:center;'>
					${cornerImage}
					<div style='width:12px;background-color:#ffff00; height:14px'></div>
					<div style='width:12px;background-color:#ff0000; height:14px'></div>
					<i class='icon-football'></i>
				</div>
			</div>
			<div class='b__bottom' style='margin-left:2rem; padding:10px 0px; display:flex'>
				<div style='display:flex; gap:5px'>${team1_str}</div>
			</div>
			<div class='b__bottom' style='margin-left:2rem;padding:10px 0px; display:flex'>
				<div style='display:flex; gap:5px'>${team2_str}</div>
			</div>			
			<div class="height__table" style='margin-top:1.5rem'>
				<div class="tab-content sidebar-livematch">
					<div class="accordion">
						${accordionElems}
					</div>
				</div>
			</div>
		</div>                                                  
	</div>`);
});


$("#main_contents").delegate(".bet-btn", "click", function(e){
	const nGroup = $(this).attr("groupNo");
	const locked = $(this).find(".icon-lock");
	
	if(locked.length != 0) {
		return;
	}
	
	const mid = $(this).attr("mid")
	const t = $(this).attr("t")
	const n = $(this).attr("n")
	const d1 = $(this).attr("d1")
	const d2 = $(this).attr("d2")
	const d3 = $(this).attr("d3")
	const o = $(this).attr("o")
	const id = $(this).attr("id")
	

	if($(this).hasClass("selected")) {
		$(this).removeClass("selected");
		var elems = $('#single_bets_view [elem]');  
		for(let i = 0; i < elems.length; i++) {
			const elem = elems[i];
			if($(elem).attr("elem") == id) {
				$(elem).closest('.multiple__items').remove(); // Set 'a1' value 
				break;
			}
		}

		elems = $('#multiple_bets_view [elem]');  
		for(let i = 0; i < elems.length; i++) {
			const elem = elems[i];
			if($(elem).attr("elem") == id) {
				$(elem).closest('.multiple__items').remove(); // Set 'a1' value 
				break;
			}
		}

		var currentBets = $('#single_bets_view .multiple__items');
		if(currentBets.length == 0) {
			$("#single_bets_view").html(`<div class='empty empty-box-1'>There are no bets on your ticket</div>
		<div class='empty empty-box-2'>Click the odds to add a bet</div>`);
		}

		var cb = $('#multiple_bets_view .multiple__items');
		if(cb.length == 0) {
			$("#multiple_bets_view").html(`<div class='empty empty-box-1'>There are no bets on your ticket</div>
		<div class='empty empty-box-2'>Click the odds to add a bet</div>`);
		}
		return;
	}

	$(`div[groupNo="${nGroup}"]`).removeClass("selected")
	$(`a[groupNo="${nGroup}"]`).removeClass("selected")
	$(this).addClass("selected");

	const needEmpty = $("#single_bets_view").find(".empty").length == 2;
	if(needEmpty) {
		//$("#single_bets_view").empty();
		$("#single_bets_view").html(`
			<div class="total__odds">
				<div class="total__head">
					<h6 class="odd">
						Total Stake
					</h6>
					<span id='total_stake'>
						0
					</span>
				</div>
				<div class="total__head">
					<h6 class="odd">
						Total Win
					</h6>
					<span id='total_win'>
						0
					</span>
				</div>
				<div class="total__head">
					<h6 class="odd">
						Total Payout
					</h6>
					<span id='total_payout'>
						0
					</span>
				</div>                                            
			</div>                                        
			<a href="#0" class="cmn--btn2 btn-bet">
				<span>Bet</span>
			</a>`);
		$("#multiple_bets_view").html(`
			<div class="total__odds">
				<div class="total__head">
					<h6 class="odd">
						Total Odd
					</h6>
					<span id='total_odd'>
						0
					</span>
				</div>
				<div class="wrapper" style="margin-top:1rem; margin-bottom:1rem">
					<div class="result" style="display:flex;padding:0">
						<input type="text" id='minput-stake' placeholder="stake" style="background:#000; color:#eee; flex:1;width:50%; padding:8px 10px;outline:none"/>
						<input type="text" id='minput-win' placeholder="win" style="background:#000; color:#eee; flex:1;width:50%; padding:8px 10px;outline:none"/>
					</div>
				</div>
				<div class="total__head">
					<h6 class="odd">
						Total Stake
					</h6>
					<span id='mtotal_stake'>
						0
					</span>
				</div>
				<div class="total__head">
					<h6 class="odd">
						Total Win
					</h6>
					<span id='mtotal_win'>
						0
					</span>
				</div>
				<div class="total__head">
					<h6 class="odd">
						Total Payout
					</h6>
					<span id='mtotal_payout'>
						0
					</span>
				</div>                                            
			</div>                                        
			<a href="#" class="cmn--btn2 btn-bet">
				<span>Bet</span>
			</a>`);
	}
	let infoStr = ``;
	function appendToString(item, infoStr) {  
		if (item !== "undefined" && item !== undefined) {  
			if (infoStr.length > 0) {  
				infoStr += "-";  
			}  
			infoStr += item;  
		}  
		return infoStr;
	}  
	
	infoStr = appendToString(n, infoStr);  
	infoStr = appendToString(d1, infoStr);  
	infoStr = appendToString(d2, infoStr);  

	$("#single_bets_view").prepend(`
		<div class="multiple__items">
			<div class="multiple__head">
				<div class="multiple__left">
					<span class="icons">
						<i class="icon-football"></i>
					</span>
					<span>
						${d3}
					</span>
				</div>
				<a href="#0" class="cros remove-bet-item" elem="${id}">
					<i class="icon-cross"></i>
				</a>
			</div>
			<div class="multiple__point">
				<span class="pbox">
					${o}
				</span>
				<span class="rightname">
					<span class="fc">
						${infoStr}
					</span>
					<span class="point">
						${t}
					</span>
				</span>
			</div>
			<div class="wrapper" style="margin-top:1rem">
				<div class="result" style="display:flex;padding:0">
					<input type="text" class='input-stake' placeholder="stake" odd="${o}" style="background:#000; color:#eee; flex:1;width:50%; padding:8px 10px;outline:none"/>
					<input type="text" class='input-win' placeholder="win" odd="${o}" style="background:#000; color:#eee; flex:1;width:50%; padding:8px 10px;outline:none"/>
				</div>
			</div>
		</div>
	`);
	
	$("#multiple_bets_view").prepend(`
		<div class="multiple__items">
			<div class="multiple__head">
				<div class="multiple__left">
					<span class="icons">
						<i class="icon-football"></i>
					</span>
					<span>
						${d3}
					</span>
				</div>
				<a href="#0" class="cros remove-bet-item" elem="${id}">
					<i class="icon-cross"></i>
				</a>
			</div>
			<div class="multiple__point">
				<span class="pbox m_odd">
					${o}
				</span>
				<span class="rightname">
					<span class="fc">
						${infoStr}
					</span>
					<span class="point">
						${t}
					</span>
				</span>
			</div>
		</div>
	`);

	calcTotalOdd();
});

function calcTotalOdd() {
	const m_odd = $("#multiple_bets_view .m_odd");
	let totalOdd = 1;
	for(let i = 0; i < m_odd.length; i++) {
		let odd = Number(m_odd[i].innerHTML.trim());
		odd = isNaN(odd) ? 1: odd;
		totalOdd *= odd;
	}
	$("#total_odd").html(totalOdd.toFixed(2));
}
function calcTotalBets() {
	const stakes = $(".input-stake");
	const wins = $(".input-win");
	let totalStake = 0, totalWin = 0, totalPayout = 0;
	for(let i = 0; i < stakes.length; i++) {
		const v = Number(stakes[i].value);
		totalStake += v;
	}
	for(let i = 0; i < wins.length; i++) {
		const v = Number(wins[i].value);
		totalWin += v;
	}
	totalStake = isNaN(totalStake) ? 0 : totalStake;
	totalWin = isNaN(totalWin) ? 0 : totalWin;
	totalPayout = totalStake + totalWin;
	$("#total_stake").html(totalStake.toFixed(3))
	$("#total_win").html(totalWin.toFixed(3))
	$("#total_payout").html(totalPayout.toFixed(3))
}

function calcMTotalBet() {
	let stake = (Number)($("#minput-stake").val());
	let win = (Number)($("#minput-win").val());
	let odd = (Number)($("#total_odd").html()) - 1;
	win = odd * stake;
	$('#minput-win').val(win.toFixed(3)); // Set 'a1' value 
	$("#mtotal_stake").html(stake.toFixed(3))
	$("#mtotal_win").html(win.toFixed(3))
	$("#mtotal_payout").html((stake+win).toFixed(3))
}
$("#single_bets_view").on("input",".input-stake", function(e) {
	const o = Number($(this).attr("odd")) - 1;
	const v = Number($(this).val());
	let win = (o * v).toFixed(3);
	win = isNaN(win) ? 0 : win;
	$(this).closest('div').find('.input-win').val(win); // Set 'a1' value 

	calcTotalBets();
});

$("#multiple_bets_view").on("input","#minput-stake", function(e) {
	const o = Number($("#total_odd").html()) - 1;
	const v = Number($(this).val());
	let win = (o * v).toFixed(3);
	win = isNaN(win) ? 0 : win;
	$('#minput-win').val(win); // Set 'a1' value 

	calcMTotalBet();
});

$("#single_bets_view").on("input",".input-win", function(e) {
	const o = Number($(this).attr("odd")) - 1;
	const v = Number($(this).val());
	let win = (v / o).toFixed(3);
	win = isNaN(win) ? 0 : win;
	$(this).closest('div').find('.input-stake').val(win); // Set 'a1' value 

	calcTotalBets();
});

$("#multiple_bets_view").on("input","#minput-win", function(e) {
	const o = Number($("#total_odd").html()) - 1;
	const v = Number($(this).val());
	let win = (v / o).toFixed(3);
	win = isNaN(win) ? 0 : win;
	$('#minput-stake').val(win); // Set 'a1' value 

	calcMTotalBet();
});

$("#single_bets_view").on("click",".btn-bet", function(e) {
	const elems = $("#single_bets_view .remove-bet-item");
	const result = [];
	for(let i = 0; i < elems.length; i++) {
		const iid = $(elems[i]).attr("elem");
		const item = $(elems[i]).closest('.multiple__items'); 
		const stakeItem = item.find(".input-stake");
		const stake = Number(stakeItem.val());
		const odd = Number(stakeItem.attr("odd"));
		if(isNaN(stake) || stake == 0 || isNaN(odd) || odd == 0) {
			toastr.error("Stake input error.");
			return;
		}
		
		result.push({
			bid: iid,
			stake,
			odd
		})
	}
	showConfirmAlert("Do you want to place bet", ()=>{
		$.ajax({  
			url: '/api/place_single_bet',  
			type: 'POST',  
			data: {
				data: JSON.stringify(result),
				token
			},  
			success: function(response) {  
				// Use the callback to pass the data to the DataTable  
				if(response.status == 0) {
					toastr.error("Internal server error.");	
					return;
				}
				if(response.status == -1) {
					toastr.error("Odd mismatch error. Rebet and try again");	
					return;
				}
				if(response.status == -2) {
					toastr.error("Duplicated request.");	
					return;
				}
				toastr.info("Betting placed successfully.");
			},  
			error: function(jqXHR, textStatus, errorThrown) {  
			}  
		});  
	});
});

$("#multiple_bets_view").on("click",".btn-bet", function(e) {
	const elems = $("#multiple_bets_view .remove-bet-item");
	const result = [];
	const stake = Number($("#minput-stake").val());
	const odd = Number($("#total_odd").html());
	for(let i = 0; i < elems.length; i++) {
		const iid = $(elems[i]).attr("elem");
		result.push(iid)
	}
	const data = {
		ids: result,
		stake,
		odd,
	}
	if(elems.length <= 1) {
		toastr.error("Please click single tab and place bet there.");
		return;
	}
	if(isNaN(stake)|| stake == 0) {
		toastr.error("Please input stake.");
		return;
	}
	showConfirmAlert("Do you want to place bet", ()=>{
		$.ajax({  
			url: '/api/place_multiple_bet',  
			type: 'POST',  
			data: {
				data: JSON.stringify(data),
				token
			},  
			success: function(response) {  
				// Use the callback to pass the data to the DataTable  
				if(response.status == 0) {
					toastr.error("Internal server error.");	
					return;
				}
				if(response.status == -1) {
					toastr.error("Odd mismatch error. Rebet and try again");	
					return;
				}
				if(response.status == -2) {
					toastr.error("Duplicated request.");	
					return;
				}
				toastr.info("Betting placed successfully.");
			},  
			error: function(jqXHR, textStatus, errorThrown) {  
			}  
		});  
	});
});

$("#single_bets_view").on("click",".remove-bet-item", function(e) {	
	var items = $(this).closest('.multiple__items');  
	var elem_id = $(this).attr("elem")

	items.remove();
	$("#"+elem_id).removeClass("selected")	

	const multis = $("#multiple_bets_view .remove-bet-item");
	for(let i = 0; i < multis.length; i++) {
		const multi = multis[i];
		const eid = $(multi).attr("elem");
		if(eid == elem_id) {
			$(multi).closest('.multiple__items').remove();
			break;
		}
	}

	calcTotalBets();
	calcTotalOdd();
	calcMTotalBet();

	var currentBets = $('#single_bets_view .multiple__items');
	if(currentBets.length == 0) {
		$("#single_bets_view").html(`<div class='empty empty-box-1'>There are no bets on your ticket</div>
	<div class='empty empty-box-2'>Click the odds to add a bet</div>`);
	}
	var cb = $('#multiple_bets_view .multiple__items');
	if(cb.length == 0) {
		$("#multiple_bets_view").html(`<div class='empty empty-box-1'>There are no bets on your ticket</div>
	<div class='empty empty-box-2'>Click the odds to add a bet</div>`);
	}
});

$("#multiple_bets_view").on("click",".remove-bet-item", function(e) {	
	var items = $(this).closest('.multiple__items');  
	var elem_id = $(this).attr("elem")

	items.remove();
	$("#"+elem_id).removeClass("selected")

	const multis = $("#single_bets_view .remove-bet-item");
	for(let i = 0; i < multis.length; i++) {
		const multi = multis[i];
		const eid = $(multi).attr("elem");
		if(eid == elem_id) {
			$(multi).closest('.multiple__items').remove();
			break;
		}
	}

	calcTotalBets();
	calcTotalOdd();
	calcMTotalBet();

	var currentBets = $('#single_bets_view .multiple__items');
	if(currentBets.length == 0) {
		$("#single_bets_view").html(`<div class='empty empty-box-1'>There are no bets on your ticket</div>
	<div class='empty empty-box-2'>Click the odds to add a bet</div>`);
	}
	var cb = $('#multiple_bets_view .multiple__items');
	if(cb.length == 0) {
		$("#multiple_bets_view").html(`<div class='empty empty-box-1'>There are no bets on your ticket</div>
	<div class='empty empty-box-2'>Click the odds to add a bet</div>`);
	}
});

$("#live_data_view").delegate(".handi1","click", function(e) {

});

$("#live_data_view").delegate(".handi2","click", function(e) {

});

$("#live_data_view").delegate(".overgoal","click", function(e) {

});

$("#live_data_view").delegate(".undergoal","click", function(e) {

});

$("#live_data_view").delegate(".full1","click", function(e) {

});

$("#live_data_view").delegate(".fullx","click", function(e) {

});

$("#live_data_view").delegate(".full2","click", function(e) {

});

$("#lightlighttab").click(function (e) {
	sportsSocket.send(JSON.stringify({
		sid: 1,
		type: "live",
		allow: "both"
	}))
});

$("#lightlighttab2tennis").click(function (e) {
	sportsSocket.send(JSON.stringify({
		sid: 13,
		type: "live",
		allow: "both"
	}))
});

$("#lightlighttab3basket").click(function (e) {
	sportsSocket.send(JSON.stringify({
		sid: 18,
		type: "live",
		allow: "both"
	}))
});

$("#lightlighttabvolly").click(function (e) {
	sportsSocket.send(JSON.stringify({
		sid: 91,
		type: "live",
		allow: "both"
	}))
});

$("#lightlighttab5cricket").click(function (e) {
	sportsSocket.send(JSON.stringify({
		sid: 3,
		type: "live",
		allow: "both"
	}))
});

$("#lightlighttab6ttenis").click(function (e) {
	sportsSocket.send(JSON.stringify({
		sid: 92,
		type: "live",
		allow: "both"
	}))
});

$("#lightlight7baseball").click(function (e) {
	sportsSocket.send(JSON.stringify({
		sid: 16,
		type: "live",
		allow: "both"
	}))
});

$("#nextgofootball").click(function (e) {
	sportsSocket.send(JSON.stringify({
		sid: 1,
		type: "prematch",
		allow: "both"
	}))
});

$("#nextgotennis").click(function (e) {
	sportsSocket.send(JSON.stringify({
		sid: 13,
		type: "prematch",
		allow: "both"
	}))
});

$("#nextgobasketball").click(function (e) {
	sportsSocket.send(JSON.stringify({
		sid: 18,
		type: "prematch",
		allow: "both"
	}))
});

$("#nextgovolleyball").click(function (e) {
	sportsSocket.send(JSON.stringify({
		sid: 91,
		type: "prematch",
		allow: "both"
	}))
});

$("#nextgocricket").click(function (e) {
	sportsSocket.send(JSON.stringify({
		sid: 3,
		type: "prematch",
		allow: "both"
	}))
});

$("#nextgottennis").click(function (e) {
	sportsSocket.send(JSON.stringify({
		sid: 92,
		type: "prematch",
		allow: "both"
	}))
});

$("#nextgobaseball").click(function (e) {
	sportsSocket.send(JSON.stringify({
		sid: 16,
		type: "prematch",
		allow: "both"
	}))
});

$("#main-tab-home").click(function(e) {
	$(".main-nav-button").removeClass("active");
	$(this).addClass("active");

	const d = `<div class="match__fixing__wrap top__bottom__space left__right__space owl-theme owl-carousel" id="topMatches">
		<a href="#0" class="match__fixing__items">
			<div class="match__head">
				<div class="match__head__left">
					<span class="icons">
						<i class="icon-football"></i>
					</span>
					<span>
						World Cup 2022
					</span>
				</div>
				<span class="today">
					Today / 22:00
				</span>
			</div>
			<div class="match__vs">
				<div class="match__vs__left">
					<span>
						Argentina
					</span>
					<span class="flag">
						<img src="assets/img/matchfixing/arjentina.png" alt="flag">
					</span>
				</div>
				<span class="vs">
					Vs
				</span>
				<div class="match__vs__left">
					<span class="flag">
						<img src="assets/img/matchfixing/france.png" alt="flag">
					</span>
					<span>
						France
					</span>
				</div>
			</div>
			<div class="match__result">
				<span class="matchborder"></span>
				<span class="match__text">
					Match Reult
				</span>
			</div>
			<ul class="match__point">
				<li>
					<span>1</span>
					<span>8.55</span>
				</li>
				<li>
					<span>X</span>
					<span>6.50</span>
				</li>
				<li>
					<span>2</span>
					<span>3.20</span>
				</li>
			</ul>
		</a>
		<a href="#0" class="match__fixing__items">
			<div class="match__head">
				<div class="match__head__left">
					<span class="icons">
						<i class="icon-football"></i>
					</span>
					<span>
						World Cup 2022
					</span>
				</div>
				<span class="today">
					Today / 2:00
				</span>
			</div>
			<div class="match__vs">
				<div class="match__vs__left">
					<span>
						Poland
					</span>
					<span class="flag">
						<img src="assets/img/matchfixing/poland.png" alt="flag">
					</span>
				</div>
				<span class="vs">
					Vs
				</span>
				<div class="match__vs__left">
					<span class="flag">
						<img src="assets/img/matchfixing/denmark.png" alt="flag">
					</span>
					<span>
						Denmark
					</span>
				</div>
			</div>
			<div class="match__result">
				<span class="matchborder"></span>
				<span class="match__text">
					Match Reult
				</span>
			</div>
			<ul class="match__point">
				<li>
					<span>1</span>
					<span>3.55</span>
				</li>
				<li>
					<span>X</span>
					<span>4.50</span>
				</li>
				<li>
					<span>2</span>
					<span>2.20</span>
				</li>
			</ul>
		</a>
		<a href="#0" class="match__fixing__items">
			<div class="match__head">
				<div class="match__head__left">
					<span class="icons">
						<i class="icon-football"></i>
					</span>
					<span>
						World Cup 2022
					</span>
				</div>
				<span class="today">
					Today / 22:00
				</span>
			</div>
			<div class="match__vs">
				<div class="match__vs__left">
					<span>
						Mexico
					</span>
					<span class="flag">
						<img src="assets/img/matchfixing/maxico.png" alt="flag">
					</span>
				</div>
				<span class="vs">
					Vs
				</span>
				<div class="match__vs__left">
					<span class="flag">
						<img src="assets/img/matchfixing/poland.png" alt="flag">
					</span>
					<span>
						Poland
					</span>
				</div>
			</div>
			<div class="match__result">
				<span class="matchborder"></span>
				<span class="match__text">
					Match Reult
				</span>
			</div>
			<ul class="match__point">
				<li>
					<span>1</span>
					<span>8.55</span>
				</li>
				<li>
					<span>X</span>
					<span>9.50</span>
				</li>
				<li>
					<span>2</span>
					<span>5.20</span>
				</li>
			</ul>
		</a>
		<a href="#0" class="match__fixing__items">
			<div class="match__head">
				<div class="match__head__left">
					<span class="icons">
						<i class="icon-football"></i>
					</span>
					<span>
						WEFA
					</span>
				</div>
				<span class="today">
					Tomorrow / 01:00
				</span>
			</div>
			<div class="match__vs">
				<div class="match__vs__left">
					<span>
						Farense
					</span>
					<span class="flag">
						<img src="assets/img/matchfixing/farense.png" alt="flag">
					</span>
				</div>
				<span class="vs">
					Vs
				</span>
				<div class="match__vs__left">
					<span class="flag">
						<img src="assets/img/matchfixing/tenerif.png" alt="flag">
					</span>
					<span>
						Tenerife
					</span>
				</div>
			</div>
			<div class="match__result">
				<span class="matchborder"></span>
				<span class="match__text">
					Match Reult
				</span>
			</div>
			<ul class="match__point">
				<li>
					<span>1</span>
					<span>1.55</span>
				</li>
				<li>
					<span>X</span>
					<span>8.50</span>
				</li>
				<li>
					<span>2</span>
					<span>3.20</span>
				</li>
			</ul>
		</a>
		<a href="#0" class="match__fixing__items">
			<div class="match__head">
				<div class="match__head__left">
					<span class="icons">
						<i class="icon-football"></i>
					</span>
					<span>
						EFL Trophy
					</span>
				</div>
				<span class="today">
					Tomorrow / 01:00
				</span>
			</div>
			<div class="match__vs">
				<div class="match__vs__left">
					<span>
						Tenerife
					</span>
					<span class="flag">
						<img src="assets/img/matchfixing/tenerif.png" alt="flag">
					</span>
				</div>
				<span class="vs">
					Vs
				</span>
				<div class="match__vs__left">
					<span class="flag">
						<img src="assets/img/matchfixing/oviedo.png" alt="flag">
					</span>
					<span>
						Real Oviedo
					</span>
				</div>
			</div>
			<div class="match__result">
				<span class="matchborder"></span>
				<span class="match__text">
					Match Reult
				</span>
			</div>
			<ul class="match__point">
				<li>
					<span>1</span>
					<span>3.55</span>
				</li>
				<li>
					<span>X</span>
					<span>9.50</span>
				</li>
				<li>
					<span>2</span>
					<span>6.20</span>
				</li>
			</ul>
		</a>
		<a href="#0" class="match__fixing__items">
			<div class="match__head">
				<div class="match__head__left">
					<span class="icons">
						<i class="icon-football"></i>
					</span>
					<span>
						World Cup 2022
					</span>
				</div>
				<span class="today">
					Today / 22:00
				</span>
			</div>
			<div class="match__vs">
				<div class="match__vs__left">
					<span>
						Australia
					</span>
					<span class="flag">
						<img src="assets/img/matchfixing/aus.png" alt="flag">
					</span>
				</div>
				<span class="vs">
					Vs
				</span>
				<div class="match__vs__left">
					<span class="flag">
						<img src="assets/img/matchfixing/tunisia.png" alt="flag">
					</span>
					<span>
						Tunisia
					</span>
				</div>
			</div>
			<div class="match__result">
				<span class="matchborder"></span>
				<span class="match__text">
					Match Reult
				</span>
			</div>
			<ul class="match__point">
				<li>
					<span>1</span>
					<span>3.55</span>
				</li>
				<li>
					<span>X</span>
					<span>4.50</span>
				</li>
				<li>
					<span>2</span>
					<span>2.20</span>
				</li>
			</ul>
		</a>
		</div>
		<div class="main__body__wrap left__right__space">
		<!--Live__heightlight Here-->
		<div class="live__heightlight mb__30">
			<div class="section__title">
				<h4>
					Live Highlights
				</h4>
			</div>
			<div class="heightlight__tab">
				<div class="nav b__bottom" id="nav-tabheight" role="tablist">
					<button class="nav-link active" id="lightlighttab" data-bs-toggle="tab" data-bs-target="#height1" type="button" role="tab" aria-selected="true">
					<span class="icons">
						<i class="icon-football"></i>
					</span>
					<span>
						Football
					</span>
					</button>
					<button class="nav-link " id="lightlighttab2tennis" data-bs-toggle="tab" data-bs-target="#height2tennis" type="button" role="tab" aria-selected="false">
						<span class="icons">
							<i class="icon-tennis"></i>
						</span>
						<span>
							Tennis
						</span>
					</button>
					<button class="nav-link " id="lightlighttab3basket" data-bs-toggle="tab" data-bs-target="#basketbtab" type="button" role="tab" aria-selected="false">
						<span class="icons">
							<i class="icon-basketball"></i>
						</span>
						<span>
							Basketball
						</span>
					</button>
					<button class="nav-link " id="lightlighttabvolly" data-bs-toggle="tab" data-bs-target="#vollyballs" type="button" role="tab" aria-selected="false">
						<span class="icons">
							<i class="icon-volly"></i>
						</span>
						<span>
							Volleyball
						</span>
					</button>
					<button class="nav-link " id="lightlighttab5cricket" data-bs-toggle="tab" data-bs-target="#crickettab" type="button" role="tab" aria-selected="false">
						<span class="icons">
							<i class="icon-cricket"></i>
						</span>
						<span>
							Cricket
						</span>
					</button>
					<button class="nav-link " id="lightlighttab6ttenis" data-bs-toggle="tab" data-bs-target="#tabletennis" type="button" role="tab" aria-selected="false">
						<span class="icons">
							<i class="icon-ttennis"></i>
						</span>
						<span>
							Table Tennis
						</span>
					</button>
					<button class="nav-link " id="lightlight7baseball" data-bs-toggle="tab" data-bs-target="#tablebaseball" type="button" role="tab" aria-selected="false">
						<span class="icons">
							<i class="icon-baseball"></i>
						</span>
						<span>
							Base Ball
						</span>
					</button>
				</div>
			</div>
			<div class="height__table">
				<div class="tab-content" id="nav-tabContentheight">
					<!--Football-->
					<div class="tab-pane fade text-white show active" id="height1" role="tabpanel" aria-labelledby="nav-home-tabpre" tabindex="0">
						<div class="main__table">
							<div class="table__wrap" id="live_data_view">                                                                                                                                                                
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="live__heightlight mb__30">
			<div class="section__title">
				<h4>
					Next To Go
				</h4>
			</div>
			<div class="heightlight__tab nexttogo__tab">
				<div class="nav pt-20" id="nav-tabheightnextgo" role="tablist">
					<button class="nav-link active" id="nextgofootball" data-bs-toggle="tab" data-bs-target="#nextgofootballtab" type="button" role="tab" aria-selected="true">
					<span class="icons">
						<i class="icon-football"></i>
					</span>
					<span>
						Football
					</span>
					</button>
					<button class="nav-link " id="nextgotennis" data-bs-toggle="tab" data-bs-target="#nextgotennistab" type="button" role="tab" aria-selected="false">
						<span class="icons">
							<i class="icon-tennis"></i>
						</span>
						<span>
							Tennis
						</span>
					</button>
					<button class="nav-link " id="nextgobasketball" data-bs-toggle="tab" data-bs-target="#nextgobasketballtab" type="button" role="tab" aria-selected="false">
						<span class="icons">
							<i class="icon-basketball"></i>
						</span>
						<span>
							Basketball
						</span>
					</button>
					<button class="nav-link " id="nextgovolleyball" data-bs-toggle="tab" data-bs-target="#nextgovolleyballtab" type="button" role="tab" aria-selected="false">
						<span class="icons">
							<i class="icon-volly"></i>
						</span>
						<span>
							Volleyball
						</span>
					</button>
					<button class="nav-link " id="nextgocricket" data-bs-toggle="tab" data-bs-target="#nextgocrickettab" type="button" role="tab" aria-selected="false">
						<span class="icons">
							<i class="icon-criket"></i>
						</span>
						<span>
							Cricket
						</span>
					</button>
					<button class="nav-link " id="nextgottennis" data-bs-toggle="tab" data-bs-target="#nextgottennistab" type="button" role="tab" aria-selected="false">
						<span class="icons">
							<i class="icon-ttennis"></i>
						</span>
						<span>
							Table Tennis
						</span>
					</button>
					<button class="nav-link " id="nextgobaseball" data-bs-toggle="tab" data-bs-target="#nextgobaseballtab" type="button" role="tab" aria-selected="false">
						<span class="icons">
							<i class="icon-baseball"></i>
						</span>
						<span>
							Base Ball
						</span>
					</button>
				</div>
			</div>
			<div class="height__table">
				<div class="tab-content" id="nav-tabContentheightnext">
					<div class="tab-pane fade text-white show active" id="nextgofootballtab" role="tabpanel" aria-labelledby="nav-home-tabpre" tabindex="0">
						<div class="main__table">
							<div class="table__wrap" id="prematch_data_view">
								
							</div>
						</div>
					</div>                                                                    
				</div>
			</div>
		</div>                                                      
		</div>`;
	
	
})

$("#main-tab-live").click(function(e) {
	$(".main-nav-button").removeClass("active");
	$(this).addClass("active");
})

$("#main-tab-today").click(function(e) {
	$(".main-nav-button").removeClass("active");
	$(this).addClass("active");
})


$("#main-tab-league").click(function(e) {
	$(".main-nav-button").removeClass("active");
	$(this).addClass("active");
})


$("#main-tab-result").click(function(e) {
	$(".main-nav-button").removeClass("active");
	$(this).addClass("active");
})

$("#main-tab-history").click(function(e) {
	$(".main-nav-button").removeClass("active");
	$(this).addClass("active");
})

$("#remove_all_bets").click(function(e) {
	showConfirmAlert('Do you want to remove all betting in your ticket?', ()=>{
		$("#single_bets_view").empty();
		$("#multiple_bets_view").empty();

		$("#single_bets_view").append(`
			<div class='empty empty-box-1'>There are no bets on your ticket</div>
			<div class='empty empty-box-2'>Click the odds to add a bet</div>
		`);
		
		$("#multiple_bets_view").append(`
			<div class='empty empty-box-1'>There are no bets on your ticket</div>
			<div class='empty empty-box-2'>Click the odds to add a bet</div>
		`);
		$(".bet-btn").removeClass('selected')
	})
	
})
})


function showConfirmAlert(title, callback) {
	Swal.fire({
		text: title,
		icon: "question",
		showCancelButton: !0,
		confirmButtonText: "Ok",
		cancelButtonText: "Cancel",
	}).then(function (t) {
		if (t.value) {
			callback();
		}
	});
  }
  