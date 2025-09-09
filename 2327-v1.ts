export function peopleAwareOfSecret(n: number, delay: number, forget: number): number {
    function eachPerson(n1: number, delay1: number, forget1: number): number {
        // console.log(n1, delay1, forget1);
        if(n1 === 0) return 1;
        if(forget1 === 0) return 0;
        if(delay1 === 0) return eachPerson(n1 - 1, 0, forget1 - 1) + eachPerson(n1, delay, forget);
        return eachPerson(n1 - 1, delay1 - 1, forget1 - 1);
    }
    return eachPerson(n, delay, forget);
};

// My first solution through recursion, but it's too slow, so I need to use dynamic programming.