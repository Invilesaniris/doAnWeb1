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

//remove advance search image
let advanced_search=document.getElementById("advanced_search");
let advanced_search_button=(advanced_search.getElementsByTagName("a"))[0];
let advanced_search_button_img=(advanced_search_button.getElementsByTagName("img"))[0];
/*advanced_search_button_img.setAttribute("src","assets/timkiemnangcao.png");
advanced_search_button_img.setAttribute("with", "50px");
advanced_search_button_img.setAttribute("height", "50px");*/
advanced_search_button_img.remove();

//add "tim kiem nang cao"
let advanced_search_top=document.createElement("div");
advanced_search_top.setAttribute("class","menu_top_element");
advanced_search_top.setAttribute("id","advancedSearch");
let advanced_search_link=document.createElement("a");
advanced_search_link.setAttribute("href","advanced_search.html")
advanced_search_top.appendChild(advanced_search_link);
advanced_search_link.innerText="Tìm kiếm nâng cao";
let menu_top=document.getElementById("menu_top");
menu_top.append(advanced_search_top);

//add onclick action to simple search "tim" button
inputSubmit.setAttribute("onclick","window.location.replace('search_result.html')");
simple_search_form.setAttribute("target","_blank");

//change submit to "tim" of advanced search + add onclick action to simple search "tim" button
let advanced_search_form=document.getElementById("item1");
let advanced_submit_button=advanced_search_form.lastElementChild;
advanced_submit_button.value="Tìm";
advanced_submit_button.setAttribute("onclick","window.location.replace('search_result.html')");
advanced_search_form.setAttribute("target","_blank");



















