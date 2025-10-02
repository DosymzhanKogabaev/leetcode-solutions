function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = fn(arr[i], i);
    }
    return arr;
};

console.log(map([1,2,3,4], (n, i) => n + i));