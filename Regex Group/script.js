//console.log("Hello");
var inputBox = document.getElementById("inputText")
//var str = "www.google.com";
var para = document.getElementById("paraText");


inputBox.addEventListener("input", function (e) {
    var pattern = /^www\.[\w]+\.(co|com|org|in)$/g;
    var currentInput = e.target.value;
    var valid = pattern.test(currentInput);

    if (valid) {
        para.innerHTML = "Congratulations! URL is valid!"
    } else {
        para.innerHTML = "Sorry! Please Enter a Valid URL"
    }
})
