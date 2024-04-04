# Introduction à npm (Node Package Manager)

npm (Node Package Manager) est un outil essentiel dans l'écosystème Node.js. Il se compose de deux éléments principaux : un utilitaire en ligne de commande pour gérer les dépendances et un registre de modules tiers prêts à l'emploi.

## Utilitaire en ligne de commande

L'utilitaire en ligne de commande npm permet aux développeurs de gérer facilement les dépendances de leur projet Node.js. Il est inclus directement avec Node.js et peut être utilisé pour installer, désinstaller et mettre à jour des packages.

Pour vérifier la version installée de npm, il suffit d'exécuter la commande suivante dans le terminal :

```
npm --version
```

## Registre de modules tiers

npm est également un registre en ligne qui héberge une vaste collection de packages open source créés par des développeurs du monde entier. Ces packages peuvent être facilement intégrés dans un projet Node.js pour étendre ses fonctionnalités.

Le site web officiel de npm (https://www.npmjs.com/) sert de référence pour rechercher et découvrir les packages disponibles.

## Fichier package.json

Pour utiliser npm dans un projet Node.js, il est nécessaire de créer un fichier `package.json` à la racine du projet. Ce fichier sert de manifeste et contient des informations essentielles sur le projet, telles que sa version, son auteur, ses dépendances, etc.

Pour créer un fichier `package.json`, il faut exécuter la commande suivante dans le terminal :

```
npm init
```

Cette commande lance un assistant interactif qui pose une série de questions pour générer le fichier. Pour accepter toutes les valeurs par défaut, il est possible d'ajouter le paramètre `--yes` ou `--y` :

```
npm init --y
```

## Installation de dépendances

npm offre deux manières d'installer des dépendances : en tant que package global ou en tant que package local à un projet.

### Installation globale

Pour installer un package global, utilisez la commande suivante :

```
npm install -g nom_package
```

Cela installera la version la plus récente du package. Pour installer une version spécifique, ajoutez le numéro de version après le nom du package :

```
npm install -g nom_package@numéro_version
```

Les packages installés globalement sont accessibles en tant qu'utilitaires en ligne de commande depuis n'importe où sur le système.

### Installation locale

Pour installer un package local à un projet, deux options sont possibles :

1. Installation en tant que dépendance de l'application :

   ```
   npm install nom_du_package
   ```

2. Installation en tant que dépendance de développement :
   ```
   npm install --save-dev nom_du_package
   ```

Les dépendances de développement sont généralement des outils utilisés pendant le développement, comme des linters ou des bibliothèques de test.

## Désinstallation de packages

Pour désinstaller un package, utilisez la commande suivante :

```
npm uninstall nom_du_package
```

## Gestion du dossier node_modules

Le dossier `node_modules`, qui contient toutes les dépendances installées, doit être ajouté au fichier `.gitignore` pour éviter de le versioner. Lorsqu'un autre développeur clone le projet, il lui suffit d'exécuter la commande `npm install` pour reconstruire ce dossier à partir du fichier `package.json`.

## Audit de sécurité

npm fournit également des commandes pour auditer les dépendances et identifier les vulnérabilités de sécurité :

- `npm audit` : Analyse les dépendances et signale les problèmes de sécurité.
- `npm audit fix` : Tente de corriger automatiquement les vulnérabilités en mettant à jour les dépendances.
