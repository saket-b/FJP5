

var uid = new ShortUniqueId();
const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
let colors = ['lightpink', 'lightgreen', 'lightblue', 'black'];
let modalPriorityColor = colors[colors.length - 1]; //black
let textAreaCont = document.querySelector(".textarea-cont");

console.log("text "+ textAreaCont);
const allpriorityColors = document.querySelectorAll(".priority-color");
const mainCont = document.querySelector(".main-cont");

let isModalPresent = false;
console.log(addBtn);

let ticketArr =[];

addBtn.addEventListener('click', function () {
   
    if( !isModalPresent)
    modalCont.style.display = "flex";
    else 
    modalCont.style.display ="none";

    isModalPresent = !isModalPresent;
});



console.log(allpriorityColors);

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




function createTicket( ticketColor, data, ticketId){
  //  console.log(data);
   let id = ticketId || uid();
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class", "ticket-cont");
    console.log(ticketCont);
    console.log(data);
    ticketCont.innerHTML =`
    <div class = "ticket-color ${ticketColor} "></div>
    <div class = "ticket-id"></div>
    <div class = "task-area"> ${data}</div>
    `;
    mainCont.appendChild(ticketCont);

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




