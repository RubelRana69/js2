function clrChange(){
	document.getElementById('r').style.color="red";
}
function fntChange(){
	document.getElementById('s').style.fontSize="50px";
}
function bdrChange(){
	document.getElementById('p').style.border="2px solid yellow";
}
function dtShow(){
	document.getElementById('dt').innerHTML=Date();
}
function clFunction(){
	document.getElementsByClassName('cl')[2].innerHTML="Welcome Bangladesh!"
}
function prntPage(){
	document.getElementById("print").innerHTML=print();
}
function imgOne(){
	document.getElementById('img').src="images/Jaal khabar (2).png";
}
function imgTwo(){
	document.getElementById('img').src="images/Jaal khabar (4).png";
}
/* output function*/
/*
function welcome(){
	window.alert('welcome to gazipur..');
}
function welcome(){
	alert('welcome to gazipur..');
}
function welcome(){
	console.log('welcome to gazipur..');
}
*/
function welcome(){
	document.write('Welcome to gazipur..');
}
$(document).ready(function(){
	//hide//
	$('#hide').click(function(){
     $('img').hide(1000);
	});
});
//show//
$(document).ready(function(){
 $('#show').click(function(){
	$('img').show(1000);
 });
});
//toggle//
$(document).ready(function(){
 $('#toggle').click(function(){
	$('img').toggle("slow");
 });
});


