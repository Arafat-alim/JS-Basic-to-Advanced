console.log("What JSON String not Accepted");

var mObj = {
    "name": 'MAggi',
    "Score": undefined, //it will not show 
    "getName": function(){
        return this.name;
    },    
} 
var str1 = JSON.stringify(mObj);
console.log(str1);
console.log(JSON.parse(str1));

console.log("What JSON String accepted ");

var mObj2 = {
    "name": "Google", // string
    "Phone": 9123456789, //number
    // var insideObj = { //object
    //     name: "Arafat",
    //     roll: "27"
    // },
    "boolean": true,
     listArray: [1,2,34,45],
     listArray1: null,
     newObj: {
         "math": 25,
         "science": 45
     }
}
var str2 = JSON.stringify(mObj2);
console.log(str2);
console.log(JSON.parse(str2));