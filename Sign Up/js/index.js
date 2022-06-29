let dropPendidikan =document.querySelector("#dropdownPendidikan");
let dd1 = document.querySelector(".dd-1");
let dd2 = document.querySelector(".dd-2");
let dd3 = document.querySelector(".dd-3");
let dd4 = document.querySelector(".dd-4");

function pendidikan1(){
    dropPendidikan.textContent = dd1.textContent ;
}
function pendidikan2(){
    dropPendidikan.textContent = dd2.textContent ;
}
function pendidikan3(){
    dropPendidikan.textContent = dd3.textContent ;
}
function pendidikan4(){
    dropPendidikan.textContent = dd4.textContent ;
}

function getSelectValue()
{
    var selectedValue = document.getElementById("dropdownMinat").value;
    document.getElementById("minat").disabled;
}
getSelectValue();