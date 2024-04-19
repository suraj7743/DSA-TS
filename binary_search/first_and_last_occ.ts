function searchRange(nums: number[], target: number): number[] {
    let start = 0;
    let end = nums.length-1;
    let result = [-1,-1];
    //first occurance 
    while(start<=end){
            let mid = Math.trunc(start+((end-start)/2));
            if (nums[mid]===target){
                result[0]= mid; 
                end= mid-1;
            }
            else if (target<nums[mid]){
                end = mid-1
            }
            else{
                start= mid+1
            }
        }

        start = end ; 
        end = nums.length-1
//last occurance
        while(start<=end){
            let mid = Math.trunc(start+((end-start)/2));
            if (nums[mid]===target){
                result[1]= mid; 
                start= start+1;
            }
            else if (target<nums[mid]){
                end = mid-1
            }
            else{
                start= mid+1
            }
        }

        return result
};


const nums = [5,7,7,8,8,10]
const target = 8

console.log(searchRange(nums, target))