function lengthOfLongestSubstring(s: string): number {
    let max = 0;
    const len = s.length;
    for(let i = 0; i < len; i++) {
        const lettersSet = new Set<string>();
        let currentMax = 0;
        for(let j = i; j < len; j++) {
            if(lettersSet.has(s[j])) {
                break;
            }
            lettersSet.add(s[j]);
            currentMax++;
            max = Math.max(max, currentMax);
        }
    }
    return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring("a"));
console.log(lengthOfLongestSubstring("ab"));
console.log(lengthOfLongestSubstring("abc"));
console.log(lengthOfLongestSubstring("abcd"));
console.log(lengthOfLongestSubstring("abcde"));
console.log(lengthOfLongestSubstring("abcdef"));