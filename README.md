# Portfolio - ROBIN-Thibaud
Étudiant en Réseaux et Télécommunications (parcours AdminCloud), je vise à devenir administrateur système.

Ce portfolio est un projet pratique qui me permet de mettre en application mes différentes compétences acquises tout au long de mon cursus en conteneurisation, automatisation, création de site web, etc.

## Version actuelle du projet : v0.1.0

Cette première version met en place les fondations techniques du projet
- **Conteneurisation (Production)** : Environnement prêt à l'emploi basé sur Docker et un serveur web Nginx.
- **Automatisation (GitHub Actions)** : Déploiement automatisé de l'image Docker sur le GitHub Container Registry (GHCR).
- **Versioning intelligent** : Gestion automatisée des tags Docker (latest, tags sémantiques et hash du commit) via les workflows.
- **Architecture Web** : Utilisation de JavaScript, HTML5 et de Bootstrap 5

## Accéder au site :
Le site est mis en ligne via GitHub :
[Mon site](https://robin-thibaud.github.io/)

Il est également possible d'avoir le site en local grâce à la conteneurisation avec Docker.
Pour ce faire vous avez besoin d'avoir Docker installé sur votre poste.
[Installation de Docker](https://docs.docker.com/get-started/get-docker/)

Choisir la version de Docker en fonction de votre plateforme.

Une fois votre Docker installé, vous pouvez soit directement pull l'image Docker depuis GitHub, ou cloner le dépôt et lancer le Docker compose 

### Pull de l'image Docker depuis GitHub :
Pour avoir la dernière version :<br>
Dans un terminal exécutez ces commandes.
```bash
docker pull ghcr.io/robin-thibaud/robin-thibaud.github.io:latest
docker container run --name monconteneur -p 8080:80 -d ghcr.io/robin-thibaud/robin-thibaud.github.io:latest
```
Pour avoir la version sémantique :
```bash
docker pull ghcr.io/robin-thibaud/robin-thibaud.github.io:vx.x.x
docker container run --name monconteneur -p 8080:80 -d ghcr.io/robin-thibaud/robin-thibaud.github.io:vx.x.x
```
Le site est désormais accessible via cette adresse [http://localhost:8080](http://localhost:8080)

### Clonage du dépôt:
Pour avoir le dépôt en local :
```bash
git clone https://github.com/Robin-Thibaud/robin-thibaud.github.io.git
```
Une fois dans le dossier dans un terminal exécutez ces commandes :
```bash
docker compose up -d
```
Le site est désormais accessible via cette adresse [http://localhost:8080](http://localhost:8080)

## Licence
- Le code source (HTML, JS, etc) de ce projet est sous licence MIT.
- Le contenu textuel, le design et les images personnelles sont la propriété exclusive de ROBIN Thibaud (Tous droits réservés).