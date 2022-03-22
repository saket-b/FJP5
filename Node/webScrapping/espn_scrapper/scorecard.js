
const request = require("request");
const cheerio = require("cheerio");
const { load } = require("cheerio");

function getInfoFromScorecard(url) {
  //console.log("from scorecards.js ",url);
   request(url, cb);
}

function cb(err, res, body) {

    if( err)
    console.log("error", err);
    else 
    {
        getMatchDetail(body);
    }
    
}

function getMatchDetail(html) {

    let selecTool = cheerio.load(html);

    //2.get date
    //3. get rsult
    // 4. get team name win.

    let desc = selecTool(".match-header-info.match-info-MATCH");

    //console.log(desc);
    let descArr = desc.text().split(",");

    let DateofMatch = descArr[2];
    let venueOfMatch = descArr[1];

    console.log(DateofMatch);
     console.log(venueOfMatch);

    let matchRes = selecTool(
        ".match-info.match-info-MATCH.match-info-MATCH-half-width>.status-text"
      );

      console.log(matchRes.text());



    
}

module.exports = {
    gifs:getInfoFromScorecard,
};
