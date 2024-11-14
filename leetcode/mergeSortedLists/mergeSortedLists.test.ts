// mergeTwoLists.test.ts
import { mergeTwoLists, ListNode } from "./mergeSortedLists";

// Helper function to create a linked list from an array
function createLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  const dummy = new ListNode();
  let current = dummy;
  for (const val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to convert a linked list to an array
function linkedListToArray(node: ListNode | null): number[] {
  const result: number[] = [];
  while (node !== null) {
    result.push(node.val);
    node = node.next;
  }
  return result;
}

describe("mergeTwoLists", () => {
  test("merges two non-empty sorted lists", () => {
    const list1 = createLinkedList([1, 2, 4]);
    const list2 = createLinkedList([1, 3, 4]);
    const mergedList = mergeTwoLists(list1, list2);
    expect(linkedListToArray(mergedList)).toEqual([1, 1, 2, 3, 4, 4]);
  });

  test("merges a list with an empty list", () => {
    const list1 = createLinkedList([1, 3, 5]);
    const list2 = createLinkedList([]);
    const mergedList = mergeTwoLists(list1, list2);
    expect(linkedListToArray(mergedList)).toEqual([1, 3, 5]);
  });

  test("merges two empty lists", () => {
    const list1 = createLinkedList([]);
    const list2 = createLinkedList([]);
    const mergedList = mergeTwoLists(list1, list2);
    expect(linkedListToArray(mergedList)).toEqual([]);
  });

  test("merges a list with one element and an empty list", () => {
    const list1 = createLinkedList([0]);
    const list2 = createLinkedList([]);
    const mergedList = mergeTwoLists(list1, list2);
    expect(linkedListToArray(mergedList)).toEqual([0]);
  });

  test("merges two single-element lists", () => {
    const list1 = createLinkedList([2]);
    const list2 = createLinkedList([1]);
    const mergedList = mergeTwoLists(list1, list2);
    expect(linkedListToArray(mergedList)).toEqual([1, 2]);
  });

  test("merges lists with negative and positive numbers", () => {
    const list1 = createLinkedList([-10, -5, 3]);
    const list2 = createLinkedList([-7, 0, 8]);
    const mergedList = mergeTwoLists(list1, list2);
    expect(linkedListToArray(mergedList)).toEqual([-10, -7, -5, 0, 3, 8]);
  });

  test("merges two long lists", () => {
    const list1 = createLinkedList([1, 3, 5, 7, 9]);
    const list2 = createLinkedList([2, 4, 6, 8, 10]);
    const mergedList = mergeTwoLists(list1, list2);
    expect(linkedListToArray(mergedList)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });
});
