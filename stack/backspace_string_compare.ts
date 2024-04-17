function backspaceCompare(s: string, t: string): boolean {
    let stack:string[]=[];
    let stackT:string[]=[];
    for( let i=0;i<s.length;i++){
        if (s[i]==="#"){
            stack.pop();
        }
        else{
            stack.push(s[i]);
        }
    }
    for (let i =0;i<t.length;i++){
        if (t[i]==="#"){
            stackT.pop()
        }
        else{
            stackT.push(t[i]);
        }
    }
    if (JSON.stringify(stack)===JSON.stringify(stackT)){
        return true;
    }
    else{
        return false
    }
};

backspaceCompare("ab#c", "ad#c")