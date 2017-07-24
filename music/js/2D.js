var center = document.getElementById('center');
var zz = document.getElementById('zz');
center.style.top = innerHeight/2 - (center.offsetHeight/2) + 'px';
center.style.left = innerWidth/2 - (center.offsetWidth/2) + 'px';
var imgs = document.getElementsByTagName('img');
var imgs1 = zz.getElementsByTagName('img');
var num = 0;
var n =0; 
for(var i=0;i<imgs.length;i++){
	num = 360/imgs.length;
	imgs[i].style.top = parseInt(getComputedStyle(center).top)-130 +'px';
	imgs[i].style.left = parseInt(getComputedStyle(center).left)+((center.offsetWidth-imgs[i].offsetWidth)/2)+'px';
	imgs[i].style.transformOrigin = (imgs[i].offsetWidth/2)+'px '+(130+(center.offsetHeight/2))+'px';
	imgs[i].style.transform = 'rotate('+(num*i)+'deg)';
	imgs[i].rotate = num*i;
}
var timer = setInterval(function(){
	for(var i=0;i<imgs.length;i++){
		imgs[i].style.transform = 'rotate('+imgs[i].rotate+n+'deg)';
	}
	n++;
},20)
