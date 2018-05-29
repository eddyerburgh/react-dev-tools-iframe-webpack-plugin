# react-dev-tools-iframe-webpack-plugin

By default, React apps running in iframes are not picked up by the React dev tools extension.

For dev tools to pick up React apps in iframes, you need to add code that sets the dev tools hook to the parent window, but the code must run before the React code runs. The must be added outside your bundle if you use ES imports (which are hoisted).

This plugin adds the code to set the dev tools hook before the React code runs.

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
const ReactDevToolsIFramePlugin = require('react-dev-tools-iframe-webpack-plugin');

module.exports = {
  // ..
  plugins: [new ReactDevToolsIFramePlugin()]
};
```
