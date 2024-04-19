class LinkedListNode <T>{
    private nextNode:LinkedListNode<T>| null;
    private previousNode:LinkedListNode<T>|null;
    private val:number;

    constructor(val:number){
        this.val= val;
        this.nextNode= null;
        this.previousNode=null
    }

}


interface List<T>{
    head:LinkedListNode<T>;
    tail:LinkedListNode<T>;
    size:number;
}

class LinkedList <T>{
    private List:List<T>|undefined;
    constructor(){
        this.List= undefined
        
    }




    /**
     * Return Size (0(1)))
     *  @returns {number}
     * 
     * 
     * 
     *  */
    size():number{
        if (this.List){
            return this.List.size;
        }
        return 0

    }
    iterable(){
        
    }





     
}