var procont=document.getElementById("prs")
var search=document.getElementById("serch")
var prolist=procont.querySelectorAll("div")







search.addEventListener("keyup",function(){

     var enteredValue = event.target.value.toUpperCase()

     for(count=0;count<prolist.length;count=count+1)
{
    var productname = prolist [count].querySelector("p").textContent


if(productname.toUpperCase().indexOf(enteredValue)<0)
{


    prolist[count].style.display="none"
}
else{

    prolist[count].style.display="block"
}








}



})