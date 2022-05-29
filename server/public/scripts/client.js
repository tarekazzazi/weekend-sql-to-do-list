console.log("js ready");
$(document).ready(OnReady);

function OnReady() {
    console.log("JQ ready!");

    clickListener();

    getTasks();
}

 function clickListener(){
          console.log('In click listener');
        $('#addTaskBtn').on('click', function (){
            console.log("in addTaskBtn");
            // get user inputs put in a object
            let taskToAdd = {
                name: $('#taskName').val(),
                isComplete: $('#isTaskComplete').val()
            };
            // call that object
            // console.log tests
            console.log('New task to be added is',taskToAdd);
            saveNewTask(taskToAdd);
        })
 }

function getTasks(){

    $.ajax({
        type: "GET",
        url: "/tasks",   
    })
    .then((response) => {
        console.log(response);

    })
    .catch((err) => {
        console.log('ahh error!',err);
    });
}

 function saveNewTask(newTask) {
    // POST
    $.ajax({
        type: "POST",
        url: "/tasks",
        data: newTask,
    })
    .then((response) => {
        console.log("POST from server:", response);
        getTasks();
    })
    .catch((err) => {
        console.log("Error in POST on client side",err);
    });
 }