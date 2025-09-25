function searchInsert(nums: number[], target: number): number {
    let l = 0, r = nums.length - 1;
    while(r >= l) {
        let mid = l + Math.floor((r - l) / 2);
        if(nums[mid] === target) return mid;
        if (nums[mid] > target)
            r = mid - 1;
        else
            l = mid + 1;
    }
    return l;
};

console.log(searchInsert([1,3,5,6], 5));