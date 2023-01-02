export default class Stack {
  constructor() {
    this.arr = [];
  }

  get top() {
    return this.arr?.[0] ?? null;
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.arr.length === 0;
  }

  /**
   * @return {*}
   */
  peek() {
    return this.top;
  }

  /**
   * @param {*} value
   */
  push(value) {
    this.arr.unshift(value);

    return value;
  }

  /**
   * @return {*}
   */
  pop() {
    if (this.arr.length === 0) {
      return null;
    }

    return this.arr.shift();
  }

  /**
   * @return {*[]}
   */
  toArray() {
    // We call slice here since we don't want to return a reference to the
    // actual array we use, since then it might get mutated
    return this.arr.slice();
  }

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback = (value) => value) {
    return this.arr.reduce(
      (acc, el, index) => `${acc}${index > 0 ? "," : ""}${callback(el)}`,
      ""
    );
  }
}
