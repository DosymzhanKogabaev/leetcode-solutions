function lengthOfLastWord(s: string): number {
    let words: string[] = s.trim().split(" ");
    return words[words.length - 1].length;
};

console.log(lengthOfLastWord("Hello World"));