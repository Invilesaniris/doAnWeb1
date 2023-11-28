/*let key='1';

if(sessionStorage.getItem("key")===null){
    console.log("key is not initilazed, now key is created");
    sessionStorage.setItem("key",key);
}
else{
    console.log("use the created key");
}

key=sessionStorage.getItem("key");
console.log(key);
*/


function setisLoginTrue(currentTag){
    sessionStorage.setItem("loginState", "true");
    console.log("return to index");
    alert("Đăng nhập thành công");
    window.location="index.html"; 
}
function setisLoginFalse(currentTag){
    sessionStorage.setItem("loginState", "false");;
    alert("Đăng xuất thành công");
    window.location="index.html"; 
}

let singout=document.getElementById("singout");
let login=document.getElementById("login");
let isLogin=sessionStorage.getItem("loginState");
console.log("isLogin:"+isLogin);
if(isLogin===null){
    isLogin="false";
    sessionStorage.setItem("loginState", isLogin);
}

if(isLogin==="true"){
    console.log("login is hidden");
    login.style.display="none";
    singout.style.display="inline";
}
else{
    console.log("signout is hidden");
    login.style.display="inline";
    singout.style.display="none";
}

//change the submit to tim in simple search
let simple_search=document.getElementById("simple_search");
let simple_search_form=(simple_search.getElementsByTagName("form"))[0];
let inputSubmit=(simple_search_form.getElementsByTagName("input"))[1];
inputSubmit.value="Tìm";

//change advance search image to "tim kiem nang cao"
let advanced_search=document.getElementById("advanced_search");
let advanced_search_button=(advanced_search.getElementsByTagName("a"))[0];
let advanced_search_button_img=(advanced_search_button.getElementsByTagName("img"))[0];
console.log(advanced_search_button_img);
