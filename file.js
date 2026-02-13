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

fs.cp("./cse-c.txt","b.txt",(err)=>{
        if(err){
            console.log("error",err)
        }else{
            console.log("copy successful");
        }
})

