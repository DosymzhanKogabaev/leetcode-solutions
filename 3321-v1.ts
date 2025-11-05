function binarySearch(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const mid = (left + right) >> 1; // faster than Math.floor
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return left;
}

function binarySearchInsert(arr: number[], value: number): number {
  let l = 0, r = arr.length;
  while (l < r) {
    const m = (l + r) >> 1;
    if (arr[m] < value) l = m + 1;
    else r = m;
  }
  return l;
}

function setArrayMapAndAmounts(
  arrayMap: Map<number, number[]>,
  num: number,
  newAmount: number,
  amounts: number[]
): void {
  if (!arrayMap.has(newAmount)) {
    arrayMap.set(newAmount, []);
    const idx = binarySearchInsert(amounts, newAmount);
    amounts.splice(idx, 0, newAmount);
  }

  const array = arrayMap.get(newAmount)!;
  const index = binarySearch(array, num);
  array.splice(index, 0, num);
}

function removeFromArrayMap(
  arrayMap: Map<number, number[]>,
  num: number,
  oldAmount: number,
  amounts: number[]
): void {
  const arr = arrayMap.get(oldAmount);
  if (!arr) return;

  const idx = binarySearch(arr, num);
  if (arr[idx] === num) arr.splice(idx, 1);

  if (arr.length === 0) {
    arrayMap.delete(oldAmount);
    const aIdx = binarySearch(amounts, oldAmount);
    if (amounts[aIdx] === oldAmount) amounts.splice(aIdx, 1);
  }
}

function getSum(arrayMap: Map<number, number[]>, amounts: number[], x: number): number {
  let sum = 0;
  let checked = 0;

  // Iterate in descending frequency order
  for (let i = amounts.length - 1; i >= 0 && checked < x; i--) {
    const freq = amounts[i];
    const nums = arrayMap.get(freq)!;
    // Take from the end — largest numbers
    for (let j = nums.length - 1; j >= 0 && checked < x; j--) {
      sum += nums[j] * freq;
      checked++;
    }
  }
  return sum;
}

export function findXSum(nums: number[], k: number, x: number): number[] {
  if (k === x) {
    if (k === 1) return nums;
    const res: number[] = [];
    let windowSum = 0;
    for (let i = 0; i < k; i++) windowSum += nums[i];
    res.push(windowSum);
    for (let i = k; i < nums.length; i++) {
      windowSum += nums[i] - nums[i - k];
      res.push(windowSum);
    }
    return res;
  }

  const res: number[] = [];
  const arrayMap = new Map<number, number[]>();
  const occurencesMap = new Map<number, number>();
  const amounts: number[] = [];

  for (let i = 0; i < k; i++) {
    const num = nums[i];
    const oldAmount = occurencesMap.get(num) || 0;
    if (oldAmount > 0) removeFromArrayMap(arrayMap, num, oldAmount, amounts);
    const newAmount = oldAmount + 1;
    occurencesMap.set(num, newAmount);
    setArrayMapAndAmounts(arrayMap, num, newAmount, amounts);
  }

  res.push(getSum(arrayMap, amounts, x));

  for (let i = k; i < nums.length; i++) {
    const outNum = nums[i - k];
    const inNum = nums[i];

    const oldAmountOut = occurencesMap.get(outNum)!;
    removeFromArrayMap(arrayMap, outNum, oldAmountOut, amounts);
    const newAmountOut = oldAmountOut - 1;
    if (newAmountOut === 0) occurencesMap.delete(outNum);
    else {
      occurencesMap.set(outNum, newAmountOut);
      setArrayMapAndAmounts(arrayMap, outNum, newAmountOut, amounts);
    }

    const oldAmountIn = occurencesMap.get(inNum) || 0;
    if (oldAmountIn > 0) removeFromArrayMap(arrayMap, inNum, oldAmountIn, amounts);
    const newAmountIn = oldAmountIn + 1;
    occurencesMap.set(inNum, newAmountIn);
    setArrayMapAndAmounts(arrayMap, inNum, newAmountIn, amounts);

    res.push(getSum(arrayMap, amounts, x));
  }

  return res;
}

// === Example from the task ===
const nums = [3, 8, 7, 8, 7, 5];
const k = 2;
const x = 2;
console.log(findXSum(nums, k, x)); // [11, 15, 15, 15, 12]

// TLE 782 / 784 testcases passed