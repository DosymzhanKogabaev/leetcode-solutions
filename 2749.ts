function makeTheIntegerZero(num1: number, num2: number): number {
    for(let i = 1; i <= 60; i++) {
        let target = num1 - num2 * i;
        if(target < i) continue;
        let temp = target;
        let count = 0;
        while(temp > 0) {
            if(temp % 2 === 1) {
                count++;
            }
            temp = Math.floor(temp / 2);
        }
        if(count > i) continue;
        return i;
    }
    return -1;
};

console.log(makeTheIntegerZero(5, -21));