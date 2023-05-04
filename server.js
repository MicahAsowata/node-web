const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  res.write("<p>Hello 🥷🏾🥷🏾🌍🌍🌍</p>");
  res.write("<p>Hello again 🥷🏾🥷🏾🌍🌍🌍</p>");

  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests");
});
