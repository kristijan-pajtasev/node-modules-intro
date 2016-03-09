module.exports = function() {
    return "hello function module";
};

module.exports.greet = function(name) {
    return `Hello ${name}`;
};