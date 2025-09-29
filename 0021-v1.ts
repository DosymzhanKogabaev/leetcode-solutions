class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let list: number[] = [];
    while(list1 != null) {
        list.push(list1.val);
        list1 = list1.next;
    }
    while(list2 != null) {
        list.push(list2.val);
        list2 = list2.next;
    }
    if(list.length === 0) {
        return null;
    }
    list = list.sort((a, b) => a - b);
    let newList = new ListNode();
    let newListHead = newList;
    list.forEach((v, i) => {
        newList.val = v; 
        if(i < list.length - 1) {
            newList.next = new ListNode();
            newList = newList.next;
        }
    });
    return newListHead;
};

console.log(mergeTwoLists(new ListNode(1, new ListNode(2, new ListNode(4))), new ListNode(1, new ListNode(3, new ListNode(4))))); 

// This solution is correct, but it is not the best solution.