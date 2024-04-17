function nearestGreaterToLeft(arr:number[], size:number):number[]{
    let stack:number[]= [];
    let vector:number[]=[];
    for (let i =0;i<size-1;i++){
        if (stack.length==0){
            vector.push(-1)
        }
       else  if (stack.length>0 && stack[stack.length-1]>arr[i]){
            vector.push(stack[stack.length-1])
        }
        else if (stack.length>0 && stack[stack.length-1]<arr[i]){
            while(stack.length>0 && stack[stack.length-1]<arr[i]){
                stack.pop()
            }
            if (stack.length==0){
                vector.push(-1)
            }
            else{
                vector.push(stack[stack.length-1])
            }
        }
        stack.push(arr[i]);

    }
    return vector;
}