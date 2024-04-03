const http = require("node:http");

// Tableau pour stocker les articles en mémoire
let articles = [
  {
    id: 1,
    title: "Premier article",
    content: "Contenu du premier article",
    author: "John Doe",
    date: "2023-06-08",
  },
  {
    id: 2,
    title: "Deuxième article",
    content: "Contenu du deuxième article",
    author: "Jane Smith",
    date: "2023-06-09",
  },
];

const server = http.createServer((req, res) => {
  // Analyse de l'URL de la requête
  const url = new URL(req.url, `http://${req.headers.host}`);
  const path = url.pathname;

  // Route GET /articles
  if (req.method === "GET" && path === "/articles") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(articles));
  }

  // Route GET /articles/:id
  else if (req.method === "GET" && path.startsWith("/articles/")) {
    const id = parseInt(path.split("/")[2]);
    const article = articles.find((article) => article.id === id);

    if (article) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(article));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Article not found" }));
    }
  }

  // Route DELETE /articles/:id
  else if (req.method === "DELETE" && path.startsWith("/articles/")) {
    const id = parseInt(path.split("/")[2]);
    const index = articles.findIndex((article) => article.id === id);

    if (index !== -1) {
      articles.splice(index, 1);
      res.writeHead(204);
      res.end();
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Article not found" }));
    }
  }

  // Route POST /article
  else if (req.method === "POST" && path === "/articles") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const newArticle = JSON.parse(body);
      const lastArticleId =
        articles.length > 0 ? articles[articles.length - 1].id : 0;
      newArticle.id = lastArticleId + 1;
      articles.push(newArticle);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newArticle));
    });
  }

  // Route PATCH /article/:id
  else if (req.method === "PATCH" && path.startsWith("/articles/")) {
    const id = parseInt(path.split("/")[2]);
    const articleIndex = articles.findIndex((article) => article.id === id);

    if (articleIndex !== -1) {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", () => {
        const updatedData = JSON.parse(body);
        articles[articleIndex] = { ...articles[articleIndex], ...updatedData };

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(articles[articleIndex]));
      });
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Article not found" }));
    }
  }

  // Route non trouvée
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
