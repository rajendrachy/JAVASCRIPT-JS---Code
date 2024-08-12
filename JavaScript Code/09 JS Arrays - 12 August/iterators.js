// Map, foreach, filter, find.

// var arr = [4,9,16,25]

// const newArr = arr.map((ele)=>Math.sqrt(ele))

// function calcSquareRoot(arr,callback){
//     const newArr = [];
//     for(let i=0;i<arr.length;i++){
//         const result = callback(arr[i])
//         newArr.push(result);
//     }
// }

// const arraySqrt = calcSquareRoot(arr,(ele)=>Math.sqrt(ele));
// const squaredArray = calcSquareRoot(arr,(ele)=>ele*ele);

var arr = [8,2,3,4,86,1,5,3,4];

const evenArray = arr.filter((ele)=>ele%2==0)

// function filterArray(arr,callback){
//     const newArr = [];
//     for(let i=0;i<arr.length;i++){
//        if(callback(arr[i])){
//         newArr.push(arr[i]);
//        }  
//     }
//     return newArr;
// }

// const evenArray = filterArray(arr,(ele)=>ele%2==0)
// const oddArray = filterArray(arr,(ele)=>ele%2!=0)
console.log(evenArray)