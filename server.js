const http = require("http");

const todos = [
  { id: 1, text: "Todo One" },
  { id: 2, text: "Todo Two" },
  { id: 3, text: "Todo Three" },
];

const server = http.createServer((req, res) => {
  res.writeHead(404, {
    "Content-Type": "application/json",
    "X-Powered-By": "Node.js",
  });

  let body = [];
  req
    .on("data", (chunck) => {
      body.push(chunck);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();
      console.log(body);
    });

  res.end(
    JSON.stringify({
      success: true,
      data: todos,
    })
  );
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server Running On Port ${PORT}`));

// HTTP Status Code

// 1.XX Infomational

// 2.XX Success
// 200 Success
// 201 Created
// 204 No Content

// 3.XX Redirection
// 304 Not Modified

// 4.XX Client Error
// 400 Bad Request
// 401 Unauthorized
// 404 Not Found

// 5.XX Server Error
// 500 Internal Server Error
