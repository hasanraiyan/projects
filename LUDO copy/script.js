let header = document.querySelector('header');
let button = document.querySelector('button');

function play() {
    // var header = document.getElementById("header");
    if (header) {
        header.style.height = "0px";
        button.style.display = "none";
        console.log("hi");
    } else {
        console.error("Header element not found.");
    }   
}
