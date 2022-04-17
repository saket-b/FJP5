

const fs = require("fs");
// fs.readFile("f1.txt", cb1);

// function cb1(err, res) {

//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log(res+"");
//         fs.readFile("f2.txt", function cb2(err, res) {

//             if( err)
//             console.log(err);
//             else 
//             {
//                 console.log(res+ "");
//                 fs.readFile("f3.txt" ,function cb3(err, res) {

//                     if( err)
//                     console.log(err);
//                     else 
//                     {
//                         console.log(res+ "");
//                         console.log("data printed");
//                     }
                    
//                 }
//                 );
//             }
            
//         });
//     }
    
// }


// // 1st way to overcome callback hell is to separate the callabck functions 


// fs.readFile("f1.txt", cb1);

// function cb1(err, res) {

//     if(err)
//     console.log(err);
//     else 
//     {
//         console.log(res+"");
//         fs.readFile("f2.txt", cb2);
//     }
    
// }
// function cb2(err, res) {

//     if( err)
//     console.log(err);
//     else 
//     {
//         console.log(res+ "");
//         fs.readFile("f3.txt",cb3);
//         //console.log("data printed");
//     }
    
// }

// function cb3(err, res) {

//     if( err)
//     console.log(err);
//     else 
//     {
//         console.log(res+ "");
//         console.log("data printed");
//     }
    
// }




// q2 read 3 files f1.txt , f2.txt and f3.txt parallely using callbacks 

fs.readFile("f1.txt", cb1);
fs.readFile("f2.txt", cb1);
fs.readFile("f3.txt", cb1);

function cb1(err, res) {

    if( err)
    console.log(err);
    else 
    {
        console.log(res + "");
       
    }
    
}