git init
npx tsc --init
yarn init
mkdir src
touch src/app.ts
touch src/models.ts
touch src/tests.ts
touch src/urls.ts
touch src/views.ts
touch src/services.ts
yarn add ts-node-dev typescript -D
yarn add express
yarn add @types/node @types/express -D
yarn add helmet  # optional
# add this entry to package.json:
# "scripts": {"dev": "ts-node-dev --respawn --transpile-only src/app.ts"}
# now you can run the app with `yarn dev`