function findXSum(nums: number[], k: number, x: number): number[] {
  const freq = new Map<number, number>();
  const topX = new Set<number>(); // elements in top-x
  const rest = new Set<number>(); // other
  let sumTopX = 0;

  // helper function to recalculate top-x
  const rebalance = () => {
    const all = [...freq.entries()];
    all.sort((a, b) =>
      b[1] === a[1] ? b[0] - a[0] : b[1] - a[1]
    ); // sort by freq desc, num desc

    topX.clear();
    rest.clear();
    sumTopX = 0;

    for (let i = 0; i < all.length; i++) {
      const [num, f] = all[i];
      if (i < x) {
        topX.add(num);
        sumTopX += num * f;
      } else {
        rest.add(num);
      }
    }
  };

  const result: number[] = [];

  // initial window
  for (let i = 0; i < k; i++) {
    freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
  }
  rebalance();
  result.push(sumTopX);

  for (let i = k; i < nums.length; i++) {
    const out = nums[i - k];
    const inN = nums[i];

    // remove the outgoing
    const oldF = freq.get(out)! - 1;
    if (oldF === 0) freq.delete(out);
    else freq.set(out, oldF);

    // add the incoming
    freq.set(inN, (freq.get(inN) || 0) + 1);

    rebalance();
    result.push(sumTopX);
  }

  return result;
}

// === Example from the task ===
const nums = [3, 8, 7, 8, 7, 5];
const k = 2;
const x = 2;
console.log(findXSum(nums, k, x)); // [11,15,15,15,12]
