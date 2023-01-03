export default class Queue {
  constructor() {
    this.arr = [];
  }

  /**
   * @type {*|null}
   */
  get back() {
    return !this.isEmpty ? this.arr[this.arr.length - 1] : null;
  }

  /**
   * @type {*|null}
   */
  get front() {
    return !this.isEmpty ? this.arr[0] : null;
  }

  /**
   * @type {boolean}
   */
  get isEmpty() {
    return this.arr.length === 0;
  }

  /**
   * Read the element at the front of the queue without removing it.
   * @return {*}
   */
  peek() {
    return this.front;
  }

  /**
   * Add a new element to the end of the queue
   * This element will be processed after all elements ahead of it.
   * @param {*} value
   */
  enqueue(value) {
    this.arr.push(value);
  }

  /**
   * Remove the element at the front of the queue (the head of the linked list).
   * If the queue is empty, return null.
   * @return {*}
   */
  dequeue() {
    if (this.isEmpty) {
      return null;
    }

    return this.arr.shift();
  }

  /**
   * @param [callback]
   * @return {string}
   */
  toString(callback = (v) => v) {
    return this.arr.reduce(
      (acc, val, index) => `${acc}${index > 0 ? ',' : ''}${callback(val)}`,
      ''
    );
  }
}
