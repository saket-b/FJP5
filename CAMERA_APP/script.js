
let video = document.querySelector("video");
let captureBtnCont = document.querySelector(".capture-btn-cont");

let captureBtn = document.querySelector(".capture-btn");

let transparentColor = "transparent";

let recorderBtnCont = document.querySelector(".record-btn-cont");
let recordBtn = document.querySelector(".record-btn");
let recorder;
let chunks=[];
let shoulRecord = false;

let constraints={
    video:true,
    Audio:true,
};

navigator.mediaDevices.getUserMedia(constraints)
.then((stream) =>{

    video.srcObject = stream;

    recorder = new MediaRecorder(stream);
    recorder.addEventListener("start", (e)=>{
        chunks= [];
    });

    recorder.addEventListener("dataavailable", (e)=>{

        chunks.push(e.data);
    });
    recorder.addEventListener("stop", ()=>{

        // convert video
        let blob = new Blob(chunks, {type : 'video/mp4'});
        console.log(blob);
        //download video on desktop


        let videoUrl = URL.createObjectURL(blob);
        console.log(videoUrl);

        let a = document.createElement('a');
        a.href = videoUrl;
        a.download = "myVideo.mp4";
//a.click();

    })
});

// click photo;

captureBtnCont.addEventListener("click", (e)=>{

    captureBtn.classList.add("scale-capture");
    let canvas = document.createElement("canvas");
    let tool = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height= video.videoHeight;

    tool.drawImage(video, 0, 0, canvas.width, canvas.height);

    // apply filter on photos

    tool.fillStyle = transparentColor;
    tool.fillRect(0, 0, canvas.width, canvas.height);

    let imageUrl = canvas.toDataURL();

// this is showing for photo in bottom
//    let img = document.createElement("img");
//     img.src = imageUrl;
//     document.body.append(img);

    setTimeout(()=>{
        captureBtn.classList.remove("scale-capture");
    }, 510);


});


recorderBtnCont.addEventListener("click" , ()=>{

    shoulRecord = !shoulRecord;
    if( shoulRecord)
    {
        recordBtn.classList.add("scale-record");
        recorder.start();
       startTimer();
    }
    else 
    {
        recordBtn.classList.remove("scale-record");
        recorder.stop();
        stopTimer();
    }

});

let counter=0;
let timer = document.querySelector('.timer');
let timerId;

function startTimer() {
    timer.style.display ='block';

    function displayTimer() {
        let totalSeconds = counter;
        console.log(counter);
        let hour = Number.parseInt(totalSeconds/3600)
        totalSeconds = totalSeconds%3600;

        let min = Number.parseInt(totalSeconds/60);
        totalSeconds = totalSeconds % 60;

        let sec = totalSeconds;

        hour = ( hour < 10)? `0${hour}`: hour;
        min = ( min < 10)? `0${min}`: min;
        sec = ( sec < 10)? `0${sec}`:sec;

        timer.innerText = `${hour}:${min}:${sec}`;

        counter++;
    }

    timerId = setInterval(displayTimer, 1000);
    
    counter =0;
}

function stopTimer() {
    clearInterval(timerId);
    console.log("saket");
    timer.innerText = '00:00:00';
    timer.style.display='none';
    
}

let filterlayers = document.querySelector(".filter-layer");

let allfilters = document.querySelectorAll(".filter");



    
allfilters.forEach((filterElem) => {
    filterElem.addEventListener('click', () => {
        transparentColor = getComputedStyle(filterElem).getPropertyValue('background-color');
        filterlayers.style.backgroundColor = transparentColor;
    })
});

