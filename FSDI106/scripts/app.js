function createToDo() {
    var txt = $("#txtToDo").val(); //get the text of the input field
    
    //create an li to display the ToDo
    var li = '<li>' + txt + '</li>';
    console.log("Sintax", li);

    $(".list").append(li);
    $("#txtToDo").val('');
    $("#txtToDo").focus();
    // JQuery
    // # = id
    // . = class
}

function init() {
    console.log("Page is ready!");
    
    //setup events
    $("#btnAdd").click(createToDo);
   
    $("#txtToDo").keypress(function(args){
        if(args.key == "Enter"){
            createToDo();
        }
    });
   
            
    //fetch initial data
}

//onload get called when the browser finished rendering HTML
//pass a function name to it
window.onload =init;
















/*
//console.log("Hello World");
// geet the button
// change the color

function createToDo() {
    var txt = document.getElementById("txtToDo");
}

function init() {
    console.log("Page is ready!");
    //try to manipulate DOM elements

    //setup events
        //get the button
        var btn = document.getElementById("btnAdd");
        //btn.onclick = function(){
            //console.log("Clicked.!");
        var txt = document.getElementById("txtToDo");
            console.log(txt.value);
        }

    //fetch initial data
}

//onload get called when the browser finished rendering HTML
//pass a function name to it
window.onload =init;*/