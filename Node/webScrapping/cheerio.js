
//cheerio
// Cheerio parses HTML and it traverses
// the html so that data can be manipulated according to user's needs

const cheerio = require("cheerio");
let html = `<ul id="fruits">
<li class="apple">Apple</li>
<li class="orange">Orange</li>
<li class="pear">Pear</li>
</ul>`;

let selecTool = cheerio.load(html);

let fruitNameArr = selecTool("#fruits");

console.log(fruitNameArr.text());

let fruitName = selecTool(".pear");
console.log(fruitName.text());