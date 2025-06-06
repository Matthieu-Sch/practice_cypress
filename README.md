# PRACTICE-CYPRESS

Projet d'entraînement pour écrire des tests end-to-end avec Cypress.

# Scénarios testés

## auth.cy.js

    •	Registration failure : Teste une tentative de connexion avec des identifiants invalides et vérifie le message d’erreur affiché.
    •	Authentification success : Utilise une commande personnalisée cy.login() pour simuler une connexion réussie avec l’utilisateur standard_user.

## inventory.cy.js

    •	Vérifie que la page d’inventaire contient bien 6 articles.
    •	Affiche dans le log Cypress le texte du 3e article pour validation visuelle.

# Stack utilisée

    •	Cypress 14+
    •	JavaScript (tests E2E)
    •	Yarn (gestion de dépendances)

# objectif

Ce dépôt est un projet d’entraînement permettant de :
• Simuler des scénarios réalistes d’applications web
• Maîtriser Cypress et son écosystème (commandes, assertions, logs)
• Préparer une base solide pour des tests automatisés en entreprise
