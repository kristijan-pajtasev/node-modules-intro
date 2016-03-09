console.log("hello, node modules!");

var objectModule = require("./object_module");
console.log(objectModule.counter);

var functionModule = require("./function_module");
console.log(functionModule());

var greet = require("./function_module").greet;
console.log(greet("John"));



// shared resources
var ModuleA = require("./modules/ModuleA");
var ModuleB = require("./modules/ModuleB");

console.log(ModuleA.getValue());
console.log(ModuleB.getValue());

console.log(ModuleA.setValue(5));
console.log(ModuleB.getValue());
