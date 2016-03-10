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

### Shared resource example
This example will show how a module can be used as a shared resource and example of module isolation.
There is directory with modules ModuleA, ModuleB and Shared. All three of them export same object with functions
setValue and getValue. In out main.js file we can require ModuleA and ModuleB.
```
var moduleA = require("./modules/ModuleA");
var moduleB = require("./modules/ModuleB");
```
Neither of these modules have their own implementation of setting and getting value but use Shared module. However,
since everything in a module that is not assigned to module.export is private, we can't access to it directly through
any of these two modules.
```
moduleA.shared; // undefined
moduleB.shared; // undefined
```
Also if we would required Shared module, and tried to access i directly, it would give us undefined value since it is
not part of export.
```
var shared = require("./modules/shared");
shared.i; // undefined;
shared.getValue(); // 0
```

However, since both of modules, moduleA and moduleB, require same object in this case it is shared. So changing value
of shared object through one object it changes it for other.
```
moduleA.getValue(); // 0
moduleB.getValue(); // 0
moduleB.setValue(5);
moduleA.getValue(); // 5
moduleB.getValue(); // 5
```

#### Use case
Something similar is used when implementing subscriber and publisher pattern which is used in
[Flux](https://facebook.github.io/flux/).

#### Note
In this example Shared module returned object, so the value was shared. This does not have to be case. Depends on
implementation of that module.

### Conclusion
Modules are not the newest thing in JavaScript. Something similar we already had with closures. But it doesn't reduce
their value. They are definitely big this I really help development. A very useful thing to understand since they are
 used in various libraries like gruntjs.

### Note
I hope this small code example and explanation could hep someone to understand and start with node modules. If I
accidentally wrote something incorrect, please, do feel free to contact me to change it. Or you can update it and make
 a pull request.