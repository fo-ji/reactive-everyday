## Docker

```
$ docker-compose build
```

## Next.js

```
$ docker-compose run --rm app yarn create next-app reactive-everyday --ts\
&& mv reactive-everyday/* . && mv reactive-everyday/.* . && rm -r reactive-everyday\
&& mkdir src && mv pages styles src/
```

```diff
# package.json
{
  "name": "reactive-everyday",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
+    "start": "next start -p 8080",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "12.3.1",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "devDependencies": {
    "@types/node": "18.11.0",
    "@types/react": "18.0.21",
    "@types/react-dom": "18.0.6",
    "eslint": "8.25.0",
    "eslint-config-next": "12.3.1",
    "typescript": "4.8.4"
  }
}

# tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
+    "baseUrl": ".",
+    "paths": {
+      "@/*": ["src/*"]
+    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}

```

## Git

```
$ git init && git add . && git status && git commit -m "initial commit"
$ gh repo create --source $(git rev-parse --show-toplevel) --public
$ gh repo view --web
$ git push -u origin main
```

## Prettier

```
$ docker-compose run --rm app yarn add -D prettier eslint-config-prettier
```

```diff
# .eslintrc.json
{
-  "extends": "next/core-web-vitals"
+  "extends": ["next/core-web-vitals", "prettier"]
}

# .vscode/settings.json
+ {
+    "editor.formatOnSave": true,
+    "editor.defaultFormatter": "esbenp.prettier-vscode"
+ }

# .prettierrc
+ {
+   "printWidth": 100,
+   "tabWidth": 2,
+   "singleQuote": true,
+   "jsxSingleQuote": true,
+   "trailingComma": "none",
+   "semi": false
+ }
```

## ESLint

```
$ docker-compose run --rm app yarn add -D eslint-plugin-sort-keys-custom-order eslint-plugin-simple-import-sort
```

```diff
# .eslintrc.json
{
+  "plugins": ["sort-keys-custom-order", "simple-import-sort"],
+  "extends": ["next/core-web-vitals", "prettier"],
+  "rules": {
+    // For JS objects sorting
+    "sort-keys-custom-order/object-keys": ["error", { "orderedKeys": ["id", "name", "title"] }],
+    // For TS types sorting
+    "sort-keys-custom-order/type-keys": ["error", { "orderedKeys": ["id", "name", "title"] }],
+    "simple-import-sort/imports": "error",
+    "simple-import-sort/exports": "error"
+  }
}

# .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
+  "editor.codeActionsOnSave": ["source.fixAll.eslint"]
}

```

## Tailwind CSS

```
$ docker-compose run --rm app yarn add -D tailwindcss postcss autoprefixer
$ docker-compose run --rm app yarn tailwindcss init -p
$ docker-compose run --rm app yarn add -D eslint-plugin-tailwindcss @tailwindcss/typography @tailwindcss/forms
```

```diff
# tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
-  content: [],
+  content: ["./src/**/*.{js,ts,jsx,tsx}"],
+  plugins: [
+      require("@tailwindcss/typography"),
+      require("@tailwindcss/forms"),
+  ],
  theme: {
    extend: {}
  },
}

# globals.css
- html,
- body {
-   padding: 0;
-   margin: 0;
-   font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
-     Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
- }
-
- a {
-   color: inherit;
-   text-decoration: none;
- }
-
- * {
-   box-sizing: border-box;
- }
-
- @media (prefers-color-scheme: dark) {
-   html {
-     color-scheme: dark;
-   }
-   body {
-     color: white;
-     background: black;
-   }
- }
+ @tailwind base;
+ @tailwind components;
+ @tailwind utilities;

# .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": ["source.fixAll.eslint"],
+  "editor.quickSuggestions": {
+    "strings": "on"
+  }
}

# .eslintrc.json
{
+  "plugins": ["sort-keys-custom-order", "simple-import-sort", "tailwindcss"],
+  "extends": ["next/core-web-vitals", "prettier", "plugin:tailwindcss/recommended"],
  "rules": {
    // For JS objects sorting
    "sort-keys-custom-order/object-keys": ["error", { "orderedKeys": ["id", "name", "title"] }],
    // For TS types sorting
    "sort-keys-custom-order/type-keys": ["error", { "orderedKeys": ["id", "name", "title"] }],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  },
+  "settings": {
+    "tailwindcss": {
+      "groupByResponsive": true,
+      "whitelist": []
+    }
+  }
}

```
