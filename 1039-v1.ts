export function minScoreTriangulation(values: number[], sum: number = 0): number {
    if(values.length === 4) {
        let sum1 = values[0] * values[1] * values[2] + values[2] * values[3] * values[0];
        let sum2 = values[1] * values[2] * values[3] + values[3] * values[0] * values[1];
        return sum1 < sum2 ? sum1 + sum : sum2 + sum;
    };

    if(values.length < 3) return sum;

    if(values.length === 3) return sum += values[0] * values[1] * values[2];

    let sum1: number = sum, sum2: number = sum;
    let values1: number[] = [], values2: number[] = [];

    if(values.length % 2 !== 0) {
        values1.push(values[0]);
        values2.push(values[1]);
    }

    for(let i = 0; i < values.length - 1; i += 2) {
        let ind1 = i + 1 >= values.length ? i + 1 - values.length : i + 1;
        let ind2 = i + 2 >= values.length ? i + 2 - values.length : i + 2;
        sum1 += values[i] * values[ind1] * values[ind2];
        if(i + 2 <= values.length) values1.push(values[ind2]);
    }

    for(let i = 1; i < values.length - 1; i += 2) {
        let ind1 = i + 1 >= values.length ? i + 1 - values.length : i + 1;
        let ind2 = i + 2 >= values.length ? i + 2 - values.length : i + 2;
        sum2 += values[i] * values[ind1] * values[ind2];
        if(i + 2 <= values.length) values2.push(values[ind2]);
    }

    console.log(values1, values2);
    console.log(sum1, sum2);
    if(sum1 < sum2) return minScoreTriangulation(values1, sum1);
    if(sum1 === sum2 && values1.length === 3) {
        let newSum1 = values1[0] * values1[1] * values1[2];
        let newSum2 = values2[0] * values2[1] * values2[2];
        if(newSum1 < newSum2) return sum1 + newSum1;
        else return sum2 + newSum2;
    }
    return minScoreTriangulation(values2, sum2);
};

console.log(minScoreTriangulation([3,7,4,5]));
console.log(minScoreTriangulation([5,5,1,4,2]));
console.log(minScoreTriangulation([2,2,2,2,1]));

// I gave up on this solution