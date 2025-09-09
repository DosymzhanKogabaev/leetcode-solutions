function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let i = 0, j = 0, m = nums1.length, n = nums2.length, sum = m + n;
    function next(): number {
        if (i < m && (j >= n || nums1[i] < nums2[j])) {
            return nums1[i++];
        } else {
            return nums2[j++];
        }
    }
    let prev = 0, curr = 0;
    for (let k = 0; k <= Math.floor(sum / 2); k++) {
        prev = curr;
        curr = next();
    }

    return sum % 2 === 0 ? (prev + curr) / 2 : curr;
};
let nums1 = [1,2];
let nums2 = [3,4];
console.log(findMedianSortedArrays(nums1, nums2));