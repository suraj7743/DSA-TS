function stockSpan (arr:number[], size:number){
    let stack:number[][]= [[]];
    let vector:number[]=[];
    let result:number[]=[];
    for (let i =0;i<size-1;i++){
        if (stack.length==0){
            vector.push(-1)
        }
       else  if (stack.length>0 && stack[stack.length-1][0]>arr[i]){
            vector.push(stack[stack.length-1][1])
        }
        else if (stack.length>0 && stack[stack.length-1][0]<arr[i]){
            while(stack.length>0 && stack[stack.length-1][0]<arr[i]){
                stack.pop()
            }
            if (stack.length==0){
                vector.push(-1)
            }
            else{
                vector.push(stack[stack.length-1][1])
            }
        }
        stack.push([arr[i],i]);

}

for (let i =0;i<vector.length;i++){
    result.push(i-vector[i]);
}
return result
}