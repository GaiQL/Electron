var first = document.getElementById('first');
var layer = document.getElementById('layer');
var W = innerWidth;
var H = innerHeight;
var n = 0;
layer.style.width = W + 'px';
layer.style.height = H + 'px';
first.style.top = H/2-(first.offsetHeight/2)+'px';
first.style.left = W/2-(first.offsetWidth/2)+'px';
for(var i=0;i<data.length;i++){
	var div = document.createElement('div');
	div.className = 'singershow';
	div.style.background = 'url('+data[i].img+') no-repeat center';
	first.appendChild(div);
}
var timer = setInterval(function(){
	first.style.transform = 'translateZ(-500px) rotateY('+n+'deg)';
	n += 5;
},60)
