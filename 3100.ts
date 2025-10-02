function maxBottlesDrunk(numBottles: number, numExchange: number): number {
    let drunk = numBottles;
    let emptyBottles = numBottles;
    console.log(emptyBottles, numExchange, drunk);
    while(emptyBottles >= numExchange) {
        emptyBottles -= numExchange - 1;
        numExchange++;
        drunk++;
        console.log(emptyBottles, numExchange, drunk);
    }
    return drunk;
};

console.log(maxBottlesDrunk(13, 6));
console.log(maxBottlesDrunk(10, 3));