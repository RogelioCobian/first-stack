// To install express
// npm install --save express
// run node server using node fileName.js

// console.log('Hello!');

/* Original intro code for creation of server and listening to what it does  */

// // Require is the nodejs import syntax and this simply imports this package and stores its content
// // require accepts the import of all express middleware from app.js
// const http = require('http');
// const app = require('./backend/app');

// const port = process.env.PORT || 3000;

// app.set('port', port);
// const server = http.createServer(app);

// // const server = http.createServer((req, res) => {
// //   res.end('This is my first response');
// // });

// server.listen(port);

/*  End of OG intro code   */


/*  Copied better server.js code. Essentially does the same thing, but it fails with grace  */

// npm install --save-dev nodemon = when changes are made to the server, it automaticlly restarts

const app = require("./backend/app");
const debug = require("debug")("node-angular");
const http = require("http");


const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);


