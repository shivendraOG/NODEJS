const fs = require("fs");

//fs.writeFile("./cse-c.txt","hi we are coder in node",()=>{});
// fs.readFile("./cse-c.txt","utf-8",(err, res)=>{
//     if(err){
//         console.log("error",err)
//     }else{
//         console.log(res);
//     }
// })

// fs.writeFile("./cse-c.txt",'Hello Node.js', 'utf8', (err)=>{
//     if(!err){
//         console.log("write successful");
//     }
// });

// fs.appendFileSync("./cse-c.txt",`is good college`);

// fs.cp("./cse-c.txt","b.txt",(err)=>{
//         if(err){
//             console.log("error",err)
//         }else{
//             console.log("copy successful");
//         }
// })

// fs.unlink("./cse-c.txt",(err)=>{
//     if(err){
//         console.log("error",err);
//     }else{
//         console.log("delete successful");
//     }
// });


const os= require('os');

console.log("platfrom", os.platform());
console.log("userinfo",os.userInfo());
console.log("cpu",os.arch())

console.log("total memory", os.totalmem())
console.log("")
console.log("uptime",os.uptime())
console.log("home directory",os.homedir())
console.log("host time",os.hostname() )