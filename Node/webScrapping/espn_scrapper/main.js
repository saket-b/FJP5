
let url ="https://www.espncricinfo.com/series/ipl-2020-21-1210595";


const request = require("request");

const cheerio = require("cheerio");
const allmatchobj = require("./allmatch");

request(url, cb);


function cb(err, res, body) {

    if( err)
    console.log("error", err);
    else 
    {
        handleHTML(body);
    }

    
}

function handleHTML(html) {

    let selectTool = cheerio.load(html);

    let anchorElem = selectTool('a[data-hover="View All Results"]');
//attr-> method for getting all attributes an dtheir values;

    let relativeLink= anchorElem.attr("href");

    //console.log(relativeLink);

    let fullLink = "https://www.espncricinfo.com" + relativeLink;
   // console.log(fullLink);
    allmatchobj.getAllMatch(fullLink);

    

    
}