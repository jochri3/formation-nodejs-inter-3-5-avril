# Utilisation du module `http` en Node.js

Le module `http` de Node.js permet de créer des serveurs HTTP et de gérer les requêtes et les réponses. Voici un résumé de l'utilisation du module `http` basé sur le cours donné aux étudiants.

## Création d'un serveur HTTP

Pour créer un serveur HTTP, nous utilisons la méthode `http.createServer()` qui prend une fonction de rappel en paramètre. Cette fonction sera exécutée à chaque requête reçue par le serveur.

```javascript
const http = require("node:http");

const server = http.createServer((req, res) => {
  // Logique de traitement des requêtes
});
```

## Démarrage du serveur

Une fois le serveur créé, nous devons le démarrer en écoutant sur un port spécifique à l'aide de la méthode `listen()`.

```javascript
const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

## Gestion des routes

### Route GET /articles

Pour récupérer la liste des articles, nous définissons une route qui répond aux requêtes GET sur le chemin `/articles`. Nous renvoyons la liste des articles au format JSON avec un code de statut 200.

```javascript
if (req.method === "GET" && req.url === "/articles") {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(articles));
}
```

### Route GET /articles/:id

Pour récupérer un article spécifique, nous définissons une route qui répond aux requêtes GET sur le chemin `/articles/:id`. Nous extrayons l'ID de l'article à partir du chemin de l'URL, recherchons l'article correspondant dans le tableau `articles` et le renvoyons au format JSON avec un code de statut 200. Si l'article n'est pas trouvé, nous renvoyons une erreur 404.

```javascript
else if (req.method === "GET" && req.url.startsWith("/articles/")) {
  const id = parseInt(req.url.split("/")[2]);
  const article = articles.find((article) => article.id === id);

  if (article) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(article));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Article not found" }));
  }
}
```

### Route POST /articles

Pour créer un nouvel article, nous définissons une route qui répond aux requêtes POST sur le chemin `/articles`. Nous récupérons le corps de la requête en écoutant les événements `data` et `end`. Lorsque toutes les données sont reçues, nous analysons le corps JSON, ajoutons un nouvel ID à l'article et l'ajoutons au tableau `articles`. Nous renvoyons l'article nouvellement créé au format JSON avec un code de statut 201.

```javascript
else if (req.method === "POST" && req.url === "/articles") {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    const newArticle = JSON.parse(body);
    const lastArticleId = articles.length > 0 ? articles[articles.length - 1].id : 0;
    newArticle.id = lastArticleId + 1;
    articles.push(newArticle);

    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(newArticle));
  });
}
```

### Route DELETE /articles/:id

Pour supprimer un article, nous définissons une route qui répond aux requêtes DELETE sur le chemin `/articles/:id`. Nous extrayons l'ID de l'article à partir du chemin de l'URL, recherchons l'index de l'article dans le tableau `articles` et le supprimons en utilisant `splice()`. Nous renvoyons un code de statut 204 si la suppression est réussie, sinon nous renvoyons une erreur 404.

```javascript
else if (req.method === "DELETE" && req.url.startsWith("/articles/")) {
  const id = parseInt(req.url.split("/")[2]);
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
```

### Route PATCH /articles/:id

Pour mettre à jour partiellement un article, nous définissons une route qui répond aux requêtes PATCH sur le chemin `/articles/:id`. Nous extrayons l'ID de l'article à partir du chemin de l'URL, recherchons l'index de l'article dans le tableau `articles`. Si l'article est trouvé, nous récupérons le corps de la requête, analysons les données JSON et mettons à jour les propriétés de l'article correspondant. Nous renvoyons l'article mis à jour au format JSON avec un code de statut 200. Si l'article n'est pas trouvé, nous renvoyons une erreur 404.

```javascript
else if (req.method === "PATCH" && req.url.startsWith("/articles/")) {
  const id = parseInt(req.url.split("/")[2]);
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
```

## Gestion des erreurs

Pour les routes non trouvées, nous renvoyons une erreur 404 avec un message approprié.

```javascript
else {
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Route not found" }));
}
```
