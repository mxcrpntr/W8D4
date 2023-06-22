
function curriedSum(numArgs) {
    const numbers = [];
    return function _curriedSum(num) {
        numbers.push(num);
        if (numbers.length >= numArgs) {
            return numbers.reduce((acc,el) => acc + el,0);
        } else {
            return _curriedSum;
        }
    }
}

