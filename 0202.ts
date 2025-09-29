function isHappy(n: number): boolean {
    let set = new Set<number>();
    while(true) {
        set.add(n);
        let sum = 0;
        while(n > 0) {
            sum += (n % 10) ** 2;
            n = Math.floor(n / 10); 
        }
        if(sum === 1) return true;
        n = sum;
        if(set.has(n)) return false;
    }
};

console.log(isHappy(19));