export function strStr(haystack: string, needle: string): number {
    for(let i = 0; i < haystack.length - needle.length + 1; i++) {
        if(haystack.substring(i, i + needle.length) === needle) return i;
    }
    return -1;
};

console.log(strStr("hello", "ll"));