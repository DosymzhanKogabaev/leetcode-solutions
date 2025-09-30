export function minScoreTriangulation(values: number[], sum: number = 0): number {
    if(values.length === 3) return sum += values[0] * values[1] * values[2];
    let sum1 = values[0] * values[1] * values[2];
    let sum2 = values[0] * values[1] * values[values.length - 1];
    if(sum1 < sum2) {
        sum += sum1;
        values.splice(1, 1);
    }
    else {
        sum += sum2;
        values.splice(0, 1);
    }
    return minScoreTriangulation(values, sum);
}

console.log(minScoreTriangulation([3,7,4,5]));
console.log(minScoreTriangulation([5,5,1,4,2]));
console.log(minScoreTriangulation([2,2,2,2,1]));

// I gave up on this solution as well