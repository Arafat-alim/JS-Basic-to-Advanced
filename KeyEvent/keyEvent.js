document.body.addEventListener('keydown', function(e){
    var keyCode = e.keyCode;
    if(keyCode === 81){
        console.log(keyCode + ' KeyDown was pressed')
    }
})
document.body.addEventListener('keyup', function(e){
    var keyCode = e.keyCode;
    if(keyCode === 81){
        console.log(keyCode + ' KeyUp was pressed')
    }
})
document.body.addEventListener('keypress', function(e){
    var keyCode = e.keyCode;
    if(keyCode === 81){
        console.log(keyCode + ' KeyPress was pressed')
    }
})