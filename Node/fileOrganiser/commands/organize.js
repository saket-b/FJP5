
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
     //   let ext = path.extname(allFiles[i]);
    //   let ext = allFiles[i].split(".")[1];
    //   //console.log("saket");

    //     console.log(ext);

    let fullPath = path.join(srcPath,allFiles[i])

    //1. check if it is a file or folder;

        let isFile  = fs.lstatSync(fullPath).isFile();

         if( isFile)
         {
             //1.1 get ext name
             let ext = path.extname(allFiles[i]).split(".")[1];

         // 1.2 get folder name  of extension
            let folderName = getFolderName(ext);
            console.log(folderName);

         //paste to src to des folder
                            //src               //des
            copyFileToDest(srcPath, fullPath, folderName);
         }

    }

    
}


function getFolderName(ext) {
    let folderName;

    for( let key in types)
    {
        //console.log(key);

        for( let i=0; i<types[key].length; i++)
        {
            if(types[key][i] == ext)
            return key;
        }
    }


    return "mislenious";
}

function copyFileToDest(srcPath, fullPath, folderName) {

    //1. make folder path;
    
    let desFolderPath = path.join(srcPath, "organized_files", folderName);

    //2. check folder if  not exist then make directory

    if( !fs.existsSync(desFolderPath))
    {
        fs.mkdirSync(desFolderPath);
    }

    // 3. copy file from src folder to des folder

    let filename = path.basename(fullPath);

    let destFileName = path.join(desFolderPath, filename);
                    //src     //des
    fs.copyFileSync(fullPath, destFileName);



    
}
//let srcPath = "/home/saket/FJP5/Node/fileOrganiser/downloads";
//organize(srcPath);

module.exports = {
    organize:organize
  }