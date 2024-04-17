function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const hashMap = new Map<number, number>();
    let stack:number[] = [];
    let output:number[] = [];
    let result:number[]=[];


    for (let i = nums2.length-1;i>=0;i--){
        if (stack.length===0){
            output.push(-1)
        }
        else if (stack.length>0 && stack[stack.length-1]>nums2[i]){
            output.push(stack[stack.length-1])
        }
        else if (stack.length>0 && stack[stack.length-1]<nums2[i]){
            while (stack.length>0 && stack[stack.length-1]<nums2[i]){
                stack.pop()
            }
            if (stack.length==0){
                output.push(-1)
            }
            else{
                output.push(stack[stack.length-1]);
            }
        }
        stack.push(nums2[i]);
    }
    output= output.reverse()
    for (let i =0;i<nums1.length;i++){
        hashMap.set( nums1[i],i)
    }
    for (let i =0;i<nums2.length;i++ ){
        if (hashMap.has(nums2[i])){
            const index:any= (hashMap.get(nums2[i]))
            result[Number(index)]= output[i];
        }
    }
    return result

};

const arr = nextGreaterElement([4,1,2], [1,3,4,2]);
console.log(arr)