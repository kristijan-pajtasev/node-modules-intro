# node-modules-intro
Small JavaScript project as explanation of NodeJS modules 

## Description
This project is a small introduction to node modules.

### Why node module?
Modules enables us to easily organize JavaScript code into separate isolated units which expose only
what is exposed. It can be viewed as something similar to
[closure](https://en.wikipedia.org/wiki/Closure_(computer_programming))
but cleaner.

### Where can I use it?
Modules are only natively supported only in node. That means they can't be used directly in browser. However, there are
different tools to enable it. One of those is [Webpack](http://webpack.github.io/) which enables us to use them in
development and use as a one bundle file in browser.

### How to create module?
Any file is module, and everything inside of it is isolated. As an example, there is object_module.js which is module.
Another is modules/ModuleA.js. As stated in first sentence everything inside is private, but it can expose something to
public. Exposing something to public is done by assigning to module.exports.

```
module.export = function() {}
```

### What can I export?
Anything can be exported. Function, object or primitive.

### Can module export multiple different values?
Yes. In that case exposing can be done to property of module.exports.

```
module.exports.foo = function() { console.log("foo"); }
module.exports.bar = function() { console.log("bar"); }
```

### How can module imported?
To get exported part of part of module require function is used.
```
var public = require("module");
```

If module exports multiple values it can be accessed as property of required object.
```
var foo = require("module").bar;
var bar = require("module").bar;
```

Module name is in this case location and filename of module. To require module located relative to current directory
location string needs to start with "./".
```
require("./modules/ModuleA.js")
```
If file has .js or .node extension, it can be omitted.
```
require("./modules/ModuleA")
```
