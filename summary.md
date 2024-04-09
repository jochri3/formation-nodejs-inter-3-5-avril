# Introduction à Express.js dans un projet Node.js

## Pourquoi utiliser Express.js au lieu du module HTTP natif ?

Bien que Node.js fournisse un module HTTP intégré pour créer un serveur web, l'utilisation d'Express.js offre plusieurs avantages significatifs :

1. **Abstraction du protocole HTTP** pour vous concentrer sur la logique métier.
2. **Routage simple et flexible** pour différentes URL et méthodes HTTP.
3. **Middleware** permettant d'intercepter les requêtes/réponses et d'exécuter des fonctions intermédiaires.
4. **Plugins et middlewares tiers** pour étendre les fonctionnalités (gestion des sessions, authentification, compression, etc.).
5. **Communauté active et support** avec une documentation complète.

Express.js simplifie le développement d'applications web complexes en fournissant une abstraction de plus haut niveau, un routage puissant, une gestion des middlewares et un vaste écosystème de plugins tiers.

## Installation

1. Créez un nouveau répertoire pour votre projet et initialisez npm.
2. Installez Express en tant que dépendance : `npm install express`

## Création d'une application Express

1. Créez un fichier `app.js` et importez Express.
2. Définissez un middleware pour parser les requêtes JSON.

```javascript
const express = require("express");
const app = express();
app.use(express.json());
```

## Définition des routes

Les routes gèrent les différents chemins d'URL et méthodes HTTP.

```javascript
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/users/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

app.post("/api/users", (req, res) => {
  const user = req.body;
  res.json(user);
});
```

## Middleware supplémentaire

Vous pouvez utiliser divers middleware tiers pour ajouter des fonctionnalités comme le logging.

```javascript
const morgan = require("morgan");
app.use(morgan("dev"));
```

## Démarrage du serveur

Enfin, démarrez le serveur en écoutant sur un port spécifique.

```javascript
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
```

Express.js fournit une structure plus claire et plus maintenable pour le développement d'applications web en Node.js, comparé à l'utilisation directe du module HTTP natif. Avec ses fonctionnalités de routage, de middleware et son écosystème de plugins, Express.js accélère le développement et améliore la maintenabilité du code.
