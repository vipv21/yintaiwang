window.onload=function(){
// 顶部区开始
var topaas=$(".topaa");
var topleft=$(".bb");
	for (var i = 0; i < topleft.length; i++) {
		var lis=$("div",topleft[i]);
		var height=lis.length*1;
		topleft[i].height=height;
	};
for (var i = 0; i < topaas.length; i++) {//遍历lists的长度
		topaas[i].index=i;
	hover(topaas[i],function(){	//鼠标经过执行
		topleft[this.index].style.display="block";//设置下拉导航显示
		animate(topleft[this.index],{height:topleft[this.index].height})//动画显示下拉导航
	},function(){
		topleft[this.index].style.display="none";
		topleft[this.index].style.height="0";
		})
}
// 顶部区结束


// banner图区开始
	var banner_btn=document.getElementsByClassName("dh-btn")
	var banner_img=document.getElementsByClassName("banner-box2")
	var banner_box=document.getElementsByClassName("banner-bigbox")[0]
	var banner_color=["#008ACB","#D2EBF2","#F4C900","#1A0F0B"]
	//改变背景颜色
	for (var i = 0; i < banner_btn.length; i++) {
		banner_btn[i].index=i;
		num=this.index;
		banner_btn[i].onmouseover=function(){
			for (var i = 0; i < banner_btn.length; i++) {
				banner_btn[i].style.backgroundColor="#000";
				banner_img[i].style.zIndex="1";
			};
			banner_btn[this.index].style.backgroundColor="red";
			banner_img[this.index].style.zIndex="2";
			banner_box.style.backgroundColor=banner_color[this.index]
		}
	}

//在下面实现自动间隔3s轮播
lunbo=setInterval(move,2000);//move为回调函数
	var num=0;
	function move(){
		num++;
		if (num==banner_btn.length) {
			num=0;
			}
		for (var i = 0; i < banner_btn.length; i++) {
				banner_btn[i].style.backgroundColor="#000";
				banner_img[i].style.zIndex="1";
			}
			banner_btn[num].style.backgroundColor="red";
			banner_img[num].style.zIndex="2";
			banner_box.style.backgroundColor=banner_color[num];
}
var dhleftbtn=getClass("dh-leftbtn")[0];
var dhrightbtn=getClass("dh-rightbtn")[0];
var bannerbox2=getClass("banner-box")[0];


	bannerbox2.onmouseover=function(){
		clearInterval(lunbo)
			dhleftbtn.style.display="block";
			dhrightbtn.style.display="block"
	}
	bannerbox2.onmouseout=function(){
		lunbo=setInterval(move,2000)
			dhleftbtn.style.display=""
			dhrightbtn.style.display=""
	}

//左右按钮控制	
// var btnbtnaa=getClass("btnbtnaa")
var n=banner_btn.length;
dhleftbtn.onclick=function(){
	// console.log(dhleftbtn)
	n--;
	if (n==-1) {
		n=banner_btn.length-1;
	};
	for (var i = 0; i < banner_img.length; i++) {
		banner_img[i].style.zIndex="1";
		banner_btn[i].style.backgroundColor="#000";
	};
	banner_img[n].style.zIndex="2";
	banner_btn[n].style.backgroundColor="red";
}
dhrightbtn.onclick=function(){
	move();
}


// banner图区开始
// banner图左侧导航开始
var bannerbj=document.getElementsByClassName("banner-left-wzbox")
var bannerwz=document.getElementsByClassName("banner-left-one")
for (var i = 0; i < bannerbj.length; i++) {
		bannerbj[i].index=i;
		bannerbj[i].onmouseover=function(){
		bannerwz[this.index].style.backgroundColor="#E5004F"
	}
		bannerbj[i].onmouseout=function(){
		bannerwz[this.index].style.backgroundColor=""
		}
}
var bannerbj1=document.getElementsByClassName("banner-left2-wzbox")
var bannerwz1=document.getElementsByClassName("banner-left2-one")
for (var i = 0; i < bannerbj1.length; i++) {
		bannerbj1[i].index=i;
		bannerbj1[i].onmouseover=function(){
		bannerwz1[this.index].style.backgroundColor="#E5004F"
	}
		bannerbj1[i].onmouseout=function(){
		bannerwz1[this.index].style.backgroundColor=""
		}
}

//显示下拉菜单
	var lists=$(".wzaa");
	var nav2s=$(".ejaaa");
// console.log(lists.length)
	for (var i = 0; i < nav2s.length; i++) {
		var lis=$("div",nav2s[i]);
		var height=434;
		nav2s[i].height=height;
	};
for (var i = 0; i < lists.length; i++) {//遍历lists的长度
		lists[i].index=i;
	hover(lists[i],function(){	//鼠标经过执行
		nav2s[this.index].style.display="block";//设置下拉导航显示
		animate(nav2s[this.index],{height:nav2s[this.index].height})//动画显示下拉导航
	},function(){
		nav2s[this.index].style.display="none";
		nav2s[this.index].style.height="0";
		})
}

// banner图左侧导航结束



//banner中间按钮开始
	// 	var box1=getClass("banner-box2");
	// 	var leftbtns=getClass("dh-leftbtn")[0];
	// 	var rightbtns=getClass("dh-rightbtn")[0];
	// 	var bigbtn=getClass("bigbtn")[0]
	// 	var circles=bigbtn.getElementsByClassName("bigbtns");
	// 	var inner=getClass("dh-btnbtn")[0]
	// 	var boxs=getClass("bigphoto")[0]
	// box1.onmouseover=function(){
	// 		animate(leftbtns,{left:0},200)
	//  		animate(rightbtns,{right:0},200)
	// 	}
	// box1.onmouseout=function(){
	// 		animate(leftbtns,{left:-30},200)
	// 		animate(rightbtns,{right:-30},200)
	// }//鼠标移入移除箭头让箭头颜色改变
	// leftbtns.onmouseover=function(){
	// 	this.style.backgroundPosition="left bottom"//背景图位置向左边 底部
	// }
	// leftbtns.onmouseout=function(){  //左边按钮鼠标移出函数
	// 	 this.style.backgroundPosition="left top"//背景图位置左边 顶部
	// }
	// rightbtns.onmouseover=function(){
	// 	this.style.backgroundPosition="right bottom"
	// }
	// rightbtns.onmouseout=function(){
	// 	 this.style.backgroundPosition="right top"
	// }
	// // 箭头和圆圈的点击效果
	// rightbtns.onclick=moveright;
	// leftbtns.onclick=moveleft;
	// circles[0].onclick=moveleft;
	// circles[1].onclick=moveright;
	// 	function moveright(){
	// 		animate(boxs,{marginLeft:-390})   //将图片向左移动
	// 		circles[0].style.background="#555"
	// 		circles[1].style.background="#E5004F"
	// }
	// function moveleft(){
	// 		animate(boxs,{marginRight:0})	//将图片向右移动
	// 		circles[1].style.background="#555";
	// 		circles[0].style.background="#E5004F"  //改变背景颜色为红
	// }
	// function moveright(){
	// 		animate(boxs,{marginLeft:-390})   //将图片向左移动
	// 		circles[0].style.background="#555"
	// 		circles[1].style.background="#E5004F"
	// }
	// function moveleft(){
	// 		animate(boxs,{marginLeft:0})	//将图片向右移动
	// 		circles[1].style.background="#555";
	// 		circles[0].style.background="#E5004F"  //改变背景颜色为红
	// }






// banner中间按钮结束
// 中间1区开始
var zj1leftwz=document.getElementsByClassName("zj1-left-two1")
var ct=document.getElementsByClassName("zj1-left-three2")
// var hjt=document.getElementsByClassName("zj1-left-three3")
var zj1_bj=document.getElementsByClassName("zj1-left-fourbox")
//改变背景颜色
for (var i = 0; i < zj1leftwz.length; i++) {
	zj1leftwz[i].index=i;
	zj1leftwz[i].onmouseover=function(){
		// num=this.index;
		for (var i = 0; i < zj1leftwz.length; i++) {
			zj1leftwz[i].style.fontWeight=""
			ct[i].style.backgroundColor="#000"
			zj1_bj[i].style.zIndex="0"
			// hjt[i].style.opacity="0"
		}
		zj1leftwz[this.index].style.fontWeight="bold"
		ct[this.index].style.backgroundColor="#E5004F"
		zj1_bj[this.index].style.zIndex="1"
		// hjt[this.index].style.opacity="1"
	}
}
// 中间1区结束

// 中间3区开始
var zj3rghtwz=document.getElementsByClassName("zj3-right-twowz")
var zj3ct=document.getElementsByClassName("zj3-right-three2")
var zj3_bj=document.getElementsByClassName("zj3-right-fourbox")
// var hjt=document.getElementsByClassName("zj1-left-three3")
//改变背景颜色
for (var i = 0; i < zj3rghtwz.length; i++) {
	zj3rghtwz[i].index=i;
	zj3rghtwz[i].onmouseover=function(){
		// num=this.index;
		for (var i = 0; i < zj3rghtwz.length; i++) {
			zj3rghtwz[i].style.fontWeight=""
			zj3ct[i].style.backgroundColor="#000"
			zj3_bj[i].style.zIndex="0"
			// hjt[i].style.opacity="0"
		}
		zj3rghtwz[this.index].style.fontWeight="bold"
		zj3ct[this.index].style.backgroundColor="#E5004F"
		zj3_bj[this.index].style.zIndex="1"
		// hjt[this.index].style.opacity="1"
	}
}
// 中间3区结束

// 中间5区开始
	var box=getClass("fashiondatu")[0];
	var boxs=getClass("bigphoto")[0];
	var leftbtnss=getClass("leftbtn")[0];
	var rightbtn=getClass("rightbtn")[0];
	var zj5bigbtn=getClass("bigbtn")[0];
	var inner=getClass("btnbtn");
// console.log(zj5bigbtn)
	var circless=getClass("bigbtns"); //左 按钮
	// var circless2=getClass("bigbtns1");//右 按钮
	

// for (var i = 0; i < boxs.length; i++) {
// 	dianbo(box[i],boxs[i],leftbtnss[i],rightbtn[i],inner[i],circless1[i],circless2[i])
// };

// function dianbo(box,boxs,leftbtnss,rightbtn,inner,circless1,circless2){//进行封装调用


	// console.log(circless)
	var flag=true;
box.onmouseover=function(){
		animate(leftbtnss,{left:0},200)
 		animate(rightbtn,{right:0},200)
	}
box.onmouseout=function(){
		animate(leftbtnss,{left:-30},200)
		animate(rightbtn,{right:-30},200)
}//鼠标移入移除箭头让箭头颜色改变
leftbtnss.onmouseover=function(){
	this.style.backgroundPosition="left bottom"//背景图位置向左边 底部
}
rightbtn.onmouseover=function(){
	// if (flag) {
	this.style.backgroundPosition="right bottom"
	// };
};
leftbtnss.onmouseout=function(){  //左边按钮鼠标移出函数
	 this.style.backgroundPosition="left top"	//背景图位置左边 顶部
}
rightbtn.onmouseout=function(){
	 this.style.backgroundPosition="right top"
}
// 箭头和圆圈的点击效果
rightbtn.onclick=moveright;
leftbtnss.onclick=moveleft;
circless[0].onclick=moveleft;
circless[1].onclick=moveright;
	function moveright(){
		// flag=false;
		animate(boxs,{marginLeft:-390})   //将图片向左移动
		circless[0].style.background="#555"
		circless[1].style.background="#E5004F"
}
	function moveleft(){
		// flag=true;
		animate(boxs,{marginRight:0})	//将图片向右移动
		circless[1].style.background="#555";
		circless[0].style.background="#E5004F"  //改变背景颜色为红
}
function moveright(){
		animate(boxs,{marginLeft:-390})   //将图片向左移动
		circless[0].style.background="#555"
		circless[1].style.background="#E5004F"
}
function moveleft(){
		animate(boxs,{marginLeft:0})	//将图片向右移动
		circless[1].style.background="#555";
		circless[0].style.background="#E5004F"  //改变背景颜色为红
}
// 
	
// }


// 中间5区结束

// 五区左侧小轮播效果   
	var zj5three2=getClass("zj5-three-2");
	var zj5threeleft=getClass("zj5-three-zjleftbtn");
	var zj5threeright=getClass("zj5-three-zjrightbtn");
function lunbo2(zj5three2,zj5threeleft,zj5threeright){//通过封装函数多次调用
		zj5threeright.onclick=function(){
			animate(zj5three2,{marginLeft:-139},1000,function(){
				var first=getFirst(this);
				this.appendChild(first)
				this.style.marginLeft="20px";
			})
		}
		zj5threeleft.onclick=function(){
			var last=getLast(zj5three2);
			var first=getFirst(zj5three2);
			zj5three2.insertBefore(last,first)
			zj5three2.style.marginLeft="-159px"
			animate(zj5three2,{marginLeft:20},1000)
		}
	}
for (var i = 0; i < zj5threeleft.length; i++) {//调用上面的函数 进行多个使用
	lunbo2(zj5three2[i],zj5threeleft[i],zj5threeright[i])
};
// 五区左侧小轮播效果 结束


//五区图片出现动画边框开始
function border(obj,time){
		obj.style.position="relative";
		var div1=document.createElement("div");
		var div2=document.createElement("div");
		var div3=document.createElement("div");
		var div4=document.createElement("div");
	div1.style.cssText="position:absolute;background:#000;left:-1px;top:-1px;height:1px"
	div2.style.cssText="position:absolute;background:#000;left:-1px;top:-1px;width:1px"
	div3.style.cssText="position:absolute;background:#000;right:-1px;bottom:-1px;height:1px"
	div4.style.cssText="position:absolute;background:#000;right:-1px;bottom:-1px;width:1px"
		obj.appendChild(div1)
		obj.appendChild(div2)
		obj.appendChild(div3)
		obj.appendChild(div4)
	var width=parseInt(getStyle(obj,"width"))+2;
	var height=parseInt(getStyle(obj,"height"))+2;
	obj.onmouseover=function(){
		animate(div1,{width:width},time)
		animate(div2,{height:height},time)
		animate(div3,{width:width},time)
		animate(div4,{height:height},time)
	}
	obj.onmouseout=function(){
		animate(div1,{width,width:0},time)
		animate(div2,{height,height:0},time)
		animate(div3,{width,width:0},time)
		animate(div4,{height,height:0},time)
		}
	}
	var zj5RightOne=$(".zj5-right-one");
	var zj5RightTwo=$(".zj5-right-two");
	var zj5RightThree=$(".zj5-right-three");
	var zj5RightFour=$(".zj5-right-four");

	var zj1leftfour=$(".zj1-left-four")
	var zj1leftfive=$(".zj1-left-five")
	//以下4个 循环只是在页面中重复调用这个
	for (var i = 0; i < zj5RightOne.length; i++) {
			border(zj5RightOne[i],500);
	};
	for (var i = 0; i < zj5RightTwo.length; i++) {
			border(zj5RightTwo[i],500);
	};
	for (var i = 0; i < zj5RightThree.length; i++) {
			border(zj5RightThree[i],500);
	};
	for (var i = 0; i < zj5RightFour.length; i++) {
			border(zj5RightFour[i],500);
	};


	for (var i = 0; i < zj1leftfour.length; i++) {
			border(zj1leftfour[i],500);
	};
	for (var i = 0; i < zj1leftfive.length; i++) {
			border(zj1leftfive[i],500);
	};


//五区图片出现动画边框结束


// 右侧边栏1区开始
  var rightbn=$(".right-box")[0];
  var as=getChild(rightbn);

      document.documentElement.scrollTop=1;
      if (document.documentElement.scrollTop==1) {
        var scrollobj=document.documentElement;
      }else{
        var scrollobj=document.body;
      }
      addEvent(window,"scroll",function(){//滚动到一定距离触发 导航栏显示出来
        var st=scrollobj.scrollTop;
        if (st>800) {//距离大于800  则显示
          rightbn.style.display="block";
        }else{
          rightbn.style.display="none";
        }
      })

	var floorbtn=$(".right-box0");//点击楼层跳转到相应的楼层
	var contents=$(".cc");
	for (var i =0; i <floorbtn.length; i++) {
		floorbtn[i].index=i;
		floorbtn[i].onclick=function(){
			var ot=contents[this.index].offsetTop;
			animate(scrollobj,{scrollTop:ot})
		}
	};
   
   addEvent(window,"scroll",function(){//滚动到相应楼层导航栏按钮变色
      var st=scrollobj.scrollTop;
      for (var i = 0; i < contents.length; i++) {
          if(st+400>contents[i].offsetTop){
          for (var j = 0; j < contents.length; j++) {
            as[j].style.background=""
            as[j].style.fontSize="";
            as[j].style.color=""
          };
          as[i].style.background="#e5004f"
          as[i].style.fontSize="14px";
          as[i].style.color="white";
            };
        }
   })
		//返回顶部
var obj=document.documentElement;
	var hhtop=$(".hhtop")[0];
	hhtop.onclick=function(){//点击返回顶部
		var obj=document.body.scrollTop==0?document.documentElement:document.body;
		//利用三元表达式解决在谷歌中点击不返回顶部的问题
		animate(obj,{scrollTop:0}) //点击触发动画回到顶部
	}
// 右侧边栏1区结束


//整个页面按需加载图片显示 开始
var axjz=$(".axjz");
	// console.log(axjz)
	var tops=[];
	var doc=getDoc();
	// console.log(doc)
		var ch=doc.clientHeight;
	for (var i = 0; i < axjz.length; i++) {
		tops.push(axjz[i].offsetTop);
	}
		doc.scrollTop=1;
		window.onscroll=function(){
		var scrollT=doc.scrollTop;
		for (var i = 0; i < tops.length; i++) {
			if (scrollT+ch>tops[i]&&axjz[i].getAttribute("flag")!="true") {
				var imgs=$("img",axjz[i]);
				for (var j = 0;j < imgs.length; j++) {
					imgs[j].src=imgs[j].getAttribute("asrc");
				}
				axjz[i].setAttribute("flag",true)
			};
		 };
	   };
//按需加载结束















  }