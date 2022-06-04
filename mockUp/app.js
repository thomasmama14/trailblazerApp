const http = require("http");
const port = 4050;
const handlers = require("./handlers");

http
  .createServer((req, res) => {
    for (let handler of handlers) {
      if (!handler(req, res)) {
        break;
      }
    }

    // res.writeHead(200, {
    //   "Content-Type": "text/plain",
    // });

    // res.write("HELLO JS WORLD!");
    // res.end();
  })
  .listen(port, () => {
    console.log(`The server is running: https://localhost:${port}`);
  });