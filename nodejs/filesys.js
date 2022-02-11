
let fs = require("fs");

// Read
let buffer = fs.readFileSync("abc.js");
// console.log("data to show " + buffer);

// Create

// fs.openSync("ab.txt", "w");

// create write

// fs.writeFileSync("ab.txt", "kaisy ho ")

// update

// fs.appendFileSync("ab.txt", "Theak ho naa")


// Folder
//Create a folder
// fs.mkdirSync("myfold")
// fs.writeFileSync("myfold/ba.txt", "hi from ba")

// read
// readdirsync

// remove file from folder

// let content = fs.readdirSync("myfold");
// for(let i = 0; i < content.length ; i++){
//     console.log("file is removed", content[i]);
//     fs.unlinkSync("myfold/" + content[i]);
// }
// Remove folder
// fs.rmdirSync("myfold")

// for (let i = 1; i < 10; i++ ){
// let dirpathtomake = `Lecture-${i}`;
// fs.mkdirSync(dirpathtomake);
// fs.writeFileSync(dirpathtomake + "//" + "readme.md", `readme from ${dirpathtomake}`);
// }

// let path = require("path")
// for (let i = 1; i < 10; i++ ){
//     let dirpathtomake = `Lecture-${i}`;
//     fs.mkdirSync(dirpathtomake);
//     fs.writeFileSync(path.join(dirpathtomake + "//" + "readme.md"), `readme from ${dirpathtomake}`);
//     }

// let content = fs.readdirSync("myfold");
// for(let i = 0; i < content.length ; i++){
//     console.log("file is removed", content[i]);
//     fs.unlinkSync("myfold/" + content[i]);
// }

for (let i = 1; i < 10; i++ ){
let dirpathtomake = `Lecture-${i}`;
fs.rmdirSync(dirpathtomake);
// fs.unlinkSync(dirpathtomake +  "//" + "readme.md"  );
// fs.mkdirSync(dirpathtomake);
// fs.writeFileSync(dirpathtomake + "//" + "readme.md", `readme from ${dirpathtomake}`);
}