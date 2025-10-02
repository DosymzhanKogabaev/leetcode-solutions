function numWaterBottles(numBottles: number, numExchange: number): number {
    let emptyBottles = 0;
    let ans = 0;
    while(emptyBottles > numExchange || numBottles > 0) {
        ans += numBottles;
        emptyBottles += numBottles;
        numBottles = Math.floor(emptyBottles / numExchange);
        emptyBottles = emptyBottles % numExchange;
    }
    return ans;
};

console.log(numWaterBottles(9, 3));