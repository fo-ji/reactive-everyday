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
