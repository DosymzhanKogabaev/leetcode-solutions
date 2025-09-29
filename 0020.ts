function isValid(s: string): boolean {
    let list: string[] = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '{' || s[i] === '[' || s[i] === '(') {
            list.push(s[i]);
        }
        else {
            if(list.length === 0) return false;
            if((s[i] === '}' && list[list.length - 1] === '{') || 
            (s[i] === ')' && list[list.length - 1] === '(') ||
            (s[i] === ']' && list[list.length - 1] === '[')) list.splice(-1, 1);
            else return false;
        }
    }
    return list.length === 0;
};

console.log(isValid("()"));