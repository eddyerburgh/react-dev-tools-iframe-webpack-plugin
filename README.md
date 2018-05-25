# react-dev-tools-iframe-webpack-plugin

By default, React apps running in <iframe>s are not picked up by the React dev tools extension.

For dev tools to pick up React apps in <iframes>, you need to add code that sets the dev tools hook to the parent window, but the code must run before the React code runs.

This plugin adds the code to set the dev toopls hook before the React code runs.

## Usage

Install:

```
yarn add --dev react-dev-tools-iframe-webpack-plugin
```

or with npm:

```
npm install --save-dev react-dev-tools-iframe-webpack-plugin
```

And add it to your plugins array in the webpack config:

```js
const ReactDevToolsIFramePlugin = require("webpack-react-dev-tools-iframe-plugin");
module.exports = {
  // ..
  plugins: [new ReactDevToolsIFramePlugin()]
};
```
