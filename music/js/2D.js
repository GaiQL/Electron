var center = document.getElementById('center');
var zz = document.getElementById('zz');
center.style.top = innerHeight/2 - (center.offsetHeight/2) + 'px';
center.style.left = innerWidth/2 - (center.offsetWidth/2) + 'px';
zz.style.top = innerHeight/2 - (center.offsetHeight/2) + 'px';
zz.style.left = innerWidth/2 - (center.offsetWidth/2) + 'px';
var imgs = document.getElementsByTagName('img');
var imgs1 = zz.getElementsByTagName('img');
var num = 0;
var n = 0; 
for(var i=0;i<imgs.length;i++){
	num = 360/imgs.length;
	imgs[i].style.top = parseInt(getComputedStyle(center).top)-zz.offsetTop +'px';
	imgs[i].style.left = parseInt(getComputedStyle(center).left)+((center.offsetWidth-imgs[i].offsetWidth)/2)-zz.offsetLeft+'px';
//	imgs[i].style.transformOrigin = (imgs[i].offsetWidth/2)+'px '+(130+(center.offsetHeight/2))+'px';
	imgs[i].style.transformOrigin = '105px 124px'
	imgs[i].style.transform = 'rotate('+(num*i)+'deg)';
	imgs[i].rotate = num*i;
}
var timer = setTimeout(fn,1000)
var x = 0;
function fn(){
	var s = 124;
	var n = 0;

	var timer2 = setInterval(function(){
		if(s > (130+(center.offsetHeight/2))){
			s = (130+(center.offsetHeight/2));
			clearInterval(timer2);
		}
		imgs[x].style.transformOrigin = '105px '+s+'px';
		s+=5;
	},20)
	var timer3 = setInterval(function(){
		if(n < -130){
			n = -130;
			clearInterval(timer3);
		}
		imgs[x].style.top = n+'px';
		n-=5;
	},20)
	var timer4 = setInterval(function(){
		if(s >= (130+(center.offsetHeight/2)) && n <= -130){
			clearInterval(timer4);
			x++;
			if(x<imgs.length){
				fn();
			}
		}
	},20)
//	move({
//		obj:imgs[x],
//		attrs:{transformOringin:254,top:parseInt(getComputedStyle(center).top)-130-zz.offsetTop},
//		duration:1000,
//		callBack:function(){
//				x++;
//				if(x<imgs.length){
//					fn();
//				}
//		}
//	})
}
//var timer = setInterval(function(){
//		zz.style.transform = 'rotate('+n+'deg)';
//	n++;
//},60)

/*根据传入角度去定位，自动修改XY的值*/
