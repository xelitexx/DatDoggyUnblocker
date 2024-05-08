function login() {
var accessPass = "MeteorNetwork";
var accessUser = "welovemeteors";
var enteredUser = document.getElementById("user").value;
var enteredPass = document.getElementById("pass").value;

if ((enteredPass === accessPass) && (enteredUser === accessUser)) {
// Redirect to the protected page
window.location.href = "dev.html";
} else {
// Display an error message if the code is incorrect
document.getElementById("error").textContent = "Invalid access code!";
}
}
