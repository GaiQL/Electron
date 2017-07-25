var center = document.getElementById('center');
var tfg = document.getElementById('tfg');
var tsg = document.getElementById('tsg');
var ttg = document.getElementById('ttg');
var num = 0;
var timer = null;
var c = 0;
//初始化
var t = innerHeight/2 - (center.offsetHeight/2);
var l = innerWidth/2 - (center.offsetWidth/2);
center.style.top = t + 'px';
center.style.left = l + 'px';
tfg.style.top = tsg.style.top = ttg.style.top = t + 'px';
tfg.style.left = tsg.style.left = ttg.style.left = l + 'px';
//for(var i=0;i<data[0].first.length;i++){
//	num = 360/data[0].first.length;
//	var div = document.createElement('div');
//	div.className = 'tfg';
//	div.style.backgroundImage = 'url('+data[0].first[i].img+')';
//	div.style.transform = 'rotate('+(num*i)+'deg)';
//	tfg.appendChild(div);
//	div.style.top = parseInt(getComputedStyle(center).top)-tfg.offsetTop +'px';
//	div.style.left = (center.offsetWidth-div.offsetWidth)/2+'px';
//}
//obj calssName n
produce(data[0].first,'tfg');
function produce(obj,Name){
	for(var i=0;i<obj.length;i++){
		num = 360/obj.length;
		var div = document.createElement('div');
		div.className = Name;
		div.style.backgroundImage = 'url('+obj.img+')';
		div.style.transform = 'rotate('+(num*i)+'deg)';
		tfg.appendChild(div);
		div.style.top = parseInt(getComputedStyle(center).top)-tfg.offsetTop+'px';
		div.style.left = (center.offsetWidth-div.offsetWidth)/2+'px';
	}
}
var divs_tfg = document.getElementsByClassName('tfg');
var timer = setTimeout(beginshow,1000)
var x = 0;
function beginshow(){
	var s = 124;
	var n = 0;
	var timer2 = setInterval(function(){
		s+=4;
		if(s >= (130+(center.offsetHeight/2))){

			clearInterval(timer2);
			s = (130+(center.offsetHeight/2));
			
		}
		divs_tfg[x].style.transformOrigin = '105px '+s+'px';
	},4)
	var timer3 = setInterval(function(){
		n-=4;
		if(n <= -130){
			clearInterval(timer3);
			n = -130;	
		}
		divs_tfg[x].style.top = n+'px';
	},4)
	var timer4 = setInterval(function(){
		if(s == (130+(center.offsetHeight/2)) && n == -130){
			clearInterval(timer4);
			x++;
			if(x<divs_tfg.length){
				beginshow();
			}else{
				timer = setInterval(function(){
					tfg.style.transform = 'rotate('+c+'deg)';
					c+=0.1;
				},20);
			}
		}
	},4)
}
