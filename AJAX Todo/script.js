//console.log("WelcomeHome")

var btnAdd = document.getElementById("add-item"); // making my button responsive on click , here access var
var list = document.getElementById("addList");
var inputElement = document.getElementById('todoInput');
var updateList = document.getElementById("replace-item");
var deleteList = document.getElementById("delete-item");


var currentInput = ""; // empty string
inputElement.value = ""; //clearing my input box

//Enter CLicked Feature
inputElement.addEventListener('keyup', function(e){
    if(e.keyCode === 13){
        //alert("Enter Button is Pressed")
        addListItem(); //function calling
    }
})
//function for current input
inputElement.addEventListener('input', function(e){
    currentInput = (e.target.value);
})
function newListNode(){ //creating new list codes 
    var newElementList = document.createElement('li'); // create a new list by taking tag as a 'li'
    newElementList.id = "item- " + (list.childElementCount + 1); //adding dynamic id to my list 
    //var textNode = document.createTextNode("List Item " + (list.childElementCount)); //making list value
    var textNode = document.createTextNode(currentInput);
    newElementList.appendChild(textNode); //adding my list item at the end 

    return newElementList;
}

function addListItem(){
    if(currentInput !== null && currentInput !== undefined && currentInput !== ""){
        //alert("Welcome User")
            var newElementList = newListNode(); //calling func for creating a newlist
            list.appendChild(newElementList) //adding my newELementlist in my unoderedList
            //list count
            //newElementList= list.childElementCount + 1;
            //console.log(newElementList)
            inputElement.value = ''; //clear my input box 
            currentInput = ''; //clear my input value
        }else{
            alert("Please Enter Valid TODO Item ")
        }    
}

btnAdd.addEventListener('click', addListItem);

//updateFirstList
updateList.addEventListener('click', function(){
    var firstElement = list.firstElementChild; //old element access
    var newElementList = newListNode(); //new element

    //Replace Function accept two arguements - newlist and replace element
    list.replaceChild(newElementList, firstElement);  
    inputElement.value = "";
    currentInput = "";
    
})


//deleteFirstList
deleteList.addEventListener('click',function(){
    var firstElement = list.firstElementChild;
    list.removeChild(firstElement); 
})

//Adding Api Todo List
function getTODOList(){
    var http = new XMLHttpRequest(); // new instance

    http.onreadystatechange = function(){
        if(this.readyState === 4){
            // console.log("Response Received");
            // console.log(this.responseText); // array me ajyga JSON STRING
            if(this.status === 200){
                // console.log(JSON.parse(this.responseText)); //JSON STRING into JSON Object
                //workking with Http Request call
                var response = JSON.parse(this.responseText); // array se print karwao
                for(var i=0; i<response.length; i++){
                    //console.log(todoListDynamically(response[i].id, response[i].title));
                    list.appendChild(todoListDynamically(response[i].id, response[i].title)); //adding api values here
                }
                
            }else{
                console.log("Call Failed");
            }
            
        }
    }
    http.open('GET', 'https://jsonplaceholder.typicode.com/todos', true );
    http.send();
}
getTODOList(); //function calling 

//adding todolist Dynamically
function todoListDynamically(id, title){
    var newElementList = document.createElement('li'); // create a new list by taking tag as a 'li'
    // newElementList.id = "item- " + (list.childElementCount + 1); //adding dynamic id to my list 
    newElementList.id = id;
    //var textNode = document.createTextNode("List Item " + (list.childElementCount)); //making list value
    var textNode = document.createTextNode(title);
    newElementList.appendChild(textNode); //adding my list item at the end 

    return newElementList;
}
