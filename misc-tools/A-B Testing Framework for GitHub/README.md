# Template for new prototype projects.

To spin up a new prototype:

1. Duplicate this template and rename with the new project name.
2. Run `npm init` to update package.json with the new project info (name, description, author, etc).
3. Run `npm install` to download npm dependencies.
4. Run `npm run build` to bundle the npm dependencies using Webpack (repeat if more dependencies get added later).
5. *Optional:* To start up the Browsersync web server and Sass compiler synchronously, run `npm start`. Or, to use these tools individually, run `npm run server` or `npm run sass` as needed.

To use grid tools:

1. Enable grid tools by adding the query string `?grid=true` to the end of the prototype url on localhost or github.
2. Use the buttons on the lower right to toggle the grid overlay and to highlight rows and columns.
3. Grid tools persist for the entire browser session and will maintain their current state during page reloads.

### Prototype URL
[https://servicenow-digital.github.io/testing-framework/](https://servicenow-digital.github.io/testing-framework/)
