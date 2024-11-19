let http = require("http");
var server = http.createServer((req, res) => {
  res, (end = "Hello Hi Welcome To Vishnu Vardhan Universe VVU");
});
var port = 3000;
server.listen(port, () => {
  console.log("Hi server started " + port);
});

// res.write() --> res.end()
// http://localhost:3000