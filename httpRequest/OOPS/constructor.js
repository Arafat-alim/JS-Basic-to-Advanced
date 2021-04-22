// console.log("Hello");
//want to make 1000 objects then what to do ?
//here constructor helps us to to make our task easier
// var Person = {
//     name: 'Arafat',
//     birth: 1997,
//     job: 'Engg'
// }
//constructor function
function Person(pName,pYear,pJob){
    //function properties
    this.name = pName;
    this.birth = pYear;
    this.job = pJob;
    //adding method to constructor function
    //calculate Age
    this.calculateAge = function(){
        console.log(2020 - this.birth);
    }
}
//calling instance
var arafat = new Person('Vicky', 1990, 'Salesman')
arafat.calculateAge();
console.log(arafat);

//calling more instance 
var mac = new Person('Mac',1991,'Pilot')
mac.calculateAge();
console.log(mac.name)

//we create a function once and making instance multiples time to avoiding to create an objects

