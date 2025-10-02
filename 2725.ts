export type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void

function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
    fn(...args);
    
    let id = setInterval(() => {
        fn(...args);
    },t);

    let cancelFn = () => clearInterval(id);

    return cancelFn;
};