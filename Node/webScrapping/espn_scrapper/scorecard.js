
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

    

        let teamNames= selecTool(".name-detail>.name-link");

        let team1 = selecTool(teamNames[0]).text();
        let team2 = selecTool(teamNames[1]).text();

        console.log(team1);
        console.log(team2);

       // let allBatsmenRows = selecTool(".table.batsman tbody >tr");
        //console.log(allBatsmenRows.text());

        //5. get inning

        let allBatsmenTable = selecTool(".table.batsman tbody");

        console.log("number of  batmen  tables ->" , allBatsmenTable.length);


        let htmlstring = "";

        let count=0;

        for( let i=0; i<allBatsmenTable.length; i++)
        {
            htmlstring+= selecTool(allBatsmenTable[i]).html();

            let allRows = selecTool(allBatsmenTable[i]).find("tr");
            
            for( let i=0; i<allRows.length; i++)
            {
                let row = selecTool(allRows[i]);
                let firstcolmnOfRow = row.find("td")[0];

                if( selecTool(firstcolmnOfRow).hasClass("batsman-cell"))
                    {
                        let playername =  selecTool(row.find("td")[0]).text();
                        let runs        = selecTool(row.find("td")[2]).text();
                        let balls       = selecTool(row.find("td")[3]).text();
                        let fours       = selecTool(row.find("td")[5]).text();
                        let sixes       = selecTool(row.find("td")[6]).text();
                        let SR          = selecTool(row.find("td")[7]).text();

                        console.log(`playername-> ${playername} \t runs -> ${runs} \t balls -> ${balls}  \t 4s -> ${fours} \t 6s-> ${sixes}  \t strike Rate -> ${SR}`);

                    }
            }
            
        }
        //console.log(htmlstring);







    
}

module.exports = {
    gifs:getInfoFromScorecard,
};
