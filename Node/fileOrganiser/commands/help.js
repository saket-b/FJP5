
function help() {

    console.log(
        `
        These are some myCLI commands used in various situations.
    
        1. node main.js tree <path>
        2. node main.js organize <path>
        3. node main.js help
    `);
}

function abc() {
    
    console.log("I am in abc help");
}

// below is module of node
module.exports = {

    help : help,
    //hathhi : help;
    //hora : abc;

}