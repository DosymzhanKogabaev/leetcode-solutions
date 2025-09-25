function plusOne(digits: number[]): number[] {
    digits[digits.length - 1]++;
    let i = digits.length - 1;
    while(i > 0) {
        if(digits[i] === 10) {
            digits[i - 1]++;
            digits[i] = 0;
        }
        i--;
    }
    if(digits[0] === 10) {
        digits[0] = 0;
        digits.unshift(1);
    }
    return digits;
};