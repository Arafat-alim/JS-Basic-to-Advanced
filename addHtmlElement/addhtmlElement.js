//console.log("HelloWorld")
//Add new Element 

var btnAdd = document.getElementById('addItem');
var list = document.getElementById('idList');
// var firstItem = document.getElementById('item1');
// var textNode = document.createTextNode('List Item 3');
// var newElement = newListElement.appendChild(textNode);

//Add element at the end of the list
// btnAdd.addEventListener('click', function(){
//     var newListElement = document.createElement('li')
//     var textNode = document.createTextNode('List Item ' + (list.childElementCount + 1) );
//     newListElement.appendChild(textNode);
//     newListElement.id = "Item "+ (list.childElementCount + 1); 
//     //alert("clicked");
//     list.appendChild(newListElement)
//     console.log(list.childElementCount);
// })
//Add element at the top of the list 
btnAdd.addEventListener('click', function(){
    var newListElement = document.createElement('li')
    var textNode = document.createTextNode('List Item ' + (list.childElementCount + 1) );
    newListElement.appendChild(textNode);
    newListElement.id = "Item "+ (list.childElementCount + 1); 
    //alert("clicked");
    var firstItem = list.firstChild; //it select firstElement dynamically. always jo bhi first banega wahi ko catch karega
    console.log(firstItem);
    // list.appendChild(newListElement) //add element at the end of the list
    list.insertBefore(newListElement, firstItem)
    console.log(list.childElementCount);
})

