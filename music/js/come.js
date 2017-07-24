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
	n ++;
},60)


//  先用css和HTML实现效果，中间有一个原形拼接的球状音响，周围歌手照片旋转展示，
//	随机播放的时候,整个球形Y轴翻转一圈,所有照片回到固定状态,一个一个向上翻动,最后顺时逆时顺时旋转,中间球形播放
//	数据与JS实现功能再用JS实现