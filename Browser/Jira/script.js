

var uid = new ShortUniqueId();
const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
let colors = ['lightpink', 'lightgreen', 'lightblue', 'black'];
let modalPriorityColor = colors[colors.length - 1]; //black
let textAreaCont = document.querySelector(".textarea-cont");

console.log("text "+ textAreaCont);
const allpriorityColors = document.querySelectorAll(".priority-color");
const mainCont = document.querySelector(".main-cont");
let removeBtn = document.querySelector(".remove-btn");

let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";


//to open close modal container

let isModalPresent = false;

let toolBoxXolors = document.querySelectorAll(".color");
//console.log(addBtn);

let ticketArr =[];

addBtn.addEventListener('click', function () {
   
    if( !isModalPresent)
    modalCont.style.display = "flex";
    else 
    modalCont.style.display ="none";

    isModalPresent = !isModalPresent;
});



console.log(allpriorityColors);


//to remove and add active class from each priority color of modal container

allpriorityColors.forEach(function (colorEle) {
    colorEle.addEventListener('click', function () {
        allpriorityColors.forEach(function (priorityColorEle)
        {
            priorityColorEle.classList.remove("active");
        });

        colorEle.classList.add("active");
        modalPriorityColor = colorEle.classList[0];
    });
    
});

//to generate and display a ticket 

modalCont.addEventListener('keydown', function (e) {
    let key = e.key;
    console.log(key);
    if( key == "Shift")
    {
        console.log(modalPriorityColor);
        console.log(textAreaCont);
        createTicket(modalPriorityColor, textAreaCont.value);
        modalCont.style.display="none";
        isModalPresent= false;
        textAreaCont.value="";
        allpriorityColors.forEach( function (colorele) {       
            colorele.classList.remove("actvie");
       });
    }
});


//function to create new ticket 

function createTicket( ticketColor, data, ticketId){
  //  console.log(data);
   let id = ticketId || uid();
   console.log( "unique id = ", id);
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class", "ticket-cont");
    console.log(ticketCont);
    console.log(data);
    ticketCont.innerHTML =`
    <div class = "ticket-color ${ticketColor} "></div>
    <div class = "ticket-id">${id}</div>
    <div class = "task-area"> ${data}</div>
    <div class="ticket-lock">
          <i class="fa-solid fa-lock"></i>
     </div>
    `;

    mainCont.appendChild(ticketCont);
    
    handleRemove(ticketCont, id);
    handleColor(ticketCont, id);
    handleLock(ticketCont, id);
    if( !ticketId)
    {
        ticketArr.push({
            ticketColor,
             data, 
             ticketId: id
            });
          localStorage.setItem("tickets", JSON.stringify(ticketArr));
    }
}

// get all tickets from local storage

if( localStorage.getItem("tickets"))
{
    ticketArr = JSON.parse(localStorage.getItem("tickets"));
    ticketArr.forEach(function (ticketObj) {
        createTicket(ticketObj.ticketColor, ticketObj.data, ticketObj.ticketId);

    })
}



// filter tickets on the basis of ticketColor

for( let i=0; i< toolBoxXolors.length; i++)
{
    toolBoxXolors[i].addEventListener("click", function()
    {
        let currTooBoxcolor = toolBoxXolors[i].classList[0];
        let filteredTickets =  ticketArr.filter(function (ticketObj) {
            
            return currTooBoxcolor == ticketObj.ticketColor;
        });
    //remove all tickets 
        let allTickets = document.querySelectorAll(".ticket-cont");
        for(let i=0; i < allTickets.length; i++)
        {
            allTickets[i].remove();
        }
        // display filter tickets
        filteredTickets.forEach(function (ticketObj) {
            createTicket( 
                ticketObj.ticketColor,
                ticketObj.data,
                ticketObj.ticketId
            );
        })
    });
    


// To display all the tickets of all colors on double clicking

    toolBoxXolors[i].addEventListener("dblclicks", function () {
        
        // remove all the color specific tickets
        let allTickets = document.querySelectorAll(".ticket-cont");
        for( let i=0; i<allTickets.length; i++)
        {
            allTickets[i].remove();
        }
        // display all tickets
        ticketArr.forEach(function (ticketObj) {
        createTicket(ticketObj.ticketColor, ticketObj.data, ticketObj.ticketId) ;
        });
    }
    );
}


// on clicking  remove btn , make red, and make color white. 

let removeBtnActive = false;
removeBtn.addEventListener("click", function () {
   
    if( removeBtnActive)
    removeBtn.style.color= "white";
    else 
    {
        removeBtn.style.color="red";
    }
    removeBtnActive = !removeBtnActive;
});


// remove Ticket from local storage and UI
function handleRemove(ticket, id) {
    ticket.addEventListener("click", function()
    {
        if( !removeBtnActive)
            return;

        // get idx of the ticket to be deleted
        let idx = getTicketIdx(id);
        ticketArr.splice(idx, 1);

        // removed from bruser storage and set updated arr
        localStorage.setItem("tickets", JSON.stringify(ticketArr));

        //frontend remove 
        ticket.remove();

    }
    );
    
}

function getTicketIdx(id) {

    let ticketIdx = ticketArr.findIndex(function (ticketObj) {
        return ticketObj.ticketId == id;
    })
    return ticketIdx;
    
}


// change priority color of the  tickets

function handleColor(ticket, id) {
    let ticketColorStrip = ticket.querySelector(".ticket-color");
     ticketColorStrip.addEventListener("click", function () {
        let currTicketColor = ticketColorStrip.classList[1];
        // light pink
     //["lightpink", "lightgreen", "lightblue", "black"];

        let currTicketColorIdx = colors.indexOf(currTicketColor);

        let newTicketColorIdx = (currTicketColorIdx + 1) % colors.length;

        let newTicketColor = colors[newTicketColorIdx];

        ticketColorStrip.classList.remove(currTicketColor);
        ticketColorStrip.classList.add(newTicketColor);

        // update in lcal storage 
        let ticketIdx = getTicketIdx(id);
        ticketArr[ticketIdx].ticketColor = newTicketColor;
        localStorage.setItem("tickets", JSON.stringify(ticketArr));
     });    
}


//lock and unlock to make content editable true or false

function handleLock(ticket, id)
{

   
    let ticketLockEle = ticket.querySelector(".ticket-lock");
    let ticketLock = ticketLockEle.children[0];
    let ticketTaskArea = ticket.querySelector(".task-area");

    console.log("ticket lock = ", ticketLock);
   
    ticketLock.addEventListener("click", function () {
       let ticketIdx = getTicketIdx(id);
       console.log("inside handle lock");
      
       if( ticketLock.classList.contains(lockClass))
       {
           console.log(ticketIdx);
           console.log(lockClass);
           ticketLock.classList.remove(lockClass);
           ticketLock.classList.add(unlockClass);
           ticketTaskArea.setAttribute("contenteditable", "true");
       }
       else 
       {
           ticketLock.classList.remove(unlockClass);
           ticketLock.classList.add(lockClass);
           ticketTaskArea.setAttribute("contenteditable", "false");
       }

       ticketArr[ticketIdx].data = ticketTaskArea.innerText;
       localStorage.setItem("tickets", JSON.stringify(ticketArr));
    });


}