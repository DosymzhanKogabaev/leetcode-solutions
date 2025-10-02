type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

function once(fn: Function): OnceFn {
    let val: JSONValue | undefined = undefined;
    return function (...args: JSONValue[]) {
        if(val === undefined) {
            val = fn(...args);
            return val;
        }
        return undefined;
    };
}

const func = (a, b, c) => (a + b + c);
const onceFn = once(func)
console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // undefined