const request = require("request");

const cheerio = require("cheerio");

const {gifs}= require("./scorecard");

function getAllMatch(url) {
 
    request(url, cb);
}



function cb(err, res, body) {

    if( err)
    console.log("error", err);
    else 
    {
        extractallMatchlink(body);
    }

    
}

function  extractallMatchlink(html) {

    let selectTool = cheerio.load(html);

    let scorecardArr = selectTool('a[data-hover="Scorecard"]');

    console.log(scorecardArr.length);

    for(let i=0; i<scorecardArr.length; i++)
    {
        let scorecardLink = selectTool(scorecardArr[i]).attr("href");

        let fullLink = "https://www.espncricinfo.com"+ scorecardLink;

        gifs(fullLink);
        break;


    }
}

module.exports={
    getAllMatch : getAllMatch,
};