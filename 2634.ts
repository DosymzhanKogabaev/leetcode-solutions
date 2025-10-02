export type Fn = (n: number, i: number) => any;

function filter(arr: number[], fn: Fn): number[] {
    let newArr: number[] = [];
    for(let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i)) newArr.push(arr[i]);
    }
    return newArr;
};

console.log(filter([1,2,3,4], (n, i) => n > 3));