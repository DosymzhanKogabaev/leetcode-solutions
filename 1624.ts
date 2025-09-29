function maxLengthBetweenEqualCharacters(s: string): number {
    let max = 0, x = false;
    for(let i = 0; i < s.length - 1; i++) {
        let index = s.substr(i + 1, s.length - i - 1).lastIndexOf(s[i]);
        console.log(s.substr(i + 1, s.length - i - 1), s[i], index);
        if(index !== -1) {
            x = true;
            max = index > max ? index : max;
        }
    }
    return x ? max : -1;
};

console.log(maxLengthBetweenEqualCharacters("scayofdzca"));
