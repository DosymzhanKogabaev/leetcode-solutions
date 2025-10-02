type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    let a = await promise1;
    let b = await promise2;
    return new Promise(resolve => resolve(a + b));
};