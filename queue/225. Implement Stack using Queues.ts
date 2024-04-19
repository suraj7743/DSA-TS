// 225. Implement Stack using Queues
class MyStack {
    private queue:number[]= [];
    constructor() {
    }

    push(x: number): void {
        this.queue.push(x);
    } 

    pop(): number {
        // while (this.queue.length>1){
        //     this.queue2.push(this.queue.shift()||-1)
        // }
        // const temp = this.queue.shift();
        // while (this.queue2.length>0){
        //     this.queue.push(this.queue2.shift()||-1)
        // }
        // return temp||-1



        let count =this.queue.length;

        while(count>1){
            const value = this.queue.shift()||-1
            this.queue.push(value)
            count--
        }
        const temp = this.queue.shift()||-1
        return temp
    }

    top(): number {
        return this.queue[this.queue.length-1]
    }

    empty(): boolean {
        if (this.queue.length===0){
            return true
        }
        return false
    }
}




//  var obj = new MyStack()
//  obj.push(1)
//  obj.push(2)
// //  obj.push(x)
// //  obj.push(x)
// //  obj.push(x)
// var param_3 = obj.top()
//  var param_2 = obj.pop()
//  var param_4 = obj.empty()


//  console.log(param_2, param_3,param_4)
