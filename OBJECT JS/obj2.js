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

//JsUser.email = "hitesh123@gmail.com";

Object.freeze(JsUser);

JsUser.email = "hitesh123@gmail.com";
console.log(JsUser);