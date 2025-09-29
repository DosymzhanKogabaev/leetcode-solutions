function longestCommonPrefix(strs: string[]): string {
    if(strs.length === 0) return "";
    let res = "";
    for(let i = 0; i < strs[0].length; i++) {
        res += strs[0][i];
        let x = true;
        for(let j = 0; j < strs.length; j++) {
            x = strs[j].startsWith(res);
            if(!x) break; 
        }
        if(!x) {
            res = res.slice(0, -1);
            break;
        }
    }
    return res;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));