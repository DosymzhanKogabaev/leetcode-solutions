async function sleep(millis: number): Promise<void> {
    const promise = new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, millis);
    });
    return promise;
}

let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t));