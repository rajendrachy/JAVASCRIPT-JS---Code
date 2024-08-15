// const tinderuser = new Object(); //single ton object
// console.log(tinderuser); // {}




// const tinderUser = { // not a single ton object

// }
// console.log(tinderUser); // {}


// const tinderUser = {}
// tinderUser.id = "123abs";
// tinderUser.name = "sammy";
// tinderUser.isloggin = false;
// console.log(tinderUser); //all obj print



const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "Chaudahary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname); //hitesh