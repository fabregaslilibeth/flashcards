https://github.com/lucpotage/nuxt-github-pages

How to
Install dev dependency gh-pages

```bash
# yarn
yarn add gh-pages --dev
```

Add the script "deploy": "gh-pages -d dist" in package.json file
Specifiy router base in nuxt.config.ts.
Generate with npm run generate
Deploy with npm run deploy

```bash
# yarn
yarn generate

yarn deploy
```