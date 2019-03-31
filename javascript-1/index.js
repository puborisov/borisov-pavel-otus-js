const add = x => {
    return y => {
        if (typeof y !== "undefined") {
            return add(x + y);
        }
        return x;
    };
};

console.log(add(1)(2)(3)(4)(5)());