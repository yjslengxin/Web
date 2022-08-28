var tnav=document.getElementsByClassName("tnav")[0];
var tnavlis=tnav.firstElementChild.children;
for(var a=0;a<tnavlis.length;a++){
	tnavlis[a].onclick=function(){
		   for(var b=0;b<tnavlis.length;b++){
		   	 tnavlis[b].firstElementChild.removeAttribute("class","tnavact");
		   }
        this.firstElementChild.setAttribute("class","tnavact");
	}
} 


var lunb=document.getElementById("lunb");
var but=lunb.firstElementChild.children;
var timer;
var i=0;
but[0].	style.backgroundColor="#1c7d78";
function run(){
	timer=setInterval(
		function(){
			but[i].style.backgroundColor="#fff";
			i++;
			if(i>=but.length){
				i=0;
			}
			lunb.style.backgroundImage="url(images/lunb"+i+".png)";
			but[i].	style.backgroundColor="#1c7d78";
		}
	,2000);
}
run();