// connect to data base

let db ;
let openRequest = indexedDB.open('mydatabase');

openRequest.addEventListener('success',()=>{

    console.log('db connected');
    db = openRequest.result;
});

openRequest.addEventListener('upgradeneeded',()=>{

    console.log('db upgraed OR initialised db');
    db = openRequest.result;

    db.createObjectStore('video', {keyPath: "id"});
    db.createObjectStore('image', {keyPath: "id"});


});

openRequest.addEventListener('error',()=>{

    console.log('db is error');
    
});
