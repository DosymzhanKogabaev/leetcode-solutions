function removeDuplicates(nums: number[]): number {
    let k = 1, j = 0;
    let x = false;
    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] !== nums[i + 1] && j === 0 && !x) 
            k++;
        else if(nums[i] === nums[i + 1]) {
            x = false;
            j++;
        }
        else {
            nums[k] = nums[i + 1];
            j = 0;
            k++;
            x = true;
        }
    }
    return k;
};

console.log(removeDuplicates([1,1,2]));