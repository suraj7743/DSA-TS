function maximumAreaHistogram(arr:number[], size:number): number{
    const rightIndex:number[]= nstoRightIndex(arr, size);
    const leftIndex:number[]= nstoLeftindex(arr, size);
    let max=0;
    for ( let i =0;i<=size-1;i++){
        const result= rightIndex[i]-leftIndex[i]-1;
        if (result>max){
            max=result
        }

    }
    return max;
}


function nstoLeftindex(arr:number[], size:number):number[]{
    let stack:number[][]=[[]];
    let vector :number[]=[];
    for (let i =0; i<=size-1 ;i++){
        if(stack.length==0){
            vector.push(-1);
        }
        else if (stack.length>0 && stack[stack.length-1][0]<arr[i]){
            vector.push(stack[stack.length-1][1])

        }
        else if (stack.length>0 && stack[stack.length-1][0]>arr[i]){
            while(stack.length>0 && stack[stack.length-1][0]>arr[i]){
                stack.pop()
            }
            if (stack.length==0){
                vector.push(-1)
            }
            else{
                vector.push(stack[stack.length-1][1])
            }
        }
        stack.push([arr[i], i]);
    }
    return vector;
}


function nstoRightIndex(arr:number[], size:number):number[]{
    let stack:number[][]=[[]];
    let vector :number[]=[];
    for (let i =size-1; i>=0 ;i--){
        if(stack.length==0){
            vector.push(-1);
        }
        else if (stack.length>0 && stack[stack.length-1][0]<arr[i]){
            vector.push(stack[stack.length-1][1])

        }
        else if (stack.length>0 && stack[stack.length-1][0]>arr[i]){
            while(stack.length>0 && stack[stack.length-1][0]>arr[i]){
                stack.pop()
            }
            if (stack.length==0){
                vector.push(-1)
            }
            else{
                vector.push(stack[stack.length-1][1])
            }
        }
        stack.push([arr[i], i]);
    }
    return vector.reverse();
}