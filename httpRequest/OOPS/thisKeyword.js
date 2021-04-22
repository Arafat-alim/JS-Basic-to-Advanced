//console.log("Hello")
//1)
var Person1 = {
    FirstName: "Arafat",
    yearBirth: 1997,
    job: "Engineering",
    getName: function () {
        return this.FirstName;
    }
}
console.log(Person1.getName());
//2)
var firstName = "Rohan"; //global variable
var Person2 = {
    firstName: "Harry",
    yearBirth: 1996,
    job: "Wizard",
    getName1: function () {
        console.log(firstName);
    }
}
Person2.getName1(); // console return nh kr raha hai kuch
//3
var Person3 = {
    firstName: "Mac",
    yearBirth: 1995,
    job: "Slum",
    getName1: function () {
        console.log(this.firstName);
    }
}

Person3.getName1();
