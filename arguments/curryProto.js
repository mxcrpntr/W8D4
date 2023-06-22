

Function.prototype.curry = function(numArgs) {
    const that = this;
    const numbers = [];
    return function _curriedFunc(num) {
        numbers.push(num);
        if (numbers.length === numArgs) {
            return that.apply(null,numbers);
        } else {
            return _curriedFunc;
        }
    }
}

