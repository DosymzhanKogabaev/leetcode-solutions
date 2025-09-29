function isPalindrome(x: number): boolean {
    if(x < 0) return false;
    const t = x;
    let a = 0;
    while(x > 0) {
        a *= 10;
        a += x % 10;
        x = Math.floor(x / 10);
    }
    return a === t;
};

console.log(isPalindrome(121));