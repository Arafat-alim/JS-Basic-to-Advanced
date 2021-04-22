// console.log("Hello");

var para = document.getElementById('mainPara');
// console.log(para.classList);
para.classList.add('big');

//Automatically
// setTimeout(function(){
//     para.classList.remove('big');
// },1500)

//button click
var btn = document.getElementById('clickBtn')
// console.log(btn)
btn.addEventListener('click', function(){
    para.classList.remove('big')
})