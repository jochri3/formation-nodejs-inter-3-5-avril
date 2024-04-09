# Organisation du projet

## Répertoire racine

- `package.json` et `package-lock.json` : Fichiers de gestion des dépendances npm.
- `request.http` : Fichier contenant des exemples de requêtes HTTP pour tester l'API.
- `src/` : Répertoire contenant le code source de l'application.
- `tasks.json` : Fichier JSON servant de base de données simple pour stocker les tâches.
- `structure.txt` et `summary.md` : Fichiers de documentation du projet.

## Répertoire `src/`

- `index.js` : Point d'entrée principal de l'application, où le serveur Express est configuré et démarré.
- `tasks/` : Répertoire dédié à la fonctionnalité de gestion des tâches.
  - `tasks.controllers.js` : Contient les contrôleurs qui gèrent les routes et la logique métier pour les tâches.
  - `tasks.repository.js` : Fournit une abstraction pour interagir avec la source de données (ici, un fichier JSON).
  - `tasks.routes.js` : Définit les routes de l'API pour les tâches et les associe aux contrôleurs correspondants.
  - `tasks.service.js` : Contient la logique métier pour les opérations sur les tâches.
- `utils/` : Répertoire contenant des utilitaires réutilisables.
  - `file.utils.js` : Fonctions utilitaires pour interagir avec le système de fichiers.
  - `generate-unique-id.util.js` : Fonction utilitaire pour générer un identifiant unique.

## Avantages de cette structure

1. **Séparation des préoccupations** : Chaque fichier ou répertoire a une responsabilité bien définie, ce qui facilite la maintenance et l'évolution du code.
2. **Modularité** : Les fonctionnalités sont divisées en modules distincts (ici, la gestion des tâches), ce qui permet une meilleure réutilisabilité et une évolutivité accrue.
3. **Maintenabilité** : Le code est organisé de manière logique et cohérente, ce qui facilite la compréhension et la modification du code par d'autres développeurs.
4. **Testabilité** : La séparation des préoccupations et la modularité permettent de tester plus facilement chaque composant individuellement.
5. **Extensibilité** : L'ajout de nouvelles fonctionnalités est simplifié, car elles peuvent être ajoutées dans leurs propres répertoires et modules dédiés, sans perturber le reste du code.
