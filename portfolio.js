function loadfile(link,name){
    document.getElementById("imgdiv1").style.display="flex";
    document.getElementById("imgdiv1").style.backgroundImage=`url("images/${link}")`;
    document.getElementById("imgname").innerHTML=name;
}
function closebox(){
    document.getElementById("imgdiv1").style.display="none";
}
function openlink(link){
    window.open(link,"_blank");
}