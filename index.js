const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("this is my home page");
  } else if (req.url === "/about") {
    res.end(<img src="/image"></img>);
  } else if (req.url === "/contactus") {
    res.end("this is my contact us page");
  } else if (req.url === "/home") {
    res.end("this is my home page\n Welcome to ABES EC");
  } else {
    res.end("404 page not found");
  }
});

server.listen(8000, () => {
  console.log("Server is run");
});
