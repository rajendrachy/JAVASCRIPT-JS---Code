// var obj = {};
// var newObj = new Object();

// var student={
//     "First Name":"Aisha",
//     "age":20,
//     "class":"CSE"
// }
// // student.firstName = "Satyam";
// student.lastName = "Shah";
// console.log(student);


// var student = {};

// student.firstName = "Aaisha";
// student.age = "20";


var student={
    "First Name":"Aisha",
    "age":20,
    "class":"CSE",
    marks:[24,20,23,25,30],
    address:{
        streetName:"Don't Know",
        cityName:"New Delhi",
        country:"India",
        pincode:"123456"
    },
    fullAddress:function(){
        return `${this.address.streetName}, ${this.address.cityName}, ${this.address.country} - ${this.address.pincode}`
    }
}
// console.log(student.fullAddress())

// console.log(student.marks[1])
// student.marks.forEach((ele)=>console.log(ele))
// student.marks.splice(1,2,30,32)
// console.log(student)
// console.log(student.address.country);

console.log(student.hasOwnProperty('First Name'))