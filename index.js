const http = require("node:http");

const tasks = [
  { id: 1, taskName: "Create home page", completed: false },
  { id: 2, taskName: "Create about page", completed: true },
];
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/api/tasks") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(tasks));
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});
