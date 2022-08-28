var tnav=document.getElementsByClassName("tnav")[0];
var tnavlis=tnav.firstElementChild.children;
tnavlis[0].firstElementChild.setAttribute("class","tnavact");



var newd=document.getElementsByClassName("new")[0];
var liActive=newd.lastElementChild.children;
liActive[0].setAttribute("class","liActive");
for(var a=0;a<liActive.length;a++){
	liActive[a].onmouseover=function(){
		   for(var b=0;b<liActive.length;b++){
		   liActive[b].removeAttribute("class","liActive")
		}
     this.setAttribute("class","liActive");
	}
}

var bfoot=document.getElementsByClassName("bfoot")[0];
var lxwm=document.getElementsByClassName("lxwm")[0];
var lianx=document.getElementsByClassName("lianx")[0];
lianx.onclick=function(){
	bfoot.style.display="none";
	lxwm.style.display="block";
}