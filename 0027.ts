function removeElement(nums: number[], val: number): number {
    let k = 0;
    for(let i = 0; i < nums.length - k; i++) {
        if(nums[i] === val) {
            const t = nums[i];
            nums[i] = nums[nums.length - k - 1];
            nums[nums.length - k - 1] = t;
            k++;
            i--;
        }
    }
    return nums.length - k;
};

console.log(removeElement([3,2,2,3], 3));