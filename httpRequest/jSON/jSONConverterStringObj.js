console.log("Processing . . . ");
console.log("creating JSON object");
//creating JSON object
var mArr = [
    {
        "name": "Arafat",
        "Profession": "Engineering"
    }
]

console.log("JSON Object converted to String");
var JSONString = JSON.stringify(mArr);
console.log(JSONString);

console.log("JSON String converted to Object");
console.log(JSON.parse(JSONString));

