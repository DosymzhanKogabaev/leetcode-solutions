export type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    let ans: Obj[][] = [], newArr: Obj[] = [], j = 1;
    for(let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
        j++;
        if(j > size) {
            ans.push(newArr);
            newArr = [];
            j = 1;
        }
    }
    if(newArr.length !== 0) ans.push(newArr);
    return ans;
};
