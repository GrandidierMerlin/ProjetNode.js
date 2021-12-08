# ProjetNode.js
GRANDE AIDE pour utiliser Github, surtout l'encadré noir en bas à droite "Commit son projet sur Github".
https://raw.githubusercontent.com/JustFS/cours-github/master/versionner.png


DATE DE RENDU: 07 JANVIER 2022

respecter les normes RESTFULL

Blog simplifié:
    Gestion des utilisateurs
        -
        -
        -
    Gestion des articles
        -
        -
        -
    Gestion des commentaires
        -
        -
        -

GESTION COMPTE
Créer un compte: lastname,firstname, email, password
Se connecter: email, password
Récuperer ses informations
Modifier SES propres informations

BDD user:
lastname STRING NOT NULL
firstname STRING NOT NULL
email STRING NOT NULL (vérifier que type email)
password STRING NOT NULL (encodé en bcrypt)
createdAt DATETIME NOT NULL
updatedAt DATETIME NOT NULL
isAdmin BOOLEAN NOT NULL default false


Listing des utilisateurs,
voir toutes les infos de chaque user (sauf le mot de passe)


Classic user:
    Editer son propre compte
    Ne lister que son profil

Admin
    Editer n'importe quel compte
    Lister tous les profils


GESTION DES ARTICLES 
    title
    content
    tags
    authorId
    createdAt
    updatedAt
    deletedAt

+ ajouter un champ author-> avec lastname & firstname
Tout afficher sauf "deleteAt"

COMMENTAIRES 
    content
    authorId
    articleId
    createdAt
    updatedAt
    deletedAt

+ ajouter un champ author-> avec lastname & firstname
+ champ avec le nom de l'article
Tout afficher sauf "deleteAt"

Chaque user peut lister ses lister ses commentaires, le créer et y accèder.
A part les admins seul lui peut supprimer son commentaire.
--> Ne pas supprimer totalement les commentaires, les effacer du visible mais il reste accessible
Chaque article peut être recherché par l'authorId et son articleId
