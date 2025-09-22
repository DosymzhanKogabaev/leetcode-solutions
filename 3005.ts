function maxFrequencyElements(nums: number[]): number {
    let m = new Map<number, number>();
    let max = 0;
    for(let i = 0; i < nums.length; i++) {
        if(m.has(nums[i])) {
            m.set(nums[i], m.get(nums[i])! + 1);
        }
        else {
            m.set(nums[i], 1);
        }
        if(m.get(nums[i])! > max) max = m.get(nums[i])!;
    }
    console.log(m);
    let ans = 0;
    for(let [key, value] of m) {
        if(value === max) ans += value;
    }
    return ans;
}

console.log(maxFrequencyElements([1, 2, 2, 3, 3, 3, 4, 4, 4]));