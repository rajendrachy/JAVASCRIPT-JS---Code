// Calculate square of array
// Calculate cube of array
// Add 3 to each element of array.
// Return new array with only even elements



// var squareArray = [];
// for(let i=0;i<arr.length;i++){
//     squareArray.push(arr[i]*arr[i]);
// }

// console.log(squareArray);

// var cubeArray = [];

// for(let i=0;i<arr.length;i++){
//     cubeArray.push(arr[i]*arr[i]*arr[i]);
// }

// var addOneArray = [];
// for(let i=0;i<arr.length;i++){
//     addOneArray(arr[i]+3)
// }

// const iterator = function(arr,callback){
//     const newArr=[];
//     for(let i=0;i<arr.length;i++){
//         newArr.push(callback(arr[i]))
//     }
//     return newArr;
// }

// var squareArr = iterator(arr,(ele)=>{
//     return ele*ele;
// })

// var cubeArr = iterator(arr,(ele)=>{
//     return ele*ele*ele;
// })

// var addOneArray = iterator(arr,(ele)=>{
//     return ele+3;
// })

// const iterator = function(arr,callback){
//     const newArr=[];
//     for(let i=0;i<arr.length;i++){
//         newArr.push(callback(arr[i],i,arr))
//     }
//     return newArr;
// }

// var squareArr = arr.map((element,index,array)=>{
//     return element * element;
// })

// console.log(squareArr);


// const iterator = function(arr,callback){
//     const newArr=[];
//     for(let i=0;i<arr.length;i++){
//        if(callback(arr[i])){
//         newArr.push(arr[i])
//        }
//     }
//     return newArr;
// }
// var evenArray = arr.filter((element,index,array)=>element%2==0);
// var oddArray = arr.filter((element,index,array)=>element%2!=0);
// var evenMapped = arr.map((element,index,array)=>{
//     if(element%2==0){
//         return element;
//     }
// })

// var evenArray = iterator(arr,(ele)=>ele%2==0);
// var oddArray = iterator(arr,(ele)=>ele%2!=0)

// console.log(evenArray);
// console.log(evenMapped)

// var findElement = arr.find((element)=>element%2 == 0);
// console.log(findElement);

var arr = [1,2,3,4,5,6];
arr.forEach((element,index,array)=>{
    array[index] = element*element
});

console.log(arr);

