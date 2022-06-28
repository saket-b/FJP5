let gallery = document.querySelector(".gallery");

gallery.addEventListener("click", () =>{

    location.assign("./gallery.html");
});



var uid = new ShortUniqueId();
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
        console.log("rec started");
    });

    recorder.addEventListener("dataavailable", (e)=>{

        chunks.push(e.data);
        console.log("recordeing pause");
    });
    recorder.addEventListener("stop", ()=>{

        // convert video
        let blob = new Blob(chunks, {type : 'video/mp4'});
        chunks=[]
        console.log("rec stop");
        //download video on desktop


        let videoUrl = URL.createObjectURL(blob);
         console.log(videoUrl);

        // let a = document.createElement('a');
        // a.href = videoUrl;
        // a.download = "myVideo.mp4";
//a.click();

        if( db)
        {
            let videoId = uid();
            let dbTransaction = db.transaction("video", "readwrite");

            let videoStore = dbTransaction.objectStore("video");

            let videoEntry={
                id      :`vid-${videoId}`,
                blobDat :    blob,
            };

            let addRequest = videoStore.add(videoEntry);

            addRequest.onsuccess=()=>{
                console.log("video added to db successfully");
            };
        }

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

    if( db)
        {
            let imageId = uid();
            let dbTransaction = db.transaction("image", "readwrite");

            let imageStore= dbTransaction.objectStore("image");

            let imageEntry={
                id : imageId,
                url:imageUrl,
            };

            let addRequest = imageStore.add(imageEntry);

            addRequest.onsuccess=()=>{
                console.log("image added to db successfully");
            };
        }

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
  //  console.log("saket");
    timer.innerText = '00:00:00';
    timer.style.display='none';
    
}


let filterLayer = document.querySelector(".filter-layer");
let allFilters = document.querySelectorAll(".filter");
console.log(allFilters);
allFilters.forEach((filterElem) => {
    console.log("filter");
    filterElem.addEventListener('click', () => {
        transparentColor = getComputedStyle(filterElem).getPropertyValue('background-color');
        filterLayer.style.backgroundColor = transparentColor;
    })
})



