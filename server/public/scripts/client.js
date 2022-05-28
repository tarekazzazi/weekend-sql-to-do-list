console.log("js ready");
$(document).ready(OnReady);

function OnReady() {
    console.log("JQ ready!");

    getChores();
}

function getChores(){

    console.log('In get chores');

    $.ajax({
        type: "GET",
        url: "/to_do_list",   
    })
    .then((response) => {
        console.log(response);

    })
    .catch((err) => {
        console.log('ahh error!',err);
    });
}
