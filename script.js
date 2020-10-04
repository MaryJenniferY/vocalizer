document.addEventListener("mousemove", function(e){
    const bg = document.querySelector('.bg');
    const log = document.querySelector('.log');
    const content = document.querySelector('.content');
    
    bg.style.width = 100 + e.pageX/100 + '%';
    bg.style.height = 100 + e.pageX/100 + '%';
    
    log.style.right = 100 + e.pageX/2 + 'px';
    
    content.style.left = 100 + e.pageX/2.5 + 'px';
})

document.getElementById('e1').addEventListener("mouseover",function(){
    document.getElementById('pgbg').style.background="url('e1.jpg') center center";
    
    
},false);

document.getElementById('e2').addEventListener("mouseover",function(){
    document.getElementById('pgbg').style.background="url('e2.jpg') center center";
},false);

document.getElementById('e3').addEventListener("mouseover",function(){
    document.getElementById('pgbg').style.background="url('e3.jpg') center center";
},false);



$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 800) {
	    $(".navbar").css("background" , "black");
	  }

	  else{
		  $(".navbar").css("background" , "rgba(0,0,0,0)");  	
	  }
  })
})

