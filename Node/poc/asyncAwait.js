function fp()
{
    return new Promise(function (resolve, reject) {
      resolve("hi");  
    });
}

let promisifyFunc = fp();

promisifyFunc.then(function (data) {
    console.log(data);
});

promisifyFunc.catch(function (err) {
    console.log(err);
});

async function f() {
    return "hello";
    
}

let asyncf = f();

asyncf.then(function (data) {
    console.log(data);
});


async function f() {

    let promise = new Promise(function (resolve, reject){
        setTimeout( function () {
            resolve("done!");
        },5000);

        
    });


    let result = await promise;


    console.log("hello");
  //  alert(result);
    
}

f();
console.log("YOLO");


async function showAvatar()
{
    // read out JSON

    let response = await fetch("https://javascript.info/aticle/promise-chaining/user/user.json");
    console.log(response);
    let user = await response.json();
    // console.log(response);

    // let githubresponce = await fetch(`htttps://api.github.com/users/${user.name}`)
    // let githubUSer = await githubresponce.json();

    // let img = document.createElement("img");
    // img.src  = githubUSer.avatar_url;
    // img.className = "promise-avatar-example";
    // document.body.append(img);

    // await new Promise((resolve, reject)=> setTimeout(resolve,3000));

    // img.remove();
    // return githubUSer;

}
showAvatar();