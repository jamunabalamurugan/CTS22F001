// alert('Hello World!!!');

// console.log('Inside script1.js')


function sample(){
    alert('Inside Sample Function');
}


function checkUsername(){
    var username = document.getElementById("txtName");
    var msgUN = document.getElementById("errUN");
    if(username.value == "")
    {
        username.style.borderColor = "red";
        msgUN.innerHTML = "User name cannot be empty";
        msgUN.classList.add("err");
        username.focus();
    }
    else {
        username.style.borderColor = "green";
        msgUN.classList.remove("err");
        msgUN.innerHTML = "";
    }
}
function checkPassword(){
    var password = document.getElementById("txtPass");
    var msgPass = document.getElementById("errPass");
    //msgUN.classList.add("basic");
    if(password.value == "")
    {
        password.style.borderColor = "red";
        msgPass.innerHTML = "Password cannot be empty";
        //password.focus();
        msgPass.classList.add("err");
    }
    else
    {
        password.style.borderColor = "green";
        msgPass.innerHTML = "";
        msgPass.classList.remove("err");
    }
    //alert("Welcome  "+username.value);  
}
function checkData(){
    checkUsername();
    checkPassword();
}
function changeSize(){
    var btn = document.getElementById("btnLogin");
    btn.classList.add("clsIn");
}
function changeBack(){
    var btn = document["frmLogin"]["btnLogin"];
    btn.classList.remove("clsIn");
}
//   function handleTextBox(){
//     var name = document.getElementById("txtName");
//     console.log(name.value);
// }
// function handleDiv(){
//     var container = document.getElementById("div1");
//     console.log("Div Content "+container.innerHTML);
// }