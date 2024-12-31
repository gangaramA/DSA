

function addArr(arr,callback){
    let sum=0;

    for(let t of arr){

        sum=callback(sum,t)
    }
    return sum
}

function callback(sum,t){
    return sum+t
}

console.log(addArr([1,2,3],callback))