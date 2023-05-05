const port = 3000;
const http = require("http");
const fs = require("fs");
const lodash = require("lodash");
const server = http.createServer((req, res) => {
  const greet = lodash.once(() => {
    console.log("Hello 🌍🌍🌍");
  });
  greet();
  greet();
  res.setHeader("Content-Type", "text/html");
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-us":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err.message);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});
server.listen(port, "localhost", () => {
  console.log(`listening for requests http://localhost:${port}`);
});
