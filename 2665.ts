type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let current = init;
    return {
        increment: () => ++current,
        decrement: () => --current,
        reset: () => current = init,
    }
}

console.log(createCounter(5).increment());