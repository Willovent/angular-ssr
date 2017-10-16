# Angular Server Side Rendering (SSR)

Ce projet est une implémentation simple du rendu coté serveur avec [express](https://github.com/expressjs/express) sur Node.Js.
L'application en elle même est une todo list.
![todo-list](https://i.imgur.com/2uA4ywp.png)

## Build du projet

La CLI Angular n'a pas été éjectée afin de pourvoir continuer à utiliser des générateurs (`ng g c monComposant` par exemple). 
La build de ce projet s'effectue donc en 2 étapes :
 1. `ng build -prod`
 2. `webpack --config="webpack.server.config.ts"`

Pour lancer le serveur, il suffit ensuite de se placer dans le répertoire `dist` et d'y lancer la commande `node ./main.server.js`

## Preboot

Une branche `preboot.js` est disponible. Elle présente une utilisation de preboot (Mécanisme permettant d'enregistrer les événements entre le moment où la page est rendue par le browser le moment ou l'application angular est bootstrapé).
Les fichiers impactés sont le module serveur (`app.server.module.ts`) pour lancer l'enregistrement des événements et le module client (`app.module.ts`) pour le replay de ces évenements 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.7.