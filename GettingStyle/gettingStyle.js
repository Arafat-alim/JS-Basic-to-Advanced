// console.log("Hello");

var paragraph = document.getElementById("para");
var size = window.getComputedStyle(paragraph).fontSize;

//console.log(size);
//console.log(size.substr(0, (size.length - 2)));
size = parseInt(size.substr(0, (size.length - 2)));

// console.log(size);

//Font-size
//increasing
var btnInc = document.getElementById('incFont');

btnInc.onclick = function(){
    size += 10;
    paragraph.style.fontSize = size + "px";
}
//decreasing
var btnDec = document.getElementById("decFont");

btnDec.onclick = function(){
    size -= 10;
    paragraph.style.fontSize = size + "px"; // 50px concatenate
}