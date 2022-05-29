console.log("js ready");
$(document).ready(OnReady);

function OnReady() {
    console.log("JQ ready!");

    clickListener();
    
    // loads current tasks to DOM
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
        });
    $(document).on('click','.removeBtn', deleteTask);
 }

function getTasks(){

    $.ajax({
        type: "GET",
        url: "/tasks",   
    })
    .then((response) => {
        console.log(response);
        displayList(response);

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

 function displayList(response) {
     console.log('in displayList');
    $("#taskList").empty();

    for (let i = 0; i < response.length; i++) {
        let task = response[i];
        $("#taskList").append(`
        <tr data-id=${task.id}>
            <td>${task.name}</td>
            <td>${task.isComplete}</td>
            <td><button class="removeBtn">Remove</button></td>
            <td><button class="taskComplete">✅</button><td>
        </tr>
        `)
    }
  
 }

 function deleteTask() {
    let tr = $(this).parents("tr");
    let taskId = tr.data("id");
    console.log('in delete', taskId);

     
    
  }