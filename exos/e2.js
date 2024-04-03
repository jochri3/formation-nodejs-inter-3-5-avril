const http = require("node:http");

const tasks = [
  { id: 1, taskName: "Create home page", completed: false },
  { id: 2, taskName: "Create about page", completed: true },
];
// Ajouter une route pour récupérer une seule tache et gérer le cas du not found
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/api/tasks") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(tasks));
    } else if (req.url.startsWith("/api/tasks/")) {
      const id = parseInt(req.url.split("/")[3]);
      const task = tasks.find((task) => task.id === id);
      if (task) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(task));
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Task not found" }));
      }
    }
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});
