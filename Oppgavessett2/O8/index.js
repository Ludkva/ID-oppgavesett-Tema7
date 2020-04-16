const dettevarikkeennott = document.querySelector("#changer");

function change() {

    document.body.style.fontStyle = dettevarikkeennott.value;
    document.body.style.fontWeight = dettevarikkeennott.value;



}

dettevarikkeennott.onchange = change;