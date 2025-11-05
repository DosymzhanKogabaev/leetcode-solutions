type Entry = { num: number; freq: number };

class OwnMaxHeap {
  data: Entry[] = [];
  constructor(private compare: (a: Entry, b: Entry) => boolean) {}
  push(item: Entry) {
    this.data.push(item);
    this.heapifyUp();
  }
  pop(): Entry | undefined {
    if (this.data.length === 0) return undefined;
    const top = this.data[0];
    const last = this.data.pop()!;
    if (this.data.length) {
      this.data[0] = last;
      this.heapifyDown();
    }
    return top;
  }
  peek(): Entry | undefined {
    return this.data[0];
  }
  heapifyUp() {
    let i = this.data.length - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.compare(this.data[i], this.data[parent])) {
        [this.data[i], this.data[parent]] = [this.data[parent], this.data[i]];
        i = parent;
      } else break;
    }
  }
  heapifyDown() {
    let i = 0;
    const n = this.data.length;
    while (true) {
      const l = 2 * i + 1;
      const r = 2 * i + 2;
      let best = i;
      if (l < n && this.compare(this.data[l], this.data[best])) best = l;
      if (r < n && this.compare(this.data[r], this.data[best])) best = r;
      if (best === i) break;
      [this.data[i], this.data[best]] = [this.data[best], this.data[i]];
      i = best;
    }
  }
  size() {
    return this.data.length;
  }
}

export function findXSum(nums: number[], k: number, x: number): number[] {
  const freq = new Map<number, number>();
  const result: number[] = [];

  const getSumTopX = () => {
    // Create a heap by (freq, num)
    const heap = new OwnMaxHeap(
      (a, b) => a.freq > b.freq || (a.freq === b.freq && a.num > b.num)
    );

    for (const [num, f] of freq) heap.push({ num, freq: f });

    let sum = 0;
    for (let i = 0; i < x && heap.size() > 0; i++) {
      const e = heap.pop()!;
      sum += e.num * e.freq;
    }
    return sum;
  };

  // First window
  for (let i = 0; i < k; i++) {
    freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
  }
  result.push(getSumTopX());

  // Move the window
  for (let i = k; i < nums.length; i++) {
    const outNum = nums[i - k];
    const inNum = nums[i];

    // Remove the number that exited the window
    const outFreq = freq.get(outNum)! - 1;
    if (outFreq === 0) freq.delete(outNum);
    else freq.set(outNum, outFreq);

    // Add a new number
    freq.set(inNum, (freq.get(inNum) || 0) + 1);

    result.push(getSumTopX());
  }

  return result;
}

// TLE 776 / 784 testcases passed