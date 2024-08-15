//Merge two Objects

const obj1 = {
    1: "a",
    2: "b"
};

const obj2 = {
    3: "c",
    4: "d"
};

// const obj3 = {obj1, obj2};
// console.log(obj3);

//or, 

// const obj3 = Object.assign({}, obj1, obj2); // {} -> as a target and other as a source
// console.log(obj3);

//or,
const obj3 = {...obj1, ...obj2}; //spread operator
console.log(obj3);