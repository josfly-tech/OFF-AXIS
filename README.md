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

La politique CSP est d’abord livrée en mode rapport. Après vérification des rapports et de la console sur le domaine final, elle pourra passer de `Content-Security-Policy-Report-Only` à `Content-Security-Policy`.

## Checklist de mise en ligne

- [ ] `www.offaxis.partners` sert le nouveau site et non la page d’attente.
- [ ] `offaxis.partners` redirige en 301 vers `www.offaxis.partners`.
- [ ] Toutes les URL HTTP redirigent en 301 vers HTTPS.
- [ ] Aucun en-tête `X-Robots-Tag: noindex` n’est présent sur le service de production.
- [ ] `og.png` est accessible sur le domaine final et son aperçu social est validé.
- [ ] `sitemap-index.xml` et le sitemap qu’il référence ne contiennent que les pages indexables EN/FR du domaine final, sans URL `onrender.com`.
- [ ] `robots.txt` référence le sitemap du domaine final.
- [ ] Les balises `hreflang` EN, FR et `x-default` sont présentes et réciproques.
- [ ] Un envoi réel du formulaire est reçu et le domaine autorisé est restreint dans Web3Forms.
- [ ] Les données structurées sont validées avec Schema.org et le Rich Results Test de Google.
- [ ] Lighthouse est relancé en navigation privée, sans extension, en mobile et desktop sur `/` et `/fr/`.

Le service Render de production et ses aperçus partageant la même configuration, aucun `noindex` global n’est inscrit dans `render.yaml`. Si l’URL `onrender.com` doit rester publique avant la bascule, activer temporairement `X-Robots-Tag: noindex, nofollow` côté Render, puis le retirer impérativement lors du passage en production.
