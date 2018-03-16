


 function append_comment(){

	var len =  $(".sendTerm").val().length 
	console.log(len)
	if (len <= 0) {
		return;
	}
	var out = document.getElementsByClassName("container"); 

	var myDate = new Date();

	myDate.getFullYear();
	myDate.getMonth();
	myDate.getDate();
	myDate.getHours();
	myDate.getMinutes();
  	
	var x = document.getElementsByClassName("sendTerm");
	var text= String(x[0].value);
	// var block = '<div class="dialogbox" id="newpost">'+' <img src="https://profile.actionsprout.com/default.jpeg" alt="Avatar" style="width:100%;">'+
	// 	'<div class="body">'+'<span class="tip tip-left"></span>'+'<div class="message">'+'<span id="new">'+text+'</span>'+'<p class="time" id="newtime">'+myDate.toLocaleString()+'</p>'+'</div>'+'</div>'+'</div>'
	// $('#last').append(block); 
	var block = '<div class="dialogbox" id="newpost">'+'<div class="body">'+'<div class="user">'+'<div class="user_photo"><a href="other_profile.html"><img src="http://www.jiemeng8.com/uploads/allimg/c140324/139564295C20-11049.jpg" class="photo" /></a></div>'+
		'<div class="user_name"><a href="other_profile.html" class="username">Vivian</a></div>'+'</div>'+'<div class="message">'+'<span id="new">'+text+'</span>'+'<p class="time" id="newtime">'+myDate.toLocaleString()+'</p>'+'</div>'+'</div>'+'</div>'
	$('#first').prepend(block); 

// 	$("block").click(function(){
//     var x = $("p").position();
//     alert("Top: " + x.top + " Left: " + x.left);
// }


	var $cont = $('.container');
	// $cont[0].scrollTop = $cont[0].scrollHeight;//Always scrolling down to the bottom of container
    $('input[type="text"]').val('');//reset the input field
    
	$cont[0].scrollTop = 0;
	
	$(':input','.sendTerm').val(''); 
}