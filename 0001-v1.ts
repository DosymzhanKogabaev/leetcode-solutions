export function twoSum(nums: number[], target: number): number[] {
    let indexes = {};
    for(let i = 0; i < nums.length; i++) {
        if(indexes[nums[i]] === undefined) indexes[nums[i]] = i;
        else indexes[nums[i]] = [indexes[nums[i]], i];
    }
    console.log(indexes);
    nums = nums.sort((a, b) => a - b);
    let i = 0;
    while(true) {
        let l = i + 1, r = nums.length - 1;
        while(r >= l) {
            let mid = l + Math.floor((r - l) / 2);
            if(nums[mid] + nums[i] === target) {
                if(indexes[nums[i]] === indexes[nums[mid]]) return indexes[nums[i]];
                else return [indexes[nums[i]], indexes[nums[mid]]];
            }
            if(nums[mid] + nums[i] > target) r = mid - 1;
            else l = mid + 1;
        }
        i++;
    }
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));

// This solution is correct, it is better than brute force, but it is not the best solution.