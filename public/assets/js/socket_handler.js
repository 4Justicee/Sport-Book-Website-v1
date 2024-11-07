const countryCodes = {
  "Andorra": "ad",
  "United Arab Emirates": "ae",
  "Afghanistan": "af",
  "Antigua and Barbuda": "ag",
  "Anguilla": "ai",
  "Albania": "al",
  "Armenia": "am",
  "Angola": "ao",
  "Antarctica": "aq",
  "Argentina": "ar",
  "American Samoa": "as",
  "Austria": "at",
  "Australia": "au",
  "Aruba": "aw",
  "Åland Islands": "ax",
  "Azerbaijan": "az",
  "Bosnia & Herzegovina": "ba",
  "Barbados": "bb",
  "Bangladesh": "bd",
  "Belgium": "be",
  "Burkina Faso": "bf",
  "Bulgaria": "bg",
  "Bahrain": "bh",
  "Burundi": "bi",
  "Benin": "bj",
  "Saint Barthélemy": "bl",
  "Bermuda": "bm",
  "Brunei": "bn",
  "Bolivia": "bo",
  "Caribbean Netherlands": "bq",
  "Brazil": "br",
  "Bahamas": "bs",
  "Bhutan": "bt",
  "Bouvet Island": "bv",
  "Botswana": "bw",
  "Belarus": "by",
  "Belize": "bz",
  "Canada": "ca",
  "Cocos (Keeling) Islands": "cc",
  "Congo - Kinshasa": "cd",
  "Central African Republic": "cf",
  "Congo - Brazzaville": "cg",
  "Switzerland": "ch",
  "Côte d’Ivoire": "ci",
  "Cook Islands": "ck",
  "Chile": "cl",
  "Cameroon": "cm",
  "China": "cn",
  "Colombia": "co",
  "Costa Rica": "cr",
  "Cuba": "cu",
  "Cape Verde": "cv",
  "Curaçao": "cw",
  "Christmas Island": "cx",
  "Cyprus": "cy",
  "Czech Republic": "cz",
  "Germany": "de",
  "Djibouti": "dj",
  "Denmark": "dk",
  "Dominica": "dm",
  "Dominican Republic": "do",
  "Algeria": "dz",
  "Ecuador": "ec",
  "Estonia": "ee",
  "England": "gb",
  "Egypt": "eg",
  "Western Sahara": "eh",
  "Eritrea": "er",
  "Spain": "es",
  "Ethiopia": "et",
  "Finland": "fi",
  "Fiji": "fj",
  "Falkland Islands": "fk",
  "Micronesia": "fm",
  "Faroe Islands": "fo",
  "France": "fr",
  "Gabon": "ga",
  "United Kingdom": "gb",
  "Grenada": "gd",
  "Georgia": "ge",
  "French Guiana": "gf",
  "Guernsey": "gg",
  "Ghana": "gh",
  "Gibraltar": "gi",
  "Greenland": "gl",
  "Gambia": "gm",
  "Guinea": "gn",
  "Guadeloupe": "gp",
  "Equatorial Guinea": "gq",
  "Greece": "gr",
  "South Georgia & South Sandwich Islands": "gs",
  "Guatemala": "gt",
  "Guam": "gu",
  "Guinea-Bissau": "gw",
  "Guyana": "gy",
  "Hong Kong SAR China": "hk",
  "Heard & McDonald Islands": "hm",
  "Honduras": "hn",
  "Croatia": "hr",
  "Haiti": "ht",
  "Hungary": "hu",
  "Indonesia": "id",
  "Ireland": "ie",
  "Israel": "il",
  "Isle of Man": "im",
  "India": "in",
  "British Indian Ocean Territory": "io",
  "Iraq": "iq",
  "Iran": "ir",
  "Iceland": "is",
  "Italy": "it",
  "Jersey": "je",
  "Jamaica": "jm",
  "Jordan": "jo",
  "Japan": "jp",
  "Kenya": "ke",
  "Kyrgyzstan": "kg",
  "Cambodia": "kh",
  "Kiribati": "ki",
  "Comoros": "km",
  "Saint Kitts and Nevis": "kn",
  "North Korea": "kp",
  "South Korea": "kr",
  "Kuwait": "kw",
  "Cayman Islands": "ky",
  "Kazakhstan": "kz",
  "Laos": "la",
  "Lebanon": "lb",
  "Saint Lucia": "lc",
  "Liechtenstein": "li",
  "Sri Lanka": "lk",
  "Liberia": "lr",
  "Lesotho": "ls",
  "Lithuania": "lt",
  "Luxembourg": "lu",
  "Latvia": "lv",
  "Libya": "ly",
  "Morocco": "ma",
  "Monaco": "mc",
  "Moldova": "md",
  "Montenegro": "me",
  "Saint Martin": "mf",
  "Madagascar": "mg",
  "Marshall Islands": "mh",
  "North Macedonia": "mk",
  "Mali": "ml",
  "Myanmar (Burma)": "mm",
  "Mongolia": "mn",
  "Macau SAR China": "mo",
  "Northern Mariana Islands": "mp",
  "Martinique": "mq",
  "Mauritania": "mr",
  "Montserrat": "ms",
  "Malta": "mt",
  "Mauritius": "mu",
  "Maldives": "mv",
  "Malawi": "mw",
  "Mexico": "mx",
  "Malaysia": "my",
  "Mozambique": "mz",
  "Namibia": "na",
  "New Caledonia": "nc",
  "Niger": "ne",
  "Norfolk Island": "nf",
  "Nigeria": "ng",
  "Nicaragua": "ni",
  "Netherlands": "nl",
  "Norway": "no",
  "Nepal": "np",
  "Nauru": "nr",
  "Niue": "nu",
  "New Zealand": "nz",
  "Oman": "om",
  "Panama": "pa",
  "Peru": "pe",
  "French Polynesia": "pf",
  "Papua New Guinea": "pg",
  "Philippines": "ph",
  "Pakistan": "pk",
  "Poland": "pl",
  "Saint Pierre and Miquelon": "pm",
  "Pitcairn Islands": "pn",
  "Puerto Rico": "pr",
  "Palestinian Territories": "ps",
  "Portugal": "pt",
  "Palau": "pw",
  "Paraguay": "py",
  "Qatar": "qa",
  "Réunion": "re",
  "Romania": "ro",
  "Serbia": "rs",
  "Russia": "ru",
  "Rwanda": "rw",
  "Saudi Arabia": "sa",
  "Solomon Islands": "sb",
  "Seychelles": "sc",
  "Sudan": "sd",
  "Sweden": "se",
  "Singapore": "sg",
  "Saint Helena": "sh",
  "Slovenia": "si",
  "Svalbard and Jan Mayen": "sj",
  "Slovakia": "sk",
  "Sierra Leone": "sl",
  "San Marino": "sm",
  "Senegal": "sn",
  "Somalia": "so",
  "Suriname": "sr",
  "South Sudan": "ss",
  "São Tomé and Príncipe": "st",
  "El Salvador": "sv",
  "Sint Maarten": "sx",
  "Syria": "sy",
  "Eswatini (Swaziland)": "sz",
  "Turks and Caicos Islands": "tc",
  "Chad": "td",
  "French Southern Territories": "tf",
  "Togo": "tg",
  "Thailand": "th",
  "Tajikistan": "tj",
  "Tokelau": "tk",
  "Timor-Leste": "tl",
  "Turkmenistan": "tm",
  "Tunisia": "tn",
  "Tonga": "to",
  "Turkey": "tr",
  "Trinidad and Tobago": "tt",
  "Tuvalu": "tv",
  "Taiwan": "tw",
  "Tanzania": "tz",
  "Ukraine": "ua",
  "Uganda": "ug",
  "U.S. Outlying Islands": "um",
  "United States": "us",
  "Uruguay": "uy",
  "Uzbekistan": "uz",
  "Vatican City": "va",
  "St. Vincent & Grenadines": "vc",
  "Venezuela": "ve",
  "British Virgin Islands": "vg",
  "U.S. Virgin Islands": "vi",
  "Vietnam": "vn",
  "Vanuatu": "vu",
  "Wallis and Futuna": "wf",
  "Samoa": "ws",
  "Kosovo": "xk",
  "Yemen": "ye",
  "Mayotte": "yt",
  "South Africa": "za",
  "Zambia": "zm",
  "Zimbabwe": "zw"
  };

function handleSoccerLive(odds, data, idx, fav = 0) {
  const o1x2 = get1X2(odds, data.home_name, data.away_name);
  const go = getMatchGoals(odds);
  const handis = getHandicaps(odds, data.home_name, data.away_name);
  const elapse = data.updated_at - data.time < 0 ? 0 : data.updated_at - data.time;
  const time_str = formatSeconds(elapse);
  const scores = (data['ss'] == null) ? "0-0" : data['ss'];
  const id = data.id;
  const simpleObj = JSON.stringify({h: data.home_name, a: data.away_name, t: time_str, scores, odd: o1x2});
  const starElem = (fav == 0) ? `<img class='star-off hand inplay_likestar' src="/assets/img/logo/star_off.png" tid="${id}" data='${simpleObj}' width='24' d1="l"/>`:`<img class="hand inplay_removestar" tid="${id}" src="/assets/img/logo/star_on.png" width='22'/>`;
  
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

function makeHeader(sport_id, dataLen) {
  if(dataLen == 0) {
    if($(`#live_data_view .nodata`).length > 0) {
      return;
    }
    $(`#live_data_view`).append(`<div class="table__footer table__footer__nextgo nodata"><a><span>No live highlights</span></a></div>`);
    return;
  }
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
  const fav = data.is_fav;
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
  const starElem = (fav == 0) ? `<img class='star-off hand inplay_likestar' src="/assets/img/logo/star_off.png" tid="${id}" width='24' style='margin-left:1rem' d1="p"/>`:`<img class="hand inplay_removestar" tid="${id}" src="/assets/img/logo/star_on.png" width='22' style='margin-left:1rem'/>`;

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
        <div class='start__box'>${starElem}</div>
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
    $(`#trr-${id} .start__box`).html(starElem);
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
		year: 'numeric',   // numeric year  
		month: 'long',     // long name of month  
		day: 'numeric',    // numeric day of the month  
		hour: 'numeric',   // numeric hour  
		minute: 'numeric', // numeric minutes  
		timeZoneName: 'short' // short name of the time zone  
	};  

	// Format the date to the local timezone  
	let formattedDate = dateObj.toLocaleString('en-US', options);  
  let home_flag = countryCodes[d.home_name] != undefined ? `<div class='flag flag-${countryCodes[d.home_name]}'></div>` : `<img src="/assets/img/logo/favicon.png" alt="flag">`;
  let away_flag = countryCodes[d.away_name] != undefined ? `<div class='flag flag-${countryCodes[d.away_name]}'></div>` : `<img src="/assets/img/logo/favicon.png" alt="flag">`;
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
                <span style="white-space: nowrap;">
                    ${d.home_name}
                </span>
                ${home_flag}
            </div>
            <span class="vs">
                vs
            </span>
            <div class="match__vs__left">
                ${away_flag}
                <span style="white-space: nowrap;">
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
            <li class='bet-btn' groupNo="${d.id}" id='idt-${d.id}-${hid}' mid="${d.id}" n="Fulltime Result" t="${d.home_name}" o="${hwin}" d3="${d.home_name} vs ${d.away_name}">
                <span>1</span>
                <span class='homewin1'>${hwin}</span>
            </li>
            <li class='bet-btn' groupNo="${d.id}" id='idt-${d.id}-${did}' mid="${d.id}" n="Fulltime Result" t="Draw" o="${draw}" d3="${d.home_name} vs ${d.away_name}">
                <span>x</span>
                <span class='draw1'>${draw}</span>
            </li>
            <li class='bet-btn' groupNo="${d.id}" id='idt-${d.id}-${aid}' mid="${d.id}" n="Fulltime Result" t="${d.away_name}" o="${awin}" d3="${d.home_name} vs ${d.away_name}">
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
  }
  if(nNewAdd == 1) {
    $("#topMatches").owlCarousel({
      loop: true,
      margin: 16,
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
    $("#topMatches").addClass("top__bottom__space");
  }
}

function handleDetailLiveData(o) {
  const id = o.id;
  for(let i = 0; i < o.data.length; i++) {
		const item = o.data[i];
		const odds = item.odds;

		let bettingItem = '';
		if(odds.length == 3) {
			for(let j = 0; j < odds.length; j++) {
				const n = odds[j].name;
				const h = odds[j].header;
				const v = odds[j].odds;
				const oid = odds[j].id;
				const t = h == undefined ? n : n+", "+h;
        const elem = $(`#idl-${id}-${oid}-l`);
        if(v == NaN) {
          elem.html(`<span><i class="icon-lock"></i></span><span><i class="icon-lock"></i></span>`);
        }
        else {
          elem.html(`<span>${t}</span><span>${v}</span>`);
        }	

			}			
		}
		else {
			for(let j = 0; j < odds.length; j++) {
				const n = odds[j].name;
				const h = odds[j].header;
				const v = odds[j].odds;
				const t = h == undefined ? n : n+", "+h;
				const oid = odds[j].id;
				let n1 = "";
				if(odds.length == 2) {
					n1 = j == 0 ? o.home_name : o.away_name;
				}
        const elem = $(`#idl-${id}-${oid}-l`);
        if(v == NaN) {
          elem.html(`<span><i class="icon-lock"></i></span><span><i class="icon-lock"></i></span>`);
        }
        else {
          elem.html(`<span>${t}</span><span>${v}</span>`);
        }	        
			}
		}
	}
}

function handleDetailPrematchData(o) {
  const sid = o.sport_id;
  const id = o.id;
	const bettings = ["main", "asian_lines", "goals", "half","minutes", "others", "specials"];
	let modeSelect = [];
	const func = (keys, odd_data, home_name, away_name, id, i, item) => {
		for(let j = 0; j < keys.length; j++) {
			const key = keys[j];
			const bet_name = odd_data[key].name;
			const odds = odd_data[key].odds;
			if(odds.length == 0)
				continue;
				if(odds.length == 3) {
				for(let k = 0; k < odds.length; k++) {
					const odd = odds[k].odds;
					const header = odds[k].header;
					const name = odds[k].name;
					const oid = odds[k].id;
					const handi = odds[k].handicap;
					const n = name == undefined ? handi : name;
					const t = header == undefined ? n : n+", "+header;
          const elem = $(`#idr-${id}-${oid}`);
          if(odd == NaN) {
            elem.html(`<span><i class="icon-lock"></i></span><span><i class="icon-lock"></i></span>`);
          }
          else {
            elem.html(`<span>${t}</span><span>${odd}</span>`);
          }					
				}
			}
			else {
				for(let k = 0; k < odds.length; k++) {
					const odd = odds[k].odds;
					const header = odds[k].header;
					const name = odds[k].name;
					const oid = odds[k].id;
					const handi = odds[k].handicap;
					const n = name == undefined ? handi : name;
					const t = header == undefined ? n : n+", "+header;

					let n1 = "";
					if(odds.length == 2) {
						n1 = j == 0 ? o.home_name : o.away_name;
					}
          const elem = $(`#idr-${id}-${oid}`);
          if(odd == NaN) {
            elem.html(`<span><i class="icon-lock"></i></span><span><i class="icon-lock"></i></span>`);
          }
          else {
            elem.html(`<span>${t}</span><span>${odd}</span>`);
          }
				}
			}		
		}
	}	
	
	if(prematchDetailMode == 'all') {
		modeSelect = modeSelect.concat(bettings);
	}
	else {
		modeSelect = [prematchDetailMode];
	}

	for(let i = 0; i < modeSelect.length; i++) {
		const item = modeSelect[i];
		if(o.data[item] == undefined)
			continue;
		const odd_data = o.data[item].sp;
		if(Array.isArray(o.data[item])) {
			for(let j = 0; j < o.data[item].length; j++) {
				const sp = o.data[item][j].sp;
				const keys = Object.keys(sp);		
				func(keys, sp, o.home_name, o.away_name, id, i, item);	
			}
		}
		else {
			const keys = Object.keys(odd_data);		
			func(keys, odd_data, o.home_name, o.away_name, id, i, item);
		}				
	}	
}

sportsSocket.onopen = function() {
  sessionStorage.setItem("current_live_sport", 1);
  sessionStorage.setItem("current_prematch_sport", 1);
  
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
      
      sessionStorage.setItem('live_data', event.data);     
      if(obj.page == "home") {
        removeUnusing(obj.data,"tr");

        const sport_id = obj.data.length > 0 ? obj.data[0].sport_id : 1;        
        makeHeader(sport_id, obj.data.length);
        
        for(let i = 0; i < obj.data.length; i++) {
          const data = obj.data[i];            
          const odds = data.data;           
          const is_fav = data.is_fav;

          if (!$('#detail_view_body').is(':empty')) {  
            const gid = $('#detail_view_body').attr("gid");
            if(gid == data.id) {
              handleDetailLiveData(data);
            }
          }

          if(sport_id == 1) {
            handleSoccerLive(odds, data, i, is_fav);  
          }                                            
        }
      }
      if(obj.page == "sport") {
        $("#main_contents>div").fadeIn();
        $("#content_view_body").fadeOut();
        handleLiveSportsTable(obj.data)
      }
    }

    if(obj.type == 'prematch') {
      sessionStorage.setItem('prematch_data', event.data);
      removeUnusing(obj.data,"trr");  

      if(obj.page == "home"){               
        removeUnusing(obj.tops, "trt");
        handleTopMatch(obj.tops);

        if(obj.data.length == 0) {       
          if($(`#prematch_data_view .nodata`).length > 0) {
            return;
          }
          $(`#prematch_data_view`).append(`<div class="table__footer table__footer__nextgo nodata"><a><span>No prematch data.</span></a></div>`);
          return;        
        } 

        for(let i = 0; i < obj.data.length; i++) {
          const data = obj.data[i];            
          const sport_id = data.sport_id;
  
          if (!$('#detail_view_body').is(':empty')) {  
            const gid = $('#detail_view_body').attr("gid");
            if(gid == data.id) {
              handleDetailPrematchData(data);
            }
          }
  
          if(sport_id == 1) {
            handleSoccerPrematch(data, i);  
          }                                            
        }
      }
      if(obj.page == "sport") {
        $("#main_contents>div").fadeIn();
        $("#content_view_body").fadeOut();
        handlePrematchSportsTable(obj.data)
      }
    }

    if(obj.type == "game_count") {
      fillLiveAccordion(obj.totalLive);
      fillPrematchAccordion(obj.totalPrematch);
    }
  
};  

function removeUnusing(data, id) {
  let currentIds = [];
  if(data.rows != undefined) {
    currentIds = new Set(data.rows.map(item => `${id}-${item.id}`));  
  }
  else {
    currentIds = new Set(data.map(item => `${id}-${item.id}`));  
  }
  const allDivs = document.querySelectorAll(`div[id^="${id}-"]`); 
  allDivs.forEach(div => {  
    // If the div's id is not in the Set of current IDs, remove it  
    if (!currentIds.has(div.id)) {  
        div.remove();  
    }  
  });
}

function removeUnusingCount(data, id) {
  const currentIds = new Set(data.map(item => `${id}-${item.sport_id}`));  
  const allDivs = document.querySelectorAll(`div[id^="${id}-"]`); 
  allDivs.forEach(div => {  
    // If the div's id is not in the Set of current IDs, remove it  
    if (!currentIds.has(div.id)) {  
        div.remove();  
    }  
  });
}

function fillLiveAccordion(data) {
  removeUnusingCount(data, "acl");
  for(let i = 0; i < data.length; i++) {
      const name = data[i].sport_name;
      const total_count = data[i].total_count; 
      const icon = data[i].icon;
      const png = data[i].png;
      let elem = `<i class="icon-${icon}"></i>`;
      if(png == true) {
          elem = `<img src="/assets/img/sports/${icon}.png" width='20' style="filter:invert(1) brightness(0.6) !important;">`;
      }
      const a = $(`#accordion_live #acl-${data[i].sport_id}`);
      if(a.length == 0) {
        $("#accordion_live").append(`<div class="accordion-item select-sport" id='acl-${data[i].sport_id}'>
  <h2 class="accordion-header" id="headingOne${i}">
  <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne${i}" aria-expanded="false" aria-controls="collapseOne${i}">
  <span class="d-flex align-items-center gap-2 left-chokoboko">
    <span class="mt-1">${elem}</span>
    <span class="score text-white">
    ${name}
    </span>
  </span>
  <span class="d-flex align-items-center gap-1 icon-rightfs10">
  ${total_count}
  </span>
  </button>
  </h2>
  </div>`);
      }
      else{
        $(`#acl-${data[i].sport_id} .icon-rightfs10`).html(total_count);
      }
  }        
}

function fillPrematchAccordion(data) {
  removeUnusingCount(data, "acp");
  for(let i = 0; i < data.length; i++) {
      const name = data[i].sport_name;
      const total_count = data[i].total_count;
      const sport_id = data[i].sport_id;      
      const icon = data[i].icon;
      const png = data[i].png;
      
      let elem = `<i class="icon-${icon}"></i>`;
      if(png == true) {
          elem = `<img src="/assets/img/sports/${icon}.png" width='20' style="filter:invert(1) brightness(0.6) !important;">`;
      }
     
      const a = $(`#accordion_prematch #acp-${data[i].sport_id}`);
      if(a.length == 0) {
        $("#accordion_prematch").append(`<div class="accordion-item select-sport" id='acp-${data[i].sport_id}'>
  <h2 class="accordion-header" id="headingOne${i}">
  <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne${i}" aria-expanded="false" aria-controls="collapseOne${i}">
  <span class="d-flex align-items-center gap-2 left-chokoboko">
    <span class="mt-1">${elem}</span>
    <span class="score text-white">
    ${name}
    </span>
  </span>
  <span class="d-flex align-items-center gap-1 icon-rightfs10">
    ${total_count}
  </span>
  </button>
  </h2>
  </div>`);
      }
      else{
        $(`#acp-${data[i].sport_id} .icon-rightfs10`).html(total_count);
      }
  }     
}

function handlePrematchSportsTable(data) {
  let elem = ``;
  for(let i = 0; i < data.rows.length; i++) {
    const o = data.rows[i];

    const id = o.id;
    const away_name = o.away_name;
    const home_name = o.home_name;
    const fav = o.is_fav;
    const odds = o.data;
    if(odds == null)
        return;
    const utcDate = new Date(o.time_str);  
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
    const starElem = (fav == 0) ? `<img class='star-off hand inplay_likestar' src="/assets/img/logo/star_off.png" tid="${id}" width='24' style='margin-left:1rem' d1="p"/>`:`<img class="hand inplay_removestar" tid="${id}" src="/assets/img/logo/star_on.png" width='22' style='margin-left:1rem'/>`;
    const a = $(`#trr-${id}`);
    if(a.length == 0) {
      $("#searchView").append(`<div class="table__items b__bottom" id="trr-${id}">
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
          <div class='start__box'>${starElem}</div>
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
      $(`#trr-${id} .start__box`).html(starElem);
      $(`#trr-${id} .hodd1`).html(hodd1 == -1 ? `<i class="icon-lock"></i>`: `<span class="point__1">${handi1}</span><span>${hodd1}</span>`);
      $(`#trr-${id} .hodd2`).html(hodd2 == -1 ? `<i class="icon-lock"></i>`: `<span class="point__1">${handi2}</span><span>${hodd2}</span>`);
    }
  }

}

function handleLiveSportsTable(data) {
  
}