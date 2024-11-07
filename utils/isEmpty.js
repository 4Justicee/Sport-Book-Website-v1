exports.isEmpty = (value) => {
    return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
    );
};
function calcLiveTime (inputTimeString) {
    const year = parseInt(inputTimeString.substring(0, 4), 10);  
    const month = parseInt(inputTimeString.substring(4, 6), 10) - 1; // Subtract 1 because months are 0-indexed  
    const day = parseInt(inputTimeString.substring(6, 8), 10);  
    const hour = parseInt(inputTimeString.substring(8, 10), 10);  
    const minute = parseInt(inputTimeString.substring(10, 12), 10);  
    const second = parseInt(inputTimeString.substring(12, 14), 10);  
  
    const inputEpochMilli = Date.UTC(year, month, day, hour, minute, second);  
    const inputEpochSeconds = Math.floor(inputEpochMilli / 1000);  
  
    // Get the current time in epoch seconds  
    // Note: To ensure consistency, convert the current date to UTC as well  
    const now = new Date(); // This represents the current time in local time zone  
    const nowUtc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());  
    const nowEpochSeconds = Math.floor(nowUtc / 1000);  
  
    // Calculate the difference in seconds  
    const differenceInSeconds = nowEpochSeconds - inputEpochSeconds;  
  
    return differenceInSeconds;
  }
  exports.analSoccerInplayResponse = (obj) => {
    let f = [];
    const result = [];
    const scores = [];
    const names = {};
    let nas = [];
    let idx = 0;
    const d = obj;
    let name = "";
    let header = "";
    let passed_second = 0;
    for(let i = 0; i < d.length; i++) {
        if(d[i].type == "EV") {
          if(d[i].TT == "1") {
            passed_second = calcLiveTime(d[i].TU) + (Number)(d[i].TM) * 60 + (Number)(d[i].TS);
          }
          else {
            passed_second = (Number)(d[i].TM * 60) + (Number)(d[i].TS);
          }
  
        }
        if(d[i].type == 'SC') {
          if(d[i].NA == "") {
            names.name1 = d[i+1].D1;
            names.name2 = d[i+2].D2;
          }
          else {
            scores.push({
              name: d[i].NA,
              score1: d[i+1].D1,
              score2: d[i+2].D1,
              score1_1: d[i+1].D2,
              score2_1: d[i+2].D2,
            })
          }
        }
        if(d[i].type == "MG") {
            if(f.length) {
                result.push({
                    name,
                    odds: f
                })
            }
            f = [];
            nas = [];
            name = d[i].NA;
            continue;
        } 
        if(d[i].type == "MA") {
            header = d[i].NA;
            idx = 0;
        }
        if(d[i].type == "PA") {
            if(d[i].OD == undefined) {
                header = d[i].NA;
                nas.push(header);
                continue;
            }
            let subname = (d[i].NA == undefined || d[i].NA.trim() == "") ? d[i].HA : d[i].NA;
            subname = (subname?.trim() == "") ? d[i].HD : subname;
            subname = (subname == undefined) ? nas[idx++] : subname;
            const ods = d[i].OD.split("\/");
            const odd = (Number)(ods[0]) / (Number)(ods[1]);
            f.push({
                odds: (1+odd).toFixed(3),
                name : subname,
                header,
                id: d[i].ID
            });
        }
    }
    result.push({
        name,
        odds: f
    })
    
    return {
      odd:result,
      current_score: scores,
      names,
      passed_second
    };
  }
  