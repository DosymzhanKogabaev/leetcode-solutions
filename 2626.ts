type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
    if(nums.length === 0) return init;
    let accum = init;
    return nums.map((x) => {
        accum = fn(accum, x);
        return accum;
    })[nums.length - 1];
};

let fn = (accum, curr) => accum + curr;
console.log(reduce([1,2,3,4], fn, 0));