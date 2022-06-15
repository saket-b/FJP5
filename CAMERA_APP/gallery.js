d

let imageDBTRansaction = db.transaction("image", 'readonly');

let imageStore = imageDBTRansaction.objectStore("image");
let imageRquest = imageStore.getAll();

imageRquest.onsuccess=()=>{

    let imageresult = imageRquest.result;
    let galleryCont = document.querySelector(".gallery-cont");

    imageresult.forEach(( imgobj) => {
        let imageElem = document.createElement("div");
        imageElem.setAttribute("class", "media-cont");
        imageElem.setAttribute("id", imgobj.id);

        let url = imgobj.url;

        imageElem.innerHTML =`
        <div>
        <img src = "${url}"/>
        </div>
        <div class = "delete" > DELETE</div>
        <div class = "download">DOWNLOAD</div>
        `

        galleryCont.append(imageElem);
        
    });
}