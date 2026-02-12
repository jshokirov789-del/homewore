
let erorr = document.getElementById("eror");

erorr.innerHTML = ""

erorr.style.color = "orange";

erorr.style.fontSize = "30px";

erorr.style.fontFamily = "Arial, sans-serif";

erorr.style.textAlign = "center";

erorr.style.marginTop = "50px";

erorr.style.textShadow = "2px 2px 4px #000000"; 

erorr.style.justifyContent = "center";




let name = prompt("Ismingizni kiriting: ");

if (name == "") {
    erorr.innerHTML = "Please enter your name.";
}
 else if (name == null) {
    erorr.innerHTML = "Please enter your name.";
}
 else {
    erorr.innerHTML = "SALOM, " + name + "!";
}