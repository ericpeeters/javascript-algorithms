export default class PriorityQueue {
  constructor() {
    this.items = new Map();
    this.priorities = new Set();
  }

  /**
   * @type {Number[]}
   */
  get ascendingPrioritiesArray() {
    return Array.from(this.priorities.values()).sort((a, b) => a - b);
  }

  /**
   * @type {Number}
   */
  get highestPriority() {
    return this.ascendingPrioritiesArray[0];
  }

  /**
   * @type {Boolean}
   */
  get isEmpty() {
    return this.items.size === 0;
  }

  /**
   * Add item to the priority queue.
   * @param {*} item - item we're going to add to the queue.
   * @param {number} [priority] - items priority.
   * @return {PriorityQueue}
   */
  add(item, priority = 0) {
    if (!this.items.has(priority)) {
      this.items.set(priority, []);
    }

    const itemsInPriority = this.items.get(priority);

    itemsInPriority.push(item);
    this.priorities.add(priority);

    return this;
  }

  /**
   * Peek the value with the highest priority
   * @return {*}
   */
  peek() {
    if (this.isEmpty) {
      return null;
    }

    return this.items.get(this.highestPriority)[0];
  }

  /**
   * Poll the value with the highest priority from the queue
   * and return it
   * @return {*}
   */
  poll() {
    if (this.isEmpty) {
      return null;
    }

    const highestPriorityItems = this.items.get(this.highestPriority);
    const itemValue = highestPriorityItems.shift();

    if (highestPriorityItems.length === 0) {
      this.items.delete(this.highestPriority);
      this.priorities.delete(this.highestPriority);
    }

    return itemValue;
  }

  /**
   * Remove item from priority queue.
   * @param {*} item - item we're going to remove.
   * @param {Comparator} [customFindingComparator] - custom function for finding the item to remove
   * @return {PriorityQueue}
   */
  remove(item, customFindingComparator) {}

  /**
   * Change priority of the item in a queue.
   * @param {*} item - item we're going to re-prioritize.
   * @param {number} priority - new item's priority.
   * @return {PriorityQueue}
   */
  changePriority(item, priority) {}

  /**
   * Find item by ite value.
   * @param {*} item
   * @return {Number[]}
   */
  findByValue(item) {}

  /**
   * Check if item already exists in a queue.
   * @param {*} item
   * @return {boolean}
   */
  hasValue(item) {}

  /**
   * Compares priorities of two items.
   * @param {*} a
   * @param {*} b
   * @return {number}
   */
  comparePriority(a, b) {}

  /**
   * Compares values of two items.
   * @param {*} a
   * @param {*} b
   * @return {number}
   */
  compareValue(a, b) {}
}
