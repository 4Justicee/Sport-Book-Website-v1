function formatSeconds(seconds) {  
	const minutes = Math.floor(seconds / 60);  
	const remainingSeconds = seconds % 60;  

	// Pad minutes and seconds with leading zeros if less than 10  
	const formattedMinutes = String(minutes).padStart(2, '0');  
	const formattedSeconds = String(remainingSeconds).padStart(2, '0');  

	return `${formattedMinutes}:${formattedSeconds}`;  
} 

function get1X2(odds, home, away) {
	let hwin=-1, draw=-1, awin=-1;
	for(let j = 0; j < odds.length; j++) {
		if(odds[j].name == "Fulltime Result") {
			const os = odds[j].odds;
			for(let k = 0; k < os.length; k++) {
				if(os[k].name == home) {
					hwin = os[k].odds;
				}
				if(os[k].name == away) {
					awin = os[k].odds;
				}
				if(os[k].name == "Draw") {
					draw = os[k].odds;
				}
			}
		}
	}
	return {hwin, draw, awin};
}

function getMatchGoals(odds) {
	let overodd = -1, underodd = -1, goal = -1;
	for(let j = 0; j < odds.length; j++) {
		if(odds[j].name == "Match Goals") {
			const os = odds[j].odds;
			for(let k = 0; k < os.length; k++) {
				if(os[k].header == "Over") {
					overodd = os[k].odds;
				}
				if(os[k].header == "Under") {
					underodd = os[k].odds;
				}
				goal = os[k].name;
			}
		}
	}
	return {goal, overodd, underodd};
}

function getHandicaps(odds, home, away) {
	let h_hand = -1, a_hand = -1, h_odd = -1, a_odd = -1;
	for(let j = 0; j < odds.length; j++) {
		if(odds[j].name.search("Asian Handicap") != -1) {
			const os = odds[j].odds;
			for(let k = 0; k < os.length; k++) {
				if(os[k].header == home) {
				   h_odd = os[k].odds;
				   h_hand = os[k].name;
				}
				if(os[k].header == away) {
					a_odd = os[k].odds;
					a_hand = os[k].name;
				}
			}
		}
	}
	return {h_hand, a_hand, h_odd, a_odd};
}
