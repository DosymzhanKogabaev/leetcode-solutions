export function avoidFlood(rains: number[]): number[] {
    let fullLakes = new Map<number, boolean>(), lakesToDry: number[] = [], canDryLakes = 0;
    let ans: number[] = [];
    for(let i = 0; i < rains.length; i++) {
        ans.push(-1);
        if(rains[i] > 0) {
            if(fullLakes.get(rains[i]) === undefined) {
                fullLakes.set(rains[i], true);
            }
            else if(fullLakes.get(rains[i])) {
                if(canDryLakes === 0) return []; // can't avoid flood
                else {
                    // drying the last lake that got full
                    canDryLakes--;
                    ans[lakesToDry[lakesToDry.length - 1]] = rains[i];
                    fullLakes.set(rains[i], false);
                    lakesToDry.pop();
                } 
            }
            else {
                fullLakes.set(rains[i], true); // lake got full from the rain
            }
        }
        else if(fullLakes.size === 0) {
            ans[i] = 1;
        }
        else if(fullLakes.size === 1) {
            for(let key of fullLakes.keys()) {
                ans[i] = key;
                fullLakes.set(key, false);
            }
        }
        else {
            canDryLakes++;
            lakesToDry.push(i);
        }
    }
    for(let i of lakesToDry) {
        ans[i] = 1;
    }
    return ans;
};

const rains = [69,0,0,0,69];
console.log(avoidFlood(rains));

// 59/82 testcases passed