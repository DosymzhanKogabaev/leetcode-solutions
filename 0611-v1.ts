function triangleNumber(nums: number[]): number {
    let res = 0;
    nums = nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length - 2; i ++) {
        let a = nums[i];
        for(let j = i + 1; j < nums.length - 1; j++) {
            let b = nums[j];
            for(let k = j + 1; k < nums.length; k++) {
                let c = nums[k];
                if(a < b + c && b < a + c && c < a + b) res++;
                else break;
            }
        }
    }
    return res;
};

console.log(triangleNumber([2,2,3,4]));

// This solution is correct but it is O(n^3) time complexity, which is not efficient.