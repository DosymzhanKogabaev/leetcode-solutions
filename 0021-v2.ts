export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let newList = new ListNode();
    let newListHead = newList;
    while(list1 !== null && list2 !== null) {
        if(list1.val === list2.val) {
            newList.next = new ListNode(list1.val);
            newList = newList.next;
            newList.next = new ListNode(list2.val);
            newList = newList.next;
            list1 = list1.next;
            list2 = list2.next;
        }
        else if(list1.val < list2.val) {
            newList.next = new ListNode(list1.val);
            newList = newList.next;
            list1 = list1.next;
        }
        else {
            newList.next = new ListNode(list2.val);
            newList = newList.next;
            list2 = list2.next;
        }
    }
    while(list1 !== null) {
        newList.next = new ListNode(list1.val);
        newList = newList.next;
        list1 = list1.next;
    }
    while(list2 !== null) {
        newList.next = new ListNode(list2.val);
        newList = newList.next;
        list2 = list2.next;
    }
    return newListHead.next;
}

console.log(mergeTwoLists(new ListNode(1, new ListNode(2, new ListNode(4))), new ListNode(1, new ListNode(3, new ListNode(4)))));