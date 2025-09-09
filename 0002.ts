class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
function toNumber(l: ListNode | null): number {
    let n = 0;
    let i = 0;
    while(l) {
        n += l.val * 10 ** i;
        i++;
        l = l.next;
    }
    return n;
}
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let n1 = toNumber(l1);
    let n2 = toNumber(l2);
    const sum = n1 + n2;
    const reversedSum = sum.toString().split('').reverse().map(Number);
    let l = new ListNode(reversedSum[0]);
    let res = l;
    for(let i = 1; i < reversedSum.length; i++) {
        l.next = new ListNode(reversedSum[i]);
        l = l.next;
    }
    return res;
};
console.log(addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(3))), new ListNode(5, new ListNode(6, new ListNode(4)))));