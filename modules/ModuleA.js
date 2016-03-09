var shared = require("./Shared");

module.exports = {
    getValue: function() {
        return shared.getValue();
    },
    setValue: function(value) {
        return shared.setValue(value);
    }
};