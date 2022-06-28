

// 1
let arr = [1,2 ,3, 4, 5, 6, 7,1 , 3]


let obj ={

}


for( let i=0; i<arr.length; i++)
{
    obj[arr[i]]=  obj[arr[i]] == undefined ? 0:obj[arr[i]]+1;
}
 console.log(obj);