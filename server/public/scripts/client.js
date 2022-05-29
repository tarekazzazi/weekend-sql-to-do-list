console.log("js ready");
$(document).ready(OnReady);

function OnReady() {
    console.log("JQ ready!");

    clickListener();

    // loads current tasks to DOM
    getTasks();

}

function clickListener() {
    console.log('In click listener');
    $('#addTaskBtn').on('click', function () {
        console.log("in addTaskBtn");
        // get user inputs put in a object
        let taskToAdd = {
            name: $('#taskName').val(),
            isComplete: $('#isTaskComplete').val()
        };
        // call that object
        // console.log tests
        console.log('New task to be added is', taskToAdd);
        saveNewTask(taskToAdd);
    });
    $(document).on('click', '.removeBtn', deleteTask);
    $(document).on('click', '.taskCompleteBtn', completeTask);

}


function getTasks() {

    $.ajax({
        type: "GET",
        url: "/tasks",
    })
        .then((response) => {
            console.log('response is', response);
            $("#taskList").empty();

            for (task of response) {
                $("#taskList").append(`
    
                    <tr id="id" data-id=${task.id} data-task-complete ${task.isComplete}>
                        <td>${task.name}</td>
                        <td>${task.isComplete}</td>
                        <td><button class="removeBtn">Remove</button></td>
                        <td><button class="taskCompleteBtn" type="checkbox">✅</button><td>  
                    </tr>
            `)
            }

        })
        .catch((err) => {
            console.log('ahh error!', err);
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
            console.log("Error in POST on client side", err);
        });
}

function deleteTask() {
    let tr = $(this).parents("tr");
    let taskId = tr.data("id");
    console.log('in delete', taskId);

    $.ajax({
        method: "DELETE",
        url: `/tasks/${taskId}`,
    })
        .then(() => {
            console.log('delete success');
            getTasks();
        })
        .catch((err) => {
            alert("Failed to delete", err)
        })
}

function completeTask() {
    let tr = $(this).parents("tr");
    let taskId = tr.data("id");
    let Complete = $(this).parents("tr").data("task-complete");

    //$(this).parents("tr").css('background-color','green');
  
    console.log('in completeTask', Complete);

    const updatedTaskStatus = {
        Complete: true,
    };

    $.ajax({
        method: "PUT",
        url: `/tasks/${taskId}`,
        data: updatedTaskStatus
    })
        .then(() => {

            console.log('Put request working');
            if (task.isComplete === true) {
                $(this).parents("tr").css('color','green');
            }else{
                $(this).parents("tr").css('color','red');
            }
            // checklist change color still not working
            

        })
        .catch((err) => {
            console.log('Uh ohh there is a err', err);
        })

}


