/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-03-12 20:27:03
 * @version $Id$
 */
 my1 = function() {
	document.getElementById("p1").style.color='red';
}

function my2() {
	var date=new Date();
	var Year=date.getFullYear();
	var Month=(Month="0"+(date.getMonth()+1)).substr(Month.length-2,2);
	var day=(day="0"+(date.getDate())).substr(day.length-2,2);
	document.getElementById("p2").innerHTML=Year+'-'+Month+"-"+day;
}

  function my3() {
	var list=document.getElementById("uu")
    //获取ul对象  
    lis=list.getElementsByTagName("li") 
    //获取ul下的li对象,是数组集合  
    for(var i=0,l=lis.length;i<l;i++){  
    lis[i].className="el-menu fn-active"
}

  }
  function my4() {
  	var parent = document.getElementById("uu");
  	var child=document.getElementById('p8')
    parent.removeChild(child);
  	}

  function my5() {
  	window.open('https://www.taobao.com' , '_blank')

   }

  function my6() {
  	var parent = document.getElementById("uu");
  	var li=document.createElement("li");
  	parent.appendChild(li).innerHTML='p9'

  }
  function my7() {
  	document.getElementById("m-box").style.width = "100%"; 
  }
  function m1() {
  	alert("1");
  }
  function m2() {
  	alert("2");
  }

  function m3() {
  	alert("3");
  }

  function m4() {
  	alert("4");
  }

  function m5() {
  	alert("5");
  }

  function m6() {
  	alert("6");
  }
  function m7() {
  	alert("7");
  }
  function mm() {//实现不了
	 var list=document.getElementById('uu').children
     for(var i=0;i<list.length;i++){

       list[i].setAttribute('index',i+1);
       list[i].onclick=function (  ) {
           alert(this.getAttribute('index'))
       }
       }

}

