function ReactDevToolsIFrameInjectPlugin(options) {}

const str = [
  "if (window.parent !== window) {\n",
  "window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__;\n",
  "}\n"
];

ReactDevToolsIFrameInjectPlugin.prototype.apply = function(compiler) {
  compiler.hooks.emit.tap("ReactDevToolsIframe", function(compilation) {
    for (i = str.length - 1; i >= 0; i--) {
      Object.keys(compilation.assets).forEach(key => {
        if (!key.match(/.js$/)) {
          return;
        }
        if (compilation.assets[key]._source) {
          compilation.assets[key]._source.children.unshift(str[i]);
        }
      });
    }
  });
};

module.exports = ReactDevToolsIFrameInjectPlugin;
