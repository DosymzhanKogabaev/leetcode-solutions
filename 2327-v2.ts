export function peopleAwareOfSecret(n: number, delay: number, forget: number): number {
    const MOD = 1000000007;
    const newPeople = new Array<number>(n + 1).fill(0);
    newPeople[1] = 1;

    let shareable = 0; // how many people can share in the current day
    for (let day = 2; day <= n; day++) {
        // those who know (day - delay) today start sharing
        if (day - delay >= 1) {
            shareable = (shareable + newPeople[day - delay]) % MOD;
        }
        // those who know (day - forget) today forget and stop sharing
        if (day - forget >= 1) {
            shareable = (shareable - newPeople[day - forget] + MOD) % MOD;
        }

        newPeople[day] = shareable;
        }

        // count how many people know the secret on day n: all those who know in [n - forget + 1, n]
        let result = 0;
        const start = Math.max(1, n - forget + 1);
        for (let k = start; k <= n; k++) {
        result = (result + newPeople[k]) % MOD;
        }

    return result;
};
console.log(peopleAwareOfSecret(6, 2, 4));
console.log(peopleAwareOfSecret(4, 1, 3));