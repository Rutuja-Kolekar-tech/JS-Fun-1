let fname = document.getElementById("fname");
let email = document.getElementById("mail");
let btn = document.getElementById("btn");
let resetbtn = document.getElementById("resetbtn");


let fNameOutput = document.getElementById("fNameOutput");
let emailOutput = document.getElementById("emailOutput");


btn.addEventListener("click", function () {
    
    fNameOutput.innerHTML = fname.value;
    emailOutput.innerHTML = email.value;

})
resetbtn.addEventListener("click", function () {
    fNameOutput.innerHTML = "";
    emailOutput.innerHTML = "";
})