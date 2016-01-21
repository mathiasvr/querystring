# querystring-browser

Node's querystring module for browsers.

## usage

Require the module or make browserify replace it using a transform such as [aliasify](https://www.npmjs.com/package/aliasify):

```js
"aliasify": {
  "aliases": {
    "querystring": "querystring-browser"
  }
}
```

## Node.js

The source code comes straight from the core implementation at https://github.com/nodejs/node

## license

MIT / Node.js licence