//| *
//|   *
//|     *
//|   *
//| *
//|   *
//|     *
//|   *
//| *
//|   *
//|     *
//|   *
//| *
//|   *
//|     *
//|   *
//| *
let rows=24;
let result_s=""
for (let i=0;i<rows;i++){
    for (let j=0;j<i%4;j++){ 
        if (i%4===3){
            result_s= result_s+"  "
            break;
        }
            result_s= result_s+"  "
    }
    result_s= result_s+"*"
    result_s= result_s+"\n"
}
console.log(result_s)