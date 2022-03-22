


const request = require("request");


console.log("Before");
request("https://www.worldometers.info/coronavirus/", cb);



function cb(err, res, body) {

    if( err)
    console.error("error", err);
    else 
    {
       // handleHtml(html);
    //console.log(typeof body);
    }
}

console.log("after");