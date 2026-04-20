# Base de dev React — Starter Kit

Template personnel de démarrage pour tout nouveau projet React. Pré-configuré avec TypeScript, Chakra UI, Redux Toolkit Query, React Router, Formik et Biome. L'objectif : cloner, renommer, et commencer à coder immédiatement sans avoir à reconfigurer la stack à chaque fois.

---

## Stack technique

### Core
- **React 19** + **TypeScript 5.9**
- **Vite 8** (dev server + build avec HMR)
- **Biome 2** (lint + format unifiés, remplace ESLint + Prettier)

### UI & Thème
- **Chakra UI v3** avec `@emotion/react`
- Système de thème custom : tokens, semantic tokens, text styles, recipes et slot recipes
- Palette de couleurs complète (primary, secondary, success, warning, destructive, gray, dark, white, green, orange, purple)
- Composants personnalisés (Button, Tag, Text) avec enums typés pour `variant`, `size`, `color`

### State & Data
- **Redux Toolkit** + **RTK Query** (`createApi` avec `fetchBaseQuery`)
- Client API pré-configuré avec gestion d'erreur centralisée (`InterMyError`)
- Variables d'environnement (`VITE_API_URL`, `VITE_API_KEY`) injectées via header `Authorization: Bearer`
- Exemple d'intégration d'une API externe : **Open-Meteo** (avec types complets)

### Routing & Layouts
- **React Router v7** (`createBrowserRouter` + `RouterProvider`)
- Structure layout / pages / routers séparée
- Redirection catch-all `*` vers `/`

### Autres libs
- **Formik** (formulaires)
- **Axios** (requêtes HTTP hors RTK Query)
- **date-fns** (manipulation de dates)
- **jwt-decode** (décodage de tokens)

---

## Structure du projet

```
src/
├── api/
│   ├── api.ts                 # Client RTK Query + baseQuery custom avec gestion d'erreur
│   ├── store.ts               # Configuration du store Redux
│   ├── openMeteo/             # Exemple d'intégration API externe
│   │   ├── index.ts
│   │   └── type/              # Types TypeScript de la réponse
│   └── type/                  # Types d'erreur (InterError, InterMyError)
│
├── components/
│   └── navbar/                # Composants réutilisables
│
├── layouts/
│   └── router1Layout.tsx      # Layout principal (header/footer + Outlet)
│
├── pages/
│   ├── home.tsx               # Page d'accueil
│   ├── buttons.tsx            # Démo des variantes de boutons
│   ├── tags.tsx               # Démo des tags
│   └── texts.tsx              # Démo des text styles
│
├── routers/
│   └── router1.tsx            # Définition des routes
│
├── theme/
│   ├── theme.ts               # createSystem Chakra (entrée principale)
│   ├── tokens.ts              # Tokens de design (couleurs, espacements…)
│   ├── semanticTokens.ts      # Tokens sémantiques (bg, fg, border…)
│   ├── color/                 # Une palette par fichier
│   └── componants/            # Recipes des composants custom
│       ├── button/ (+ enums)
│       ├── tag/    (+ enums)
│       └── text/   (+ enums)
│
├── global/
│   └── error.ts               # Helpers d'erreur globaux
│
├── index.tsx                  # Export du composant App
└── main.tsx                   # Point d'entrée (Provider + ChakraProvider + StrictMode)
```

---

## Scripts

| Commande          | Description                                        |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Démarre le serveur de dev Vite avec HMR            |
| `npm run build`   | Type-check (`tsc -b`) puis build de production     |
| `npm run preview` | Sert le build de production localement             |
| `npm run lint`    | Lance Biome en mode check sur `src`                |
| `npm run format`  | Formate les fichiers de `src` avec Biome           |
| `npm run check`   | Check + auto-fix des erreurs corrigeables (Biome)  |

---

## Démarrage

```bash
npm install
cp .env.example .env   # puis remplir VITE_API_URL et VITE_API_KEY
npm run dev
```

---

## Variables d'environnement

```env
VITE_API_URL=https://api.exemple.com
VITE_API_KEY=votre_token_bearer
```

Ces variables sont lues dans `src/api/api.ts` et injectées automatiquement dans les headers via `prepareHeaders`.

---

## Conventions

- **TypeScript strict** sur tout le code
- **Biome** pour lint + format (configuration dans `biome.json`)
- **Tabs** pour l'indentation (style Biome par défaut)
- Préfixes de types : `Type*` pour les types, `Inter*` pour les interfaces
- Un dossier par domaine, enums isolés dans un sous-dossier `enum/`

---

## Points d'extension rapides

- **Ajouter un endpoint** → créer un fichier dans `src/api/<domain>/` avec `api.injectEndpoints`
- **Ajouter une page** → fichier dans `src/pages/` + route dans `src/routers/router1.tsx`
- **Ajouter un composant thémé** → dossier dans `src/theme/componants/` avec recipe + enums, puis register dans `theme.ts`
- **Ajouter une couleur** → fichier dans `src/theme/color/` puis export dans `index.tsx`
