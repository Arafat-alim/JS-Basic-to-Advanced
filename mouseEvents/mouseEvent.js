// console.log("HelloWorld")
var btn = document.getElementById('button');
btn.addEventListener('mousedown', function(){
    console.log("Mouse Down Events")
})

btn.addEventListener('mouseup', function(){
    console.log("Mouse Up Event");
})
btn.addEventListener('click', function(){
    console.log("Click Event");
})
btn.addEventListener('dblclick', function(){
    console.log("Double Click Event")
})

// ____________________________

var over = document.getElementById('mouseover');
var overCount = 0;
over.addEventListener('mouseover', function(){
    // console.log("Mouse Over Event")
    var countELement = document.querySelector('#mouseover > p') // updating p tag
    overCount += 1;
    countELement.innerHTML = overCount;
})
// _________________

var enter = document.getElementById('mouseenter');
var enterCount = 0;
enter.addEventListener('mouseenter',function(){
    var enterElement = document.querySelector('#mouseenter > p'); //updating p tag
    enterCount += 1;
    enterElement.innerHTML = enterCount;
    // console.log("Mouse Enter Event")
})

//__________________

var move = document.getElementById('mousemove');
var moveCount = 0;
mousemove.addEventListener('mousemove', function(){
    var moveElement = document.querySelector('#mousemove > p')
    moveCount += 1;
    moveElement.innerHTML = moveCount;
    //console.log("Mouse Move Event")
})

