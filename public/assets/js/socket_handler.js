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
              <a class="point__box full1">
                  ${o1x2.hwin == -1 ? `<i class="icon-lock"></i>` : o1x2.hwin}
              </a>
              <a class="point__box fullx">
                  ${o1x2.draw == -1 ? `<i class="icon-lock"></i>` : o1x2.draw}
              </a>
              <a class="point__box full2">
                  ${o1x2.awin == -1 ? `<i class="icon-lock"></i>` : o1x2.awin}
              </a>
          </div>
          <div class="mart__point__items"'>        
              <a class="point__box overgoal">
              ${go.goal == -1 ? `<i class="icon-lock"></i>`: `<span class='point__box_addinfo goal'>${go.goal}</span>
                  <span class='overodd'>${go.overodd}</span>`}
              </a>
              <a class="point__box undergoal">
                  ${go.goal == -1 ? `<i class="icon-lock"></i>`: `<span class='point__box_addinfo goal'>${go.goal}</span>
                  <span class='underodd'>${go.underodd}</span>`}
              </a>
          </div>
          <div class="mart__point__items">        
              <a class="point__box handi1"> 
                  ${handis.h_hand == -1 ? `<i class="icon-lock"></i>`: `<span class='point__box_addinfo handivalue1'>${handis.h_hand}</span><span class='handi1odd'>${handis.h_odd}</span>`}

              </a>
              <a class="point__box handi2">    
                  ${handis.a_hand == -1 ? `<i class="icon-lock"></i>`: `<span class='point__box_addinfo handivalue2'>${handis.a_hand}</span><span class='handi2odd'>${handis.a_odd}</span>`}
              </a>
          </div>
          <div class="mart__point__right">        
              <a class="point__box bg__none">
                  <span class='star_elem'>${starElem}</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span class='hand inplay_detail_view_btn' tid="${id}"><i class="fas fa-angle-right"></i></span>
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
  if(odds.main != undefined) {
    if(odds.main.sp.full_time_result != undefined) {
      hwin = odds.main.sp.full_time_result.odds[0].odds;
      draw = odds.main.sp.full_time_result.odds[1].odds;
      awin = odds.main.sp.full_time_result.odds[2].odds;
    }

    if(odds.main.sp.goals_over_under != undefined) {
      overodd = odds.main.sp.goals_over_under.odds[0].odds;
      underodd = odds.main.sp.goals_over_under.odds[1].odds;
      goal = odds.main.sp.goals_over_under.odds[0].name;
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
            <a href="#box" class="point__box homewin">
              ${hwin == -1 ? `<i class="icon-lock"></i>`: `<span class="point__1">1</span><span>${hwin}</span>`}                                
            </a>
            <a href="#box" class="point__box draw">
                ${draw == -1 ? `<i class="icon-lock"></i>`: `<span class="point__1">X</span><span>${draw}</span>`}                  
            </a>
            <a href="#box" class="point__box awaywin">
                ${awin == -1 ? `<i class="icon-lock"></i>`: `<span class="point__1">2</span><span>${awin}</span>`}                  
            </a>
            <a href="#box" class="point__box goalover">
                ${goal == -1 ? `<i class="icon-lock"></i>`: `<span class="point__1">${goal}&nbsp;Over</span><span>${overodd}</span>`}                  
            </a>
            <a href="#box" class="point__box goalunder">
                ${goal == -1 ? `<i class="icon-lock"></i>`: `<span class="point__1">${goal}&nbsp;Under</span><span>${underodd}</span>`}                  
            </a>
        </div>
        <div class="mart__point__right">
            <a href="#min" class="point__box-text point__box__nextto">
            <span class='timestr'> ${localTimeString}</span>
            <span class="icons"><i class="fas fa-angle-right"></i></span>
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
  }

}

sportsSocket.onopen = function() {
  sportsSocket.send(JSON.stringify({token, type:'token'}));
};

sportsSocket.onerror = function(error) {};
sportsSocket.onclose = function() {};
sportsSocket.onmessage = function(event) {        
    const obj = JSON.parse(event.data);        
    
    if(obj.type == 'live') {         
      sessionStorage.setItem('live_data', event.data);

      const currentIds = new Set(obj.data.map(item => `tr-${item.id}`));  
      const allDivs = document.querySelectorAll('div[id^="tr-"]'); 
      allDivs.forEach(div => {  
          // If the div's id is not in the Set of current IDs, remove it  
          if (!currentIds.has(div.id)) {  
              div.remove();  
          }  
      });

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

      for(let i = 0; i < obj.data.length; i++) {
        const data = obj.data[i];            
        const sport_id = data.sport_id;
        if(sport_id == 1) {
          handleSoccerPrematch(data, i);  
        }                                            
      }
    }
};  