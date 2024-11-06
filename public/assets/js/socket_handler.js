function handleSoccerLive(odds, data, idx, fav = 0) {
  const o1x2 = get1X2(odds, data.home_name, data.away_name);
  const go = getMatchGoals(odds);
  const handis = getHandicaps(odds, data.home_name, data.away_name);
  const elapse = data.updated_at - data.time < 0 ? 0 : data.updated_at - data.time;
  const time_str = formatSeconds(elapse);
  const scores = (data['ss'] == null) ? "0-0" : data['ss'];
  const id = data.id;
  const simpleObj = JSON.stringify({h: data.home_name, a: data.away_name, t: time_str, scores, odd: o1x2});
  const starElem = (fav == 0) ? `<img class='star-off hand inplay_likestar' src="/assets/img/logo/star_off.png" tid="${id}" data='${simpleObj}' width='24'/>`:`<img class="hand inplay_removestar" tid="${id}" src="/assets/img/logo/star_on.png" width='22'/>`;
  
  const a = $(`#tr-${id}`);
  if(a.length == 0) {                             
      $(`#live_data_view .table__items:nth-child(${idx+1})`).after(`
      <div class="table__items b__bottom" id="tr-${id}" style="display:${idx > 5?'none':'flex'}">
          <div class="t__items">
              <div class="t__items__left">
                  <h6 class='home_name'>
                      ${data.home_name}
                  </h6>
                  <span class="text away_name">
                      ${data.away_name}
                  </span>            
                  <p>
                      <a href="#0">
                          Live
                      </a>
                      <span class='time-view'>
                      ${time_str}
                      </span>
                  </p>
              </div>
          </div>
          <div class="cart__point">
              <span class='scores'>
              ${scores}                 
              </span>
          </div>
          <div class="mart__point__items">        
              <a class="point__box full1 bet-btn" groupNo="${idx}0" id='idl-${id}-${o1x2.hid}' mid="${id}" n="Fulltime Result" t="${data.home_name}" d3="${data.home_name} vs ${data.away_name}" o="${o1x2.hwin}">
                  ${o1x2.hwin == -1 ? `<i class="icon-lock"></i>` : o1x2.hwin}
              </a>
              <a class="point__box fullx bet-btn" groupNo="${idx}0" id='idl-${id}-${o1x2.did}' mid="${id}" n="Fulltime Result" t="Draw" o="${o1x2.draw}" d3="${data.home_name} vs ${data.away_name}">
                  ${o1x2.draw == -1 ? `<i class="icon-lock"></i>` : o1x2.draw}
              </a>
              <a class="point__box full2 bet-btn" groupNo="${idx}0" id='idl-${id}-${o1x2.aid}' mid="${id}" n="Fulltime Result" t="${data.away_name}" o="${o1x2.awin}" d3="${data.home_name} vs ${data.away_name}">
                  ${o1x2.awin == -1 ? `<i class="icon-lock"></i>` : o1x2.awin}
              </a>
       
              <a class="point__box overgoal bet-btn" groupNo="${idx}1" id='idl-${id}-${go.oid}' mid="${id}" n="Match Goals" t="${data.home_name}" d1="${go.goal}" d2="Over" d3="${data.home_name} vs ${data.away_name}" o="${go.overodd}">
              ${go.goal == -1 ? `<i class="icon-lock"></i>`: `<span class='point__box_addinfo goal'>${go.goal}</span>
                  <span class='overodd'>${go.overodd}</span>`}
              </a>
              <a class="point__box undergoal bet-btn" groupNo="${idx}1" id='idl-${id}-${go.uid}' mid="${id}" n="Match Goals" t="${data.away_name}" d1="${go.goal}" d2="Under" o="${go.underodd}" d3="${data.home_name} vs ${data.away_name}">
                  ${go.goal == -1 ? `<i class="icon-lock"></i>`: `<span class='point__box_addinfo goal'>${go.goal}</span>
                  <span class='underodd'>${go.underodd}</span>`}
              </a>
      
              <a class="point__box handi1 bet-btn" groupNo="${idx}2" id='idl-${id}-${handis.id1}' mid="${id}" n="Asian Handicap" t="${data.home_name}" d1="${handis.h_hand}" o="${handis.h_odd}" d3="${data.home_name} vs ${data.away_name}"> 
                  ${handis.h_hand == -1 ? `<i class="icon-lock"></i>`: `<span class='point__box_addinfo handivalue1'>${handis.h_hand}</span><span class='handi1odd'>${handis.h_odd}</span>`}

              </a>
              <a class="point__box handi2 bet-btn" groupNo="${idx}2" id='idl-${id}-${handis.id2}' mid="${id}" n="Asian Handicap" t="${data.away_name}" d1="${handis.a_hand}" o="${handis.a_odd}" d3="${data.home_name} vs ${data.away_name}">    
                  ${handis.a_hand == -1 ? `<i class="icon-lock"></i>`: `<span class='point__box_addinfo handivalue2'>${handis.a_hand}</span><span class='handi2odd'>${handis.a_odd}</span>`}
              </a>
          </div>
          <div class="mart__point__right">        
              <a class="point__box bg__none">
                  <span class='star_elem'>${starElem}</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span class='hand inplay_detail_view_btn' tid="${id}"><i class="fas fa-angle-right" ></i></span>
              </a>
          </div>
      </div>`)
  }
  else {                   
      $(`#tr-${id} .home_name`).html(data.home_name);
      $(`#tr-${id} .away_name`).html(data.away_name);
      $(`#tr-${id} .time_view`).html(time_str);
      $(`#tr-${id} .scores`).html(scores);
      $(`#tr-${id} .full1`).html(o1x2.hwin == -1 ? `<i class="icon-lock"></i>` : o1x2.hwin);
      $(`#tr-${id} .fullx`).html(o1x2.draw == -1 ? `<i class="icon-lock"></i>` : o1x2.draw);
      $(`#tr-${id} .full2`).html(o1x2.awin == -1 ? `<i class="icon-lock"></i>` : o1x2.awin);

      $(`#tr-${id} .overgoal`).html(go.goal == -1 ? `<i class="icon-lock"></i>`: `<span class='point__box_addinfo goal'>${go.goal}</span><span class='overodd'>${go.overodd}</span>`);
      $(`#tr-${id} .undergoal`).html(go.goal == -1 ? `<i class="icon-lock"></i>`: `<span class='point__box_addinfo goal'>${go.goal}</span><span class='underodd'>${go.underodd}</span>`);

      $(`#tr-${id} .handi1`).html(handis.h_hand == -1 ? `<i class="icon-lock"></i>`: `<span class='point__box_addinfo handivalue1'>${handis.h_hand}</span><span class='handi1odd'>${handis.h_odd}</span>`);
      $(`#tr-${id} .handi2`).html(handis.a_hand == -1 ? `<i class="icon-lock"></i>`: `<span class='point__box_addinfo handivalue2'>${handis.a_hand}</span><span class='handi2odd'>${handis.a_odd}</span>`);
      $(`#tr-${id} .star_elem`).html(starElem);
  }   
}

function makeHeader(sport_id) {
  if(sport_id == 1) {
    const check = $(`#live_data_view .table__footer`);
    if(check.length == 0) {
      $(`#live_data_view`).append(`<div class="table__items table__pointnone__items"><div class="t__items"><div class="t__items__left"></div></div><div class="cart__point"></div><div class="mart__point__items"><a href="#0box" class="point__box bg__none">1</a><a href="#0box" class="point__box bg__none">X</a><a href="#0box" class="point__box bg__none">2</a></div><div class="mart__point__items"><a href="#0box" class="point__box bg__none">Over</a><a href="#0box" class="point__box bg__none">Under</a></div><div class="mart__point__items"><a href="#0box" class="point__box bg__none">Handicap</a><a href="#0box" class="point__box bg__none"></a></div><div class="mart__point__right" style="min-width: 65px;"></div></div>`);

      $(`#live_data_view`).append(`<div class="table__footer table__footer__nextgo"><a id="show_all_live" class="lobby hand"><span>Show more</span><span class="icons"><i class="fas fa-chevron-down"></i></span></a></div>`);
    }
  }
}

const options = {   
  month: '2-digit',   
  day: '2-digit',   
  hour: '2-digit',   
  minute: '2-digit'
};  

function handleSoccerPrematch(data, idx) {
  const id = data.id;
  const away_name = data.away_name;
  const home_name = data.home_name;
  const odds = data.data;
  if(odds == null)
      return;
  const utcDate = new Date(data.time_str);  
  const localTimeString = utcDate.toLocaleString(undefined, options);

  let hwin = -1, draw = -1, awin = -1, overodd = -1, goal = -1, underodd = -1; 
  let hid, did, aid, oid, uid, id1, id2;
  let hodd1 = -1, hodd2 = -1, handi1 = -1, handi2 = -1;
  if(odds.main != undefined) {
    if(odds.main.sp.full_time_result != undefined) {
      hwin = odds.main.sp.full_time_result.odds[0].odds;
      hid = odds.main.sp.full_time_result.odds[0].id;
      draw = odds.main.sp.full_time_result.odds[1].odds;
      did = odds.main.sp.full_time_result.odds[1].id;
      awin = odds.main.sp.full_time_result.odds[2].odds;
      aid = odds.main.sp.full_time_result.odds[2].id;
    }

    if(odds.main.sp.goals_over_under != undefined) {
      overodd = odds.main.sp.goals_over_under.odds[0].odds;
      oid = odds.main.sp.goals_over_under.odds[0].id;
      underodd = odds.main.sp.goals_over_under.odds[1].odds;
      uid = odds.main.sp.goals_over_under.odds[1].id;
      goal = odds.main.sp.goals_over_under.odds[0].name;
    } 

    if(odds.main.sp.asian_handicap != undefined) {
      hodd1 = odds.main.sp.asian_handicap.odds[0].odds;
      id1 = odds.main.sp.asian_handicap.odds[0].id;
      hodd2 = odds.main.sp.asian_handicap.odds[1].odds;
      id2 = odds.main.sp.asian_handicap.odds[1].id;

      handi1 = odds.main.sp.asian_handicap.odds[0].handicap;
      handi2 = odds.main.sp.asian_handicap.odds[1].handicap;
    }
  }
  const a = $(`#trr-${id}`);
  if(a.length == 0) {               
    $(`#prematch_data_view`).append(`<div class="table__items b__bottom" id="trr-${id}">
      <div class="t__items">
        <div class="t__items__left t__items__left__nextogo">
          <div class="t__items__icon">
              <i class="icon-tennis"></i>
          </div>
          <div class="content">
              <h6 class='home'>
                  ${home_name}
              </h6>
              <span class="text away">
                  ${away_name}
              </span>
          </div>
        </div>
      </div>
      <div class="mart__point__two mart__pint__nextgo">
        <div class="mart__point__left">
            <a href="#box" class="point__box homewin bet-btn" groupNo="${id}0" id='idp-${id}-${hid}' mid="${id}" n="Fulltime Result" t="${home_name}" o="${hwin}" d3="${home_name} vs ${away_name}">
              ${hwin == -1 ? `<i class="icon-lock"></i>`: `<span class="point__1">1</span><span>${hwin}</span>`}                                
            </a>
            <a href="#box" class="point__box draw bet-btn" groupNo="${id}0" id='idp-${id}-${did}' mid="${id}" n="Fulltime Result" t="Draw" o="${draw}" d3="${home_name} vs ${away_name}">
                ${draw == -1 ? `<i class="icon-lock"></i>`: `<span class="point__1">X</span><span>${draw}</span>`}                  
            </a>
            <a href="#box" class="point__box awaywin bet-btn" groupNo="${id}0" id='idp-${id}-${aid}' mid="${id}" n="Fulltime Result" t="${away_name}" o="${awin}" d3="${home_name} vs ${away_name}">
                ${awin == -1 ? `<i class="icon-lock"></i>`: `<span class="point__1">2</span><span>${awin}</span>`}                  
            </a>
            <a href="#box" class="point__box goalover bet-btn" groupNo="${id}1" id='idp-${id}-${oid}' mid="${id}" n="Match Goals" t="${home_name}" d1="${goal}" d2="Over" d3="${home_name} vs ${away_name}" o="${overodd}">
                ${goal == -1 ? `<i class="icon-lock"></i>`: `<span class="point__1">${goal}&nbsp;Over</span><span>${overodd}</span>`}                  
            </a>
            <a href="#box" class="point__box goalunder bet-btn" groupNo="${id}1" id='idp-${id}-${uid}' mid="${id}" n="Match Goals" t="${away_name}" d1="${goal}" d2="Under" o="${underodd}" d3="${home_name} vs ${away_name}">
                ${goal == -1 ? `<i class="icon-lock"></i>`: `<span class="point__1">${goal}&nbsp;Under</span><span>${underodd}</span>`}                  
            </a>
            <a href="#box" class="point__box hodd1 bet-btn" groupNo="${id}2" id='idp-${id}-${id1}' mid="${id}" n="Asian Handicap" t="${home_name}" d1="${handi1}" o="${hodd1}" d3="${home_name} vs ${away_name}">
                ${hodd1 == -1 ? `<i class="icon-lock"></i>`: `<span class="point__1">${handi1}</span><span>${hodd1}</span>`}                  
            </a>
            <a href="#box" class="point__box hodd2 bet-btn" groupNo="${id}2" id='idp-${id}-${id2}' mid="${id}" n="Asian Handicap" t="${away_name}" d1="${handi2}" o="${hodd2}" d3="${home_name} vs ${away_name}">
                ${hodd2 == -1 ? `<i class="icon-lock"></i>`: `<span class="point__1">${handi2}</span><span>${hodd2}</span>`}                  
            </a>
        </div>
        <div class="mart__point__right prematch_detail_view_btn hand" tid="${id}">
            <a href="#min" class="point__box-text point__box__nextto">
            <span class='timestr'> ${localTimeString}</span>
            <span class='icon'><i class="fas fa-angle-right"></i></span>
            </a>
        </div>
      </div>
    </div>`);
  }
  else {
    $(`#trr-${id} .home`).html(home_name);
    $(`#trr-${id} .away`).html(away_name);
    $(`#trr-${id} .homewin`).html(hwin == -1 ? `<i class="icon-lock"></i>`: `<span class="point__1">1</span><span>${hwin}</span>`);
    $(`#trr-${id} .draw`).html(draw == -1 ? `<i class="icon-lock"></i>`: `<span class="point__1">X</span><span>${draw}</span>`);
    $(`#trr-${id} .awaywin`).html(awin == -1 ? `<i class="icon-lock"></i>`: `<span class="point__1">2</span><span>${awin}</span>`);

    $(`#trr-${id} .goalover`).html(goal == -1 ? `<i class="icon-lock"></i>`: `<span class="point__1">${goal}&nbsp;Over</span><span>${overodd}</span>`);
    $(`#trr-${id} .goalunder`).html(goal == -1 ? `<i class="icon-lock"></i>`: `<span class="point__1">${goal}&nbsp;Under</span><span>${underodd}</span>`);
    $(`#trr-${id} .timestr`).html(localTimeString);

    $(`#trr-${id} .hodd1`).html(hodd1 == -1 ? `<i class="icon-lock"></i>`: `<span class="point__1">${handi1}</span><span>${hodd1}</span>`);
    $(`#trr-${id} .hodd2`).html(hodd2 == -1 ? `<i class="icon-lock"></i>`: `<span class="point__1">${handi2}</span><span>${hodd2}</span>`);
  }
}

function handleTopMatch(data) {
  let nNewAdd = 0;
  for(let i = 0; i < data.length; i++) {
    const d = data[i];            
    const odds = d.data?.main?.sp;           
    if(odds == null)
        continue;
    const r = odds.full_time_result;
    let hwin = -1, draw = -1, awin = -1;
    let hid, did;
    if(r != undefined) {
      hwin = r.odds[0].odds;
      hid = r.odds[0].id;
      draw = r.odds[1].odds;
      did = r.odds[1].id;
      awin = r.odds[2].odds;
      aid = r.odds[2].id;
    }
    // Convert it to a Date object  
	let dateObj = new Date(d.time_str);  
	let options = {  
		weekday: 'long',   // long name of the day  
		year: 'numeric',   // numeric year  
		month: 'long',     // long name of month  
		day: 'numeric',    // numeric day of the month  
		hour: 'numeric',   // numeric hour  
		minute: 'numeric', // numeric minutes  
		timeZoneName: 'short' // short name of the time zone  
	};  

	// Format the date to the local timezone  
	let formattedDate = dateObj.toLocaleString('en-US', options);  

    const a = $(`#topMatches #trt-${d.id}`);
    if(a.length == 0) {
      $("#topMatches").append(`<a href="#0" class="match__fixing__items" id='trt-${d.id}'>
        <div class="match__head">
            <div class="match__head__left">
                <span class="icons">
                    <i class="icon-football"></i>
                </span>
                <span>
                    ${d.league_name}
                </span>
            </div>
            <span class="today">
                ${formattedDate}
            </span>
        </div>
        <div class="match__vs">
            <div class="match__vs__left">
                <span>
                    ${d.home_name}
                </span>
                <span class="flag">
                    <img src="assets/img/matchfixing/arjentina.png" alt="flag">
                </span>
            </div>
            <span class="vs">
                vs
            </span>
            <div class="match__vs__left">
                <span class="flag">
                    <img src="assets/img/matchfixing/france.png" alt="flag">
                </span>
                <span>
                    ${d.away_name}
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
            <li class='bet-btn' groupNo="${d.id}" id='idp-${d.id}-${hid}-t' mid="${d.id}" n="Fulltime Result" t="${d.home_name}" o="${hwin}" d3="${d.home_name} vs ${d.away_name}">
                <span>1</span>
                <span class='homewin1'>${hwin}</span>
            </li>
            <li class='bet-btn' groupNo="${d.id}" id='idp-${d.id}-${did}-t' mid="${d.id}" n="Fulltime Result" t="Draw" o="${draw}" d3="${d.home_name} vs ${d.away_name}">
                <span>x</span>
                <span class='draw1'>${draw}</span>
            </li>
            <li class='bet-btn' groupNo="${d.id}" id='idp-${d.id}-${aid}-t' mid="${d.id}" n="Fulltime Result" t="${d.away_name}" o="${awin}" d3="${d.home_name} vs ${d.away_name}">
                <span>2</span>
                <span class='awaywin1'>${awin}</span>
            </li>
        </ul>
      </a>`);      
      nNewAdd = 1;
    }
    else {
      $(`#trt-${d.id} .homewin1`).html(hwin == -1 ? `<i class="icon-lock"></i>`: `${hwin}`);
      $(`#trt-${d.id} .draw1`).html(draw == -1 ? `<i class="icon-lock"></i>`: `${draw}`);
      $(`#trt-${d.id} .awaywin1`).html(awin == -1 ? `<i class="icon-lock"></i>`: `${awin}`);
    }
    $("#topMatches").addClass("top__bottom__space");
  }
  if(nNewAdd == 1) {
    $("#topMatches").owlCarousel({
      loop: true,
      margin: 9,
      smartSpeed: 2500,
      autoplayTimeout: 3000,
      autoplay: false,
      nav: false,
      dots: false,
      responsiveClass: true,
      navText: [
        '<i class="fa-solid fa-angle-left"></i>',
        '<i class="fa-solid fa-angle-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        767: {
          items: 2,
        },
        991: {
          items: 2,
        },
        1199: {
          items: 2,
        },
        1243: {
          items: 3,
        },
        1399: {
          items: 3,
        },
      },
    });
  }
}

sportsSocket.onopen = function() {
  sportsSocket.send(JSON.stringify({
    token: token,
    page:'home', 
    live:'on', 
    lsport:1, 
    prematch:'on', 
    psport:1, 
    detail_id:0, 
    data1:"",
    data2:""
  }));
};

sportsSocket.onerror = function(error) {};
sportsSocket.onclose = function() {};
sportsSocket.onmessage = function(event) {        
    const obj = JSON.parse(event.data);           

    if(obj.type == 'live') {         
      removeUnusing(obj.data,"tr");
      sessionStorage.setItem('live_data', event.data);     

      const sport_id = obj.data.length > 0 ? obj.data[0].sport_id : 1;
      makeHeader(sport_id);

      for(let i = 0; i < obj.data.length; i++) {
          const data = obj.data[i];            
          const odds = data.data;           
          const is_fav = data.is_fav;
  
          if(sport_id == 1) {
            handleSoccerLive(odds, data, i, is_fav);  
          }                                            
      }
    }

    if(obj.type == 'prematch') {
      sessionStorage.setItem('prematch_data', event.data);
      removeUnusing(obj.data,"trr");
      for(let i = 0; i < obj.data.length; i++) {
        const data = obj.data[i];            
        const sport_id = data.sport_id;
        if(sport_id == 1) {
          handleSoccerPrematch(data, i);  
        }                                            
      }
      if(obj.page == "home"){
        removeUnusing(obj.tops, "trt");
        handleTopMatch(obj.tops);
      }
    }
};  

function removeUnusing(data, id) {
  const currentIds = new Set(data.map(item => `${id}-${item.id}`));  
  const allDivs = document.querySelectorAll(`div[id^="${id}-"]`); 
  allDivs.forEach(div => {  
    // If the div's id is not in the Set of current IDs, remove it  
    if (!currentIds.has(div.id)) {  
        div.remove();  
    }  
  });
}