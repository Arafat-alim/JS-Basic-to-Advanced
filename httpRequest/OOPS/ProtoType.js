// console.log("Testing")
//Parent --> Child 
//child obj can access every property of parent object

//creating an constructor function
function Person(pName,pBirth,pJob){
    this.name = pName;
    this.birth = pBirth;
    this.job = pJob;
}
//1)making seperate prototype which can use by one using instance
Person.prototype.calculateAge = function(){
    console.log('For => ' + this.name, 2021 - this.birth);
}
//2) Prototype property
Person.prototype.lastName = "Khan";
//3)Method to set data: Ex. Update your Birth
Person.prototype.updateBirth = function(birthYear){
    this.birth = birthYear;
    // console.log(birthYear)
}
// creating an instance
var Arafat = new Person('Arafat',1997,'Engg');
var Magnum = new Person('Magnum',1980,'RabisKhan')
//calling my prototype
Arafat.calculateAge();
Magnum.calculateAge();

//2 printing my sescond prototype
console.log(Arafat.lastName);

//3 printing my thirs prototype
Arafat.calculateAge(); //previous Age
Arafat.updateBirth(1995); //Updating Age
Arafat.calculateAge(); //After Updated 