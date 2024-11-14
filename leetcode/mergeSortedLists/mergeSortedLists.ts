export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  // Create a dummy node to serve as the start of the merged list
  const dummy = new ListNode(-1);
  let current = dummy;

  // Traverse both lists and append the smaller value to the merged list
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1; // Link to list1 node
      list1 = list1.next; // Move to the next node in list1
    } else {
      current.next = list2; // Link to list2 node
      list2 = list2.next; // Move to the next node in list2
    }
    current = current.next; // Move to the next node in the merged list
  }

  // If one of the lists is not empty, append it to the result
  current.next = list1 !== null ? list1 : list2;

  // Return the merged list, starting from the node after the dummy
  return dummy.next;
}
