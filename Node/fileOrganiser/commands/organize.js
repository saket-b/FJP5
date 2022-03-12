
const fs = require("fs");// module

const path = require("path");// path module

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images: ['png','jpg','jpeg']
}


function organize(srcPath) {

    // step 1 : to check if srcpath is present.
    if( srcPath == undefined)
    {
        srcPath = process.cwd();// cwd -> curret directory path
    }

    //2. create a directory
    let orgainizedFiles = path.join(srcPath, "organized_files");

    if( fs.existsSync(orgainizedFiles) == false )
    {
        fs.mkdirSync(orgainizedFiles);
    }
    else 
    console.log("folder already exist");

    // 3. scan the entire srcPath

    let allFiles = fs.readdirSync(srcPath);

    console.log(allFiles);

    //4. traverse
    //console.log(allFiles.length);

    for(let i=0; i<allFiles.length; i++)
    {
        let ext = path.extname(allFiles[i]);
     // let ext = allFiles[i].split(".")[1];
      //console.log("saket");

        console.log(ext);
    }

    
}
let srcPath = "/home/saket/FJP5/Node/fileOrganiser/downloads";
organize(srcPath);