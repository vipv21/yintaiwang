// 把所有用于解决ie6-8
// getElmentsByClassName    在ie6-8不支持
//1.先区分  区分开 再进行不同的操作
//2.先把所有的元素获取到 然后再找类名是我们需要的元素
//3.然后再根据类名再找我们需要的元素


function getClass(selector,context){
	context=context||document;
	if (document.getElementsByClassName) {
		return context.getElementsByClassName(selector)	//判断浏览器
		}else{
			var all=context.getElementsByTagName("*");	//获取文档中所有的元素标签
			var newarr=[];
			for (var i = 0; i < all.length; i++) {		//遍历判断
				if (checkstr(all[i].className,selector)) {	//如果类名等于selector
					newarr.push(all[i])
				};
			};
			return newarr;	//返回这个数组
		}
}
function checkstr(lstr,str){	//两个字符串
	var arr=lstr.split(" ")
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]==str) {
			return true;
		}
	}
	return false;
}



//兼容的获取或者设置元素的文本内容
// 1.先判断浏览器
// 2.判断是获取还是设置   >获取是一个参数 设置是两个参数
// 3.分别执行对应的操作
function getText(obj,text){  //传入获取和设置参数
if (document.getElementsByClassName) {  	//判断浏览器
	if (text==undefined) {
		return obj.textContent;		//获取的结果返回
     }else{
	obj.textContent=text;	//设置obj.textContent为text
	}		
}else{
	if(text==undefined) {
		return obj.innerText;
    }else{
	obj.innerText=text;
	}
}
}


//兼容的获取某一个对象的某一个样式的方式
// window.getComputedStyle(one,null).width
// one.currentStyle.width
function getStyle(obj,attr){
	if (window.getComputedStyle) {		//判断浏览器
			return window.getComputedStyle(obj,null)[attr]	//
	}else{
		return obj.currentStyle[attr]
	}
}

// 1.兼容性的通过类名获取
// 2.兼容性获取或者设置内容
// 3.兼容性的获取样式


//通过多种方式获取元素 jquery
	function $(selector,context){
		context=context||document;
		//div  .one  #aa
	if (typeof selector=="string"){
		if (selector.charAt(0)=="."){
			return getClass(selector.slice(1),context)
		}else if (selector.charAt(0)=="#") {
			return  document.getElementById(selector.slice(1))
		}else{
			return context.getElementsByTagName(selector)
		}
}else if (typeof selector=="function") {
	addEvent(window,"load",selector)
	}
}

//获取所有子元素的节点
function getChild(obj){
	var childs=obj.childNodes;
	var newarr=[];
	for (var i = 0; i < childs.length; i++) {
		if (childs[i].nodeType==1) {
			newarr.push(childs[i]);
		}
	};
	return newarr;
}

//获取第一个元素子节点
function getFirst(obj){
	return getChild(obj)[0]
}
//获取最后一个元素子节点
function getLast(obj){
	var arr=getChild(obj);
	return arr[arr.length-1];
}
//获取下一个元素兄弟节点
function getNext(obj){
	var next=obj.nextSibling;
	if (next==null) {
		return null;
	};
	while (next.nodeType!=1) {
		next=next.nextSibling;
		if (next==null) {
			return null;
		};
	};
	return next;
}

//访问上一个兄弟节点
function getPrevious(obj){
	var previous=obj.previousSibling;
	if (previous==null) {
		return null;
	}
	while (previous.nodeType!=1) {
		previous=previous.previousSibling;
		if (previous==null) {
			return null;
		};
	};
	return previous;
}


//将一个元素插入到另一个元素的后面
function inserAfter(oldobj,newobj){
	var next=getNext(oldobj);
	var parent=oldobj.parentNode;
	if (next) {
		parent.insertBefore(newobj,next)

	}else{
		parent.appendChild(newobj)
	}
}

//兼容性的绑定事件的函数
function addEvent(obj,event,callback){
	if(obj.addEventListener){
		obj.addEventListener(event,callback,false)
	}else{
		obj.attachEvent("on"+event,callback)
	}
}


//兼容性的移除绑定的事件
function removeEvent(obj,event,callbac){
	if (obj.removeEventListener) {
		obj.removeEventListener(event,callback,false)
	}else{
		obj.detachEvent("on"+event,callback)
	}
}



//关于滚动到顶部的函数
function getDoc(){
	var doc=null;
	document.body.scrollTop=1;
	if (document.body.scrollTop==1) {
		doc=document.body;
	}else{
		doc=document.documentElement;
	}
	return doc;
}









//给某一个对象添加滚轮事件的函数
function mousewheel(obj,upfun,downfun){
	if (obj.addEventListener){
		obj.addEventListener("mousewheel",scrollfun,false)
		obj.addEventListener("DOMMouseScroll",scrollfun,false)
	}else{
		obj.attachEvent("onmousewheel",scrollfun)
	}
	function scrollfun(e){
		var ev=e||window.event;
		var dir=ev.detail||ev.wheelDelta;
		if (ev.preventDefault) {
			ev.preventDefault()//浏览器兼容的方法
		}else{
			ev.returnValue=false;//浏览器兼容的属性
		}
		if (dir==-3||dir==120) {
			upfun.call(obj,ev)
		}else if(dir==3||dir==-120){
			downfun.call(obj,ev)
		}
	}
}




  //判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
	if(parent.contains){
	   return parent.contains(child) && parent!=child;
	}else{
	  return (parent.compareDocumentPosition(child)===20);
	}
 }
 //判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
	 if(getEvent(e).type=="mouseover"){
	    return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
		!((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
	 }else{
		return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
		!((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
		}
  }
//鼠标移入移除事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
	  if(overfun){
	    obj.onmouseover=function  (e) {
			  if(checkHover(e,obj)){
			     overfun.call(obj,[e]);
			  }
	    }
	  }
	  if(outfun){
	    obj.onmouseout=function  (e) {
			  if(checkHover(e,obj)){
			     outfun.call(obj,[e]);
			  }
	    }
	  }
}
  function getEvent(e){
    return e||window.event;
  }

















