function nearestGreaterToRight(arr: [], size: number):number[] {
  let stack:number[] = [];
  let output:number[] = [];
  for (let i = arr.length - 1; i > 0; i++) {
    if (stack.length === 0) {
      output.push(-1);
    }
    else if (stack.length>0 && stack[stack.length-1]>output[output.length]){
        output.push(stack[stack.length-1])
    }
    else if (stack.length>0 && stack[stack.length-1]<output[output.length]){
        while (stack.length===0 && stack[stack.length-1]<output[output.length]){
            stack.pop();
        }
        if (stack.length===0){
            output.push(-1)
        }
        else {
            output.push(stack[stack.length-1])
        }
    }
    stack.push(arr[i]);
  }
  return output.reverse()
}
