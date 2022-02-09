function firstfunc(param){
   // console.log("print from func")
    //console.log(param)
    let rval = Math.random() > 0.5 ? true : "bhai 0.5 sy bara kroo"
    return rval
}

// firstfunc()
// firstfunc(10)
let a = firstfunc([1,6,8,6]);

console.log("function",a)