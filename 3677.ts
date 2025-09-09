function countBinaryPalindromes(n: number): number {
    // zero case
    if (n === 0) return 1; // only "0"
  
    // we count 0 separately (its binary form "0" — palindrome)
    let res = 1;
  
    // length in bits for n
    const L = Math.floor(Math.log2(n)) + 1;
  
    // count all palindromes of length < L (only those with the most significant bit = 1)
    for (let d = 1; d < L; d++) {
      const half = Math.ceil(d / 2);
      res += Math.pow(2, half - 1); // free bits in the first half = half-1 (first bit = 1)
    }
  
    // now we handle the length == L
    const half = Math.ceil(L / 2);
    // prefix = first 'half' bits of n
    const prefix = Math.floor(n / Math.pow(2, L - half));
    const minPrefix = Math.pow(2, half - 1); // minimum allowed prefix (most significant bit = 1)
  
    // function builds a palindrome from the prefix (arithmetic, without bit operations)
    function makePalindrome(x: number, odd: boolean): number {
      let res = x;
      let toMirror = odd ? Math.floor(x / 2) : x;
      while (toMirror > 0) {
        res = res * 2 + (toMirror % 2);
        toMirror = Math.floor(toMirror / 2);
      }
      return res;
    }
  
    const pal = makePalindrome(prefix, L % 2 === 1);
    // number of prefixes, which < prefix
    let countThisLen = prefix - minPrefix;
    // if the palindrome built from prefix, does not exceed n — we consider it
    if (pal <= n) countThisLen++;
  
    res += countThisLen;
    return res;
}