//selectInputBox
var uName = document.getElementById("user");
var sub = document.getElementById("btn-submit");
//console.log(uName);
//changeEvent
// uName.addEventListener('change', function(){
//     console.log("Changed Successfully"); // it count only when user input differenct input all the time
// })
//input
// uName.addEventListener('input',function(){
//     console.log("Changed Successfully"); //it record whenever user type anything repeated also counted(kuch bhi type kro record realtime)
// })


    //Q1.See what user typing and show me in the console in realtime
    // uName.addEventListener('input',function(e){
    //     // console.log(event.target); // target the input
    //     console.log(event.target.value);
    // })
    //Q2. Convert it into the uppercase
    uName.addEventListener('input',function(e){
        var currentVal = event.target.value;
        currentVal = currentVal.toUpperCase();
        console.log(currentVal);
        //Q3. Automatically small to uppercase
        user.value = currentVal;
    })

//2. Focus 
uName.addEventListener('focus', function(){
    console.log("Element Focussed");
})

//3. blur
uName.addEventListener('blur', function(){
    console.log("Element Losses its focus")
})

//4 submit
sub.addEventListener('submit',function(){
    alert("Submit Button clicked");
})
    
