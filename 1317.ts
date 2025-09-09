    function getNoZeroIntegers(n: number): number[] {
        let a = 1, b = n - 1;
        while(a.toString().includes('0') || b.toString().includes('0')) {
            a++;
            b--;
        }
        return [a, b];
    };