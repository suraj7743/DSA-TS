class MyQueue {
  private stack: number[] = [];
  private arr: any = [];
  constructor() {}

  push(x: number): void {
    this.stack.push(x);
  }

  pop(): number {
    if (this.arr.length === 0) {
      while (this.stack.length > 0) {
        const value = this.stack.pop()
        this.arr.push(value);
      }
    }
    return this.arr.pop();
  }

  peek(): number {
    if (this.arr.length === 0) {
      while (this.stack.length > 0) {
        const value = this.stack.pop()
        this.arr.push(value);
      }
    }
    const value = this.arr[this.arr.length - 1];
    return value;
  }

  empty(): boolean {
    if (this.stack.length === 0 && this.arr.length === 0) {
      return true;
    }
    return false;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */


