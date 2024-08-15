//obj literals --- >>>

const JsUser = {
    name:"Hitesh",
    "full name": "Hitesh Chaudhary",
    age: 18,
    location: "Jaipur",
    email: "Hitest@gmail.com",
    isLoggin: false,
    lastLoginDays: ["Monday", "Saturday"]
}


JsUser.greeting = function () {
    console.log("Hello Js user");
}

//console.log(JsUser.greeting); //anonymous
console.log(JsUser.greeting()); //Hello js user + undefined 

JsUser.greetingTwo = function () {
    console.log(`Hello Js user, ${this.name}`);
}
console.log(JsUser.greetingTwo());



