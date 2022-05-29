console.log("js ready");
$(document).ready(OnReady);

function OnReady() {
    console.log("JQ ready!");

    getTasks();
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
