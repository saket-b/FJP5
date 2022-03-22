

const request = require("request");

const cheerio = require("cheerio");

request("https://www.worldometers.info/coronavirus/", cb);

function cb(err, res, body) {

    
    if( err)
    console.log("error ", err);
    else 
    {
        handleHTML(body);
    }
}

function handleHTML(html) {

    let selecTool = cheerio.load(html);

    let coronastatusArr = selecTool(".maincounter-number");

    let Totalcase = selecTool(coronastatusArr[0]).text();
    let Totaldeath = selecTool(coronastatusArr[1]).text();
    let Totalrecover = selecTool(coronastatusArr[2]).text();

    console.log("Total covid Cases = ", Totalcase);
    console.log("Total Death Cases = ", Totaldeath);
    console.log("Total Recover Cases = ", Totalrecover);
    
}