var tnav=document.getElementsByClassName("tnav")[0];
var shouy=document.getElementsByClassName("shouy")[0];
var tnavlis=tnav.firstElementChild.children;
tnavlis[2].firstElementChild.setAttribute("class","tnavact");




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



var rul=document.getElementsByClassName("rul");
var num=document.getElementsByClassName("num");
var home=document.getElementsByClassName("home")[0];
var last=document.getElementsByClassName("last")[0];
num[0].setAttribute("id","numAtive");
for(var a=0;a<num.length;a++){
	num[a].index=a
	num[a].onclick=function(){
		var a=this.index;
		for(var b=0;b<num.length;b++){
			num[b].removeAttribute("id","numAtive");
			rul[b].style.display="none";
		}
		rul[a].style.display="block";
		this.setAttribute("id","numAtive");
	}
}
home.onclick=function(){
	num[0].setAttribute("id","numAtive");
	num[1].removeAttribute("id","numAtive");
	num[2].removeAttribute("id","numAtive");
	rul[0].style.display="block";
	rul[1].style.display="none";
	rul[2].style.display="none";
}
last.onclick=function(){
	num[2].setAttribute("id","numAtive");
	num[0].removeAttribute("id","numAtive");
	num[1].removeAttribute("id","numAtive");
	rul[2].style.display="block";
	rul[1].style.display="none";
	rul[0].style.display="none";
}




var bfoot=document.getElementsByClassName("bfoot")[0];
var lxwm=document.getElementsByClassName("lxwm")[0];
var lianx=document.getElementsByClassName("lianx")[0];
lianx.onclick=function(){
	bfoot.style.display="none";
	lxwm.style.display="block";
}