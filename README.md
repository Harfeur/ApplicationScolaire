# Application scolaire

Node.JS et NPM doivent être installés. Pour les installer, suivre le tuto officiel :
* [Ubuntu / Debian](https://github.com/nodesource/distributions#installation-instructions)
* [Windows, Mac ...](https://nodejs.org/en/download)

### Installation des paquets

Pour installer les paquets, taper `npm install` dans le terminal depuis le répertoire du projet.

Il est recommandé d'effectuer cette action après chaque mise à jour `git pull`.

### Exécution du serveur

Le serveur s'exécute avec `npm start`. Il est possible de créer une configuration avancée pour passer des paramètres
personnalisés, comme le port du serveur.

## Organisation

* Le fichier `app/api.js` contient les requêtes que le serveur doit traiter (requête base de données, connexion ...).
* Le dossier `public` contient les fichiers accessibles sans modification par le serveur (html, css, js ...)