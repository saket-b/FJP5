
const puppeteer = require("puppeteer");
let { answer } = require("./codes");


let email= "";
let password= "";

let browserOpenPromise = puppeteer.launch({

    headless: false,
  defaultViewport: null,
  args: ["--start-maximized"],
}
);

browserOpenPromise// fulfill
.then(function (browser)
{
  console.log("browser is launched");

  let allTabsPromise = browser.pages();//new tab open hota hai

  return allTabsPromise;

})
.then (function (allTabsArr) {

  cTab = allTabsArr[0];
  console.log("new tab");

  let visitingLoginPagePromise = cTab.goto("https://www.hackerrank.com/auth/login");

  return visitingLoginPagePromise;
  
})
.then(function () {

  console.log("hackerank Login Page");

  let emailWillbeType = cTab.type("input[name='username']", email);
  return emailWillbeType;
  
})
.then(function () {

  console.log("email is typed");
  
  let passwordwillbeType = cTab.type("input[type='password']", password);
  return passwordwillbeType;
  
})
.then (function () {

  console.log("password has typed");

  let willBelogin = cTab.click(
    ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled"
  );
  return willBelogin;
})
.then ( function () {
  
  console.log("click algo btn");

  //wait and click on algorithm button.

  let algorithmTabWillBeopenPromise = waitAndClick(
    "div[data-automation = 'algorithms']"
  );
  return algorithmTabWillBeopenPromise;
})
.then (function () {

  console.log("inside alorithm page");

  let allQuestionPromise = cTab.waitForSelector(
    'a[data-analytics="ChallengeListChallengeName"]');

    return allQuestionPromise;

})
.then (function () {

  function getAllQuestionLinks() {

   
     console.log("bhati");
   
   let allEleArr = document.querySelectorAll(
    'a[data-analytics="ChallengeListChallengeName"]');
   

    let linkArr =[];
    console.log(allEleArr.length);

    for( let i=0;i<allEleArr.length; i++)
    {
      
      linkArr.push(allEleArr[i].getAttribute("href"));
    }
    return linkArr;
  }
  //console.log("saket");
  let linkArrPromise = cTab.evaluate(getAllQuestionLinks);// pass refrence

  return linkArrPromise;
  
})
.then (function (linkArr) {
  console.log("links to all ques received");
  console.log(linkArr);

  //link to the question to besolved, idx of the linksArr
  let questionWillBeSolvePromise = questionSolver(linkArr[0], 0);

  for( let i=1; i<4; i++)
  {
    questionWillBeSolvePromise = questionWillBeSolvePromise
    .then(function(){
      return questionSolver(linkArr[i], i);
    });
    return questionWillBeSolvePromise;

  }
  
}).then (function () {
  console.log("question solved");
})
// solve problem

// .then ( function () {
//   console.log("Inside algorithm");

//  // let questionsArr = 

//   let QuestionPromise = waitAndClick(".js-track-click.challenge-list-item[data-attr1= ['queens-attack-2']");
//   return QuestionPromise;
  
// })

.catch(function (err) {

  console.log(err);
  
});


function  waitAndClick(algoBtn) {

  let waitclickPromise = new Promise(function (resolve, reject) {
    
  
  let waitforSelectorPromise= cTab.waitForSelector(algoBtn);

  waitforSelectorPromise
  .then(function () {
    console.log("algo btn is found");    
  let clickpromise =cTab.click(algoBtn);
  return clickpromise;
  })
  .then (function () {
    console.log("algo botton is clicked");
    resolve () // abhi nhi call hoga
  })
  .catch(function (err) {
    
    console.log(" "+err);
  })

  });
  return waitclickPromise;
}


function questionSolver(url, idx) {

  return new Promise(function (resolve, reject) {
    
    let fullLink = `https://www.hackerrank.com${url}`;

    let gotoQuestionPagePromise = cTab.goto(fullLink);
    
    gotoQuestionPagePromise.then( function () {

      console.log("question opened");
      let waitForCheckBoxandClickPromise = waitAndClick(".checkbox-input");
      return waitForCheckBoxandClickPromise;
      
    })
    .then (function () {

      let waitForBoxPromise = cTab.waitForSelector(".custominput");
      return waitForBoxPromise; 
      
    })
    .then ( function () {
      let codeWillbeTypedPromise = cTab.type(".custominput", answer[idx]);
      return codeWillbeTypedPromise;
      
    })
    .then (function () {
      let controlPressesPromise = cTab.keyboard.down("Control");
      return controlPressesPromise;
      
    })
    .then ( function () {
      let aKeyPressedPromise = cTab.keyboard.press("a");
      return aKeyPressedPromise;
      
    })
    .then ( function () {
      let xKeyPressedPromise =cTab.keyboard.press("x");
      return xKeyPressedPromise;
      
    })
    .then (function () {
        
      let ctrlReleasedPromise = cTab.keyboard.up("Control");
      return ctrlReleasedPromise;
    })
    .then (function () {
     let controlPromise = cTab.keyboard.down("Control");
     return controlPromise; 
    })
    .then (function () {
      let cursorOnEditorPromise = cTab.click( ".monaco-editor.no-user-select.vs");
      return cursorOnEditorPromise;
      
    })
    .then ( function () {

      let aKeyPressedPromise = cTab.keyboard.press("A", {delay:100});
      return aKeyPressedPromise;
      
    })
    .then (function () {
      let vKeyPromise = cTab.keyboard.press("V", {delay:100});
      return vKeyPromise;
    })
    .then (function () {

      let controlDownPromise = cTab.keyboard.up("Control");
      return controlDownPromise;
      
    })
    .then (function () {

      let submitButtonClickedPromise = cTab.click(".hr-monaco-submit");
      return submitButtonClickedPromise;
      
    })
    .then (function () {
      console.log("Question solved succesfully");
    })
    .catch (function (err) {

      reject(err);
    })
   
  });
  
}

  
