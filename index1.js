let http = require("http");
let server = http.createServer((req, res) => {
  req.url = "User";
  if (req.url == "User") {
    res.end(
      "NAME: CH. SIVA SHANKAR\n ROLL NUMBER: 204N1A3508\n  COURSE: B.TECH\n  BRANCH: CSE-IOT\n  ADDRESS: CHINNALATRIP"
    );
  } else {
    res.end("NO USER FOUND");
  }
});
var port = 3003;
server.listen(port, () => {
  console.log("Hi server is Started " + port);
});

// res.write() --> res.end()
// http://localhost:303

