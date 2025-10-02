type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    return {
        toBe: (newVal) => {
            if(newVal === val) return true;
            throw Error("Not Equal");
        },
        notToBe: (newVal) => {
            if(newVal !== val) return true;
            throw Error("Equal");
        }
    }
};