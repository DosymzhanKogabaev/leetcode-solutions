export function compareVersion(version1: string, version2: string): number {
    const arr1: number[] = version1.split(".").map(Number);
    const arr2: number[] = version2.split(".").map(Number);
    for(let i = 0; i < (arr1.length > arr2.length ? arr1.length : arr2.length); i++) {
        const num1 = i < arr1.length ? arr1[i] : 0;
        const num2 = i < arr2.length ? arr2[i] : 0;
        if(num1 > num2) return 1;
        if(num1 < num2) return -1;
    }
    return 0;
};

console.log(compareVersion("1.2", "1.10"));