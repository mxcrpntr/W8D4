
Function.prototype.myBindSpread = function(ctx,...bindArgs) {
    const that = this;
    return function(...callArgs) {
        return that.apply(ctx,bindArgs.concat(callArgs));
    }
}


Function.prototype.myBind = function(ctx) {
    const that = this;
    const bindArgs = Array.from(arguments).slice(1);
    return function() {
        const callArgs = Array.from(arguments);
        return that.apply(ctx,bindArgs.concat(callArgs));
    }
}

