function login() { 
    var accessPass = "1234"; 
    var accessUser = "Zombi3"; 
    var enteredUser = document.getElementById("user").value; 
    var enteredPass = document.getElementById("pass").value;

encryptCode(code) { 
var salt = "kJdFhGK";
var iv = "789012345678901234567890123456"; 
var key = "GHJKLmNpQRSTUVwX"; 
var encryptedCode = CryptoJS.AES.encrypt(code, key, { iv: iv, salt: salt }).toString();
return encryptedCode; }


var encryptedPass = encryptCode(accessPass);

if ((encryptedCode === enteredPass) && (enteredUser === accessUser) { 
window.location.href = "dev.html"; } 
else {
document.getElementById("error").textContent = "Invalid access code!"; } }