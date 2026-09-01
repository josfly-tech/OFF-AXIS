# OFF AXIS

Site institutionnel bilingue d’OFF AXIS, reconstruit avec Astro et généré en HTML statique.

Le domaine canonique est `https://www.offaxis.partners`.

## Développement local

Prérequis : Node.js 22.12 ou supérieur et pnpm 11.

```sh
pnpm install
pnpm dev
```

Le site est ensuite disponible sur `http://localhost:4321`.

## Variables d’environnement

Copier `.env.example` vers `.env` et renseigner :

- `PUBLIC_WEB3FORMS_ACCESS_KEY` : clé publique Web3Forms utilisée par le formulaire ;
- `PUBLIC_GA_MEASUREMENT_ID` : identifiant GA4, déjà initialisé à `G-N1LVHW8ZNJ`.

Sans clé Web3Forms, le formulaire reste visible mais n’envoie aucune donnée et affiche un message invitant à réessayer plus tard.

## Vérification

```sh
pnpm run build
```

La commande vérifie les composants Astro, génère les pages EN/FR, optimise les images et produit le sitemap dans `dist/`. Le socle SEO/GEO comprend également les URL canoniques, les variantes `hreflang`, les données structurées Schema.org, les balises sociales, `robots.txt` et `llms.txt`.

## Render

Le fichier `render.yaml` configure un Static Site Render : commande de build pnpm, publication depuis `dist`, aperçus de pull request, variables publiques du site et en-têtes de sécurité. Dans Render, définir `www.offaxis.partners` comme domaine principal et rattacher également le domaine racine `offaxis.partners` pour sa redirection vers `www`.
