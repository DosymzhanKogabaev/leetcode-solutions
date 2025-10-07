export function avoidFlood(rains: number[]): number[] {
    let fullLakes = new Map<number, boolean>();
    let ans = Array(rains.length).fill(1);
    for(let i = 0; i < rains.length; i++) {
        if(rains[i] > 0) {
            if(fullLakes.get(rains[i]) === undefined) {
                fullLakes.set(rains[i], true);
            }
            else if(fullLakes.get(rains[i])) {
                return [];
            }
            else {
                fullLakes.set(rains[i], true);
            }
            ans[i] = -1;
        }
        else {
            let fullLakeNs: number[] = [];
            for(let key of fullLakes.keys()) {
                if(fullLakes.get(key)) {
                    fullLakeNs.push(key);
                }
            }
            for(let j = i + 1; j < rains.length; j++) {
                if(fullLakeNs.includes(rains[j])) {
                    ans[i] = rains[j];
                    fullLakes.set(rains[j], false);
                    break;
                }
            }
        }
    }
    return ans;
}

let rains = [1,2,0,2,3,0,1];
console.log(avoidFlood(rains));

// TLE 76/82