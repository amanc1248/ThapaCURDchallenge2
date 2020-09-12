//1) requiring the file system module.
const fs =  require('fs');
fs.writeFile("bio.txt","This is the first file froom async method", ()=>{
    console.log("file is created");
});