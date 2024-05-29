list1 = [9,9,9,9,9,9,9]
list2 = [9,9,9,9]


let l1 = new ListNode(list1.shift())
let l2 = new ListNode(list2.shift())

l1 = createLists(list1, l1)
l2 = createLists(list2, l2)

function createLists(items, head){
    let newHead = head
    items.forEach(
        v => {
            newHead = new ListNode(v, newHead)
        }
    )
    return newHead
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//CODE START 109ms/54mb
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    add(data) {
        const newNode = new ListNode(data);
        if (!this.head) {
           this.head = newNode;
           this.tail = newNode;
        } else {
           this.tail.next = newNode;
           this.tail = newNode;
        }
        return this;
     }
}

var addTwoNumbers = (l1, l2, resultList, toCarry) => {
    if (!l1 && !l2 && toCarry == 0){
        return resultList.head
    }

    if (toCarry == undefined){
        toCarry = 0
        resultList = new LinkedList();
    }

    sumResult = ((l1?.val || 0) + (l2?.val || 0) + toCarry)

    if (sumResult > 9) {
        toCarry = Math.floor(sumResult/10)
        sumResult = sumResult % 10
    } else {
        toCarry = 0
    }

    resultList.add(sumResult)

    return addTwoNumbers(l1?.next,l2?.next,resultList, toCarry)
};

//CODE END

console.log(addTwoNumbers(l1,l2))


