class Stack<T> {
    private stack:number[]=[];
  push(num: number): void {
    this.stack.push(num);
  }
  pop(): number| undefined {
    return this.stack.pop();
  }
}
