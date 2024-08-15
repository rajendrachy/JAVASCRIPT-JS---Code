//singleton

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


//console.log(JsUser.email); //Hitest@gmail.com
//console.log(JsUser["email"]); //Hitest@gmail.com
//console.log(JsUser["full name"]); //Hitesh Chaudhary


console.log(JsUser["email"]); //Hitest@gmail.com

JsUser.email = "hitesh@chatgpt.com";
//console.log(JsUser["email"]); //hitesh@chatgpt.com



