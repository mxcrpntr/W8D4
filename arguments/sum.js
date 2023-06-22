
function sum() {
    return Array.from(arguments).reduce((acc,el)=>acc+el,0);
}

function sumSpread(...args) {
    return args.reduce((acc,el)=>acc+el,0);
}
