var center = document.getElementById('center');
var tfg = document.getElementById('tfg');
var tsg = document.getElementById('tsg');
var ttg = document.getElementById('ttg');
var num = 0;
var timerf = null;
var timers = null;
var timert = null;
var c = 0;
//初始化
var t = innerHeight/2 - (center.offsetHeight/2);
var l = innerWidth/2 - (center.offsetWidth/2);
center.style.top = t + 'px';
center.style.left = l + 'px';
tfg.style.top = tsg.style.top = ttg.style.top = t + 'px';
tfg.style.left = tsg.style.left = ttg.style.left = l + 'px';
//obj calssName n
produce(data[0].first,'tfg',tfg,0);
function produce(obj,Name,parent,n){
	for(var i=0;i<obj.length;i++){
		num = 360/obj.length;
		var div = document.createElement('div');
		div.className = Name;
		div.style.backgroundImage = 'url('+obj[i].img+')';
		div.style.transform = 'rotate('+(num*i)+'deg)';
		parent.appendChild(div);
		div.style.top = parseInt(getComputedStyle(center).top)-tfg.offsetTop-n+'px';
		div.style.left = (center.offsetWidth-div.offsetWidth)/2+'px';
	}
}
var divs_tfg = document.getElementsByClassName('tfg');
var divs_tsg = document.getElementsByClassName('tsg');
var divs_ttg = document.getElementsByClassName('ttg');
setTimeout(function(){
	beginshow({
		bgTfo:124,
		bgTop:0,
		target:120
	});
},1000)
var x = 0;
//bgTfo,bgTop,target,callBack,obj,come
//124,0,120
function beginshow(show){
	var s = show.bgTfo;
	var n = show.bgTop;
	var bgTop = show.bgTop;
	var timer2 = setInterval(function(){
		if(bgTop == 0){
			s+=4;
		}else{
			s++;
		}
		if(s >= (show.target+(center.offsetHeight/2))){
			clearInterval(timer2);
			s = (show.target+(center.offsetHeight/2));		
		}
		if(bgTop == 0){
			divs_tfg[x].style.transformOrigin = '105px '+s+'px';	
		}else{
			for(var i=0;i<show.obj.length;i++){
				show.come[i].style.transformOrigin = '105px '+s+'px';	
			}
		}
	},4)
	var timer3 = setInterval(function(){
		if(bgTop == 0){
			n-=4;	
		}else{
			n--;
		}
		if(n <= -show.target){
			clearInterval(timer3);
			n = -show.target;	
		}
		if(bgTop == 0){
			divs_tfg[x].style.top = n+'px';	
		}else{
			for(var i=0;i<show.obj.length;i++){
				show.come[i].style.top = n+'px';	
			}
		}
	},4)
	var timer4 = setInterval(function(){
		if(s == (show.target+(center.offsetHeight/2)) && n == -show.target){
			clearInterval(timer4);
			x++;
			if(x<divs_tfg.length){
				beginshow({
					bgTfo:124,
					bgTop:0,
					target:120,
					callBack:function(){
						timerf = setInterval(function(){
							tfg.style.transform = 'rotate('+c+'deg)';
							c+=0.1;
						},50);
						produce(data[0].second,'tsg',tsg,115);
						setTimeout(function(){
							beginshow({
								bgTfo:262,
								bgTop:-115,
								target:220,
								obj:data[0].second,
								come:divs_tsg,
								callBack:function(){
									var c = 0;
									timers = setInterval(function(){
										tsg.style.transform = 'rotate('+c+'deg)';
										c-=0.1;
									},50);
									produce(data[0].third,'ttg',ttg,220);
									setTimeout(function(){
										beginshow({
											bgTfo:362,
											bgTop:-220,
											target:320,
											obj:data[0].third,
											come:divs_ttg,
											callBack:function(){
												var c = 0;
												timert = setInterval(function(){
													ttg.style.transform = 'rotate('+c+'deg)';
													c+=0.1;
												},50);
											}
										})
									},500)
								}
							});
						},500)
					}
				})
			}else{
				show.callBack();		
			}
		}
	},4)
}
