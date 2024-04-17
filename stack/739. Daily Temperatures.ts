function dailyTemperatures(temperatures: number[]): number[] {
    
  let stack2:number[][] = [[]];
  let output:number[] = [];
  let resul :number[]=[];
  for (let i = temperatures.length - 1; i >= 0; i--) {
    if (stack2.length ==1) {
      output.push(-1);
    }
    else if (stack2.length>1 && stack2[stack2.length-1][0]>temperatures[i]){
        output.push(stack2[stack2.length-1][1])
    }
    else if (stack2.length>1 && stack2[stack2.length-1][0]<=temperatures[i]){
        while (stack2.length>1 && stack2[stack2.length-1][0]<=temperatures[i]){
            stack2.pop();
        }
        if (stack2.length===1){
            output.push(-1)
        }
        else {
            output.push(stack2[stack2.length-1][1])
        }
    }
    stack2.push([temperatures[i],i]);

  }
  output= output.reverse();
  for (let i =0;i<temperatures.length;i++){
      const value = output[i]-i;
      if (value >0){
        resul.push(value)
      }
      else{
        resul.push(0)
      }
}
return resul

};

