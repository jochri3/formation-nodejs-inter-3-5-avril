# Les modules en Node.js

Les modules en Node.js permettent de diviser une application en plusieurs fichiers et fonctionnalités réutilisables. Node.js prend en charge deux systèmes de modules : CommonJS (utilisé par défaut) et ES6 (disponible dans les versions récentes de Node.js).

## 1. Exportation/Importation de modules

##### a. Exportation nommée (CommonJS)

Avec CommonJS, vous pouvez exporter des fonctionnalités spécifiques d'un module en les assignant à l'objet `module.exports`. Voici un exemple :

```javascript
// monModule.js
function maFonction() {
  console.log("Fonction appelée depuis le module");
}

const maVariable = "Valeur de la variable";

module.exports = {
  maFonction,
  maVariable,
};
```

##### b. Exportation par défaut (CommonJS)

Vous pouvez également définir une exportation par défaut en assignant directement une valeur à `module.exports`. Voici un exemple :

```javascript
// monModule.js
function maFonction() {
  console.log("Fonction appelée depuis le module");
}

module.exports = maFonction;
```

#### d.Importation de modules CommonJS

Pour importer un module CommonJS, vous utilisez la fonction `require()`. Voici comment importer les modules exportés précédemment :

```javascript
// app.js
const monModule = require("./monModule");

monModule.maFonction();
console.log(monModule.maVariable);
```

## 2. Conclusion

Les modules permettent de structurer le code en unités réutilisables et de gérer les dépendances. Vous pouvez utiliser les exportations nommées et les exportations par défaut pour exposer des fonctionnalités spécifiques d'un module. L'importation de modules se fait à l'aide de `require()` pour CommonJS .
