# Architecture en couche & Intégration de Prisma avec une base de données existante

## Intégration de Prisma

Prisma est un ORM (Object-Relational Mapping) moderne et performant pour Node.js qui simplifie l'interaction avec les bases de données. Voici les étapes pour intégrer Prisma dans un projet existant avec une base de données PostgreSQL, en suivant le guide de Prisma.

Le guide utilisé pour mettre en place Prisma se base sur la documentation officielle : [Add to existing project](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-postgresql)

## Architecture en couches

L'architecture en couches est un modèle de conception architectural qui vise à organiser une application en plusieurs couches distinctes, chacune ayant des responsabilités spécifiques. Cette approche favorise la séparation des préoccupations, la réutilisabilité du code et la maintenabilité de l'application. Voici une explication détaillée de chaque couche :

## 1. Couche de base de données (Database Layer)

La couche de base de données est responsable de la persistance des données. Elle comprend la base de données elle-même ainsi que les scripts et les outils nécessaires pour interagir avec elle. Cette couche est généralement gérée par un système de gestion de base de données (SGBD) tel que MySQL, PostgreSQL, MongoDB, etc.

La couche de base de données stocke les données de manière structurée et fournit des mécanismes pour les récupérer, les modifier et les supprimer. Elle garantit également l'intégrité des données en appliquant des contraintes et des règles définies dans le schéma de la base de données.

## 2. Couche de persistance (Persistence Layer)

La couche de persistance, également connue sous le nom de couche d'accès aux données (Data Access Layer - DAO) ou de couche de dépôt (Repository Layer), est responsable de l'interaction avec la base de données. Elle fournit une abstraction entre la couche de base de données et les couches supérieures de l'application.

Cette couche contient des classes et des interfaces qui définissent les opérations de persistance, telles que la création, la lecture, la mise à jour et la suppression des données (CRUD). Elle encapsule la logique d'accès aux données et fournit une interface uniforme pour interagir avec la base de données, indépendamment de la technologie de base de données sous-jacente.

Les principaux composants de la couche de persistance sont les suivants :

- DAO (Data Access Objects) : Objets qui fournissent des méthodes pour interagir avec la base de données.
- Repositories : Classes qui encapsulent la logique d'accès aux données et fournissent une interface de plus haut niveau pour les opérations de persistance.
- ORM (Object-Relational Mapping) : Frameworks qui facilitent le mappage entre les objets de l'application et les tables de la base de données, abstraisant ainsi les détails de la base de données.

## 3. Couche de logique métier (Business Logic Layer)

La couche de logique métier, également appelée couche de services, contient les règles et les processus métier de l'application. Elle est responsable de la coordination et de l'exécution des opérations liées aux fonctionnalités principales de l'application.

Cette couche utilise les services fournis par la couche de persistance pour récupérer et manipuler les données, mais elle ne se préoccupe pas des détails de l'accès aux données. Elle se concentre plutôt sur la logique métier, les calculs, les validations et les transformations de données.

Les services de la couche de logique métier sont généralement organisés en fonction des domaines ou des cas d'utilisation de l'application. Ils fournissent des interfaces bien définies pour les opérations métier et sont utilisés par la couche de présentation.

## 4. Couche de présentation (Presentation Layer)

La couche de présentation, également appelée couche d'interface utilisateur (User Interface Layer) ou couche de contrôleur (Controller Layer), est responsable de l'interaction avec les utilisateurs finaux. Elle gère la logique de présentation, la gestion des entrées utilisateur et l'affichage des données.

Cette couche comprend généralement les composants suivants :

- Contrôleurs : Classes qui gèrent les requêtes des utilisateurs, appellent les services de la couche de logique métier et préparent les données pour la vue.
- Vues : Composants responsables de l'affichage des données à l'utilisateur, souvent sous forme de pages Web, d'interfaces utilisateur graphiques (GUI) ou d'API.
- Modèles de vue (View Models) : Objets qui représentent les données spécifiques à la vue et qui sont utilisés pour le transfert de données entre le contrôleur et la vue.

La couche de présentation communique avec la couche de logique métier pour récupérer les données nécessaires et les présenter à l'utilisateur. Elle gère également les interactions utilisateur, telles que les saisies de formulaires, les clics sur les boutons, etc., et transmet ces actions à la couche de logique métier pour traitement.

## Conclusion

L'architecture en couches permet de structurer une application de manière modulaire et organisée. Chaque couche a des responsabilités spécifiques et communique avec les couches adjacentes de manière bien définie. Cette approche facilite la maintenance, les tests et l'évolution de l'application, car les modifications apportées à une couche ont un impact minimal sur les autres couches.

Cependant, il est important de noter que l'architecture en couches n'est qu'un modèle parmi d'autres et qu'il peut être adapté en fonction des besoins spécifiques de l'application. Des variantes telles que l'architecture hexagonale, l'architecture en oignon ou l'architecture en microservices peuvent également être utilisées en fonction du contexte et des exigences du projet.
