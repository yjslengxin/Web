var tnav=document.getElementsByClassName("tnav")[0];
var shouy=document.getElementsByClassName("shouy")[0];
var tnavlis=tnav.firstElementChild.children;
tnavlis[4].firstElementChild.setAttribute("class","tnavact");



var bnav=document.getElementsByClassName("bnav")[0];
var biaot=document.getElementsByClassName("biaot")[0];
var rightb=document.getElementsByClassName("rightb");
var bnavlis=bnav.firstElementChild.children;
console.log(bnavlis)
bnavlis[0].setAttribute("class","bnavact");
for(var k=0;k<bnavlis.length;k++){
	bnavlis[k].index=k;//获取索引
	bnavlis[k].onclick=function(){
	      var m=this.index;//获取当前操作对象的下标并命名
		   for(var j=0;j<bnavlis.length;j++){
		   	bnavlis[j].removeAttribute("class","bnavact");
		   	 rightb[j].style.display="none";
		   	 console.log(rightb[j])
		   }
        this.setAttribute("class","bnavact");
        rightb[m].style.display="block";
        console.log(rightb[m])
	}
}  



var end=document.getElementsByClassName("end");
var start=document.getElementsByClassName("start");
for(var a=0;a<start.length;a++){
	start[a].index=a;
	start[a].onclick=function(){
		var a=this.index;
		for(var b=0;b<start.length;b++){
			start[b].removeAttribute("id","bliAtive");
			end[b].style.display="none";
		}
		end[a].style.display="block";
		this.setAttribute("id","bliAtive");
	}
}




var bfoot=document.getElementsByClassName("bfoot")[0];
var lxwm=document.getElementsByClassName("lxwm")[0];
var lianx=document.getElementsByClassName("lianx")[0];
lianx.onclick=function(){
	bfoot.style.display="none";
	lxwm.style.display="block";
}