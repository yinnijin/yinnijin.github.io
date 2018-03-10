

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
	var block = '<div class="dialogbox" id="newpost">'+' <img src="https://profile.actionsprout.com/default.jpeg" alt="Avatar" style="width:100%;">'+
		'<div class="body">'+'<span class="tip tip-left"></span>'+'<div class="message">'+'<span id="new">'+text+'</span>'+'<p class="time" id="newtime">'+myDate.toLocaleString()+'</p>'+'</div>'+'</div>'+'</div>'
	$('#last').append(block); 
	var $cont = $('.container');
	$cont[0].scrollTop = $cont[0].scrollHeight;//Always scrolling down to the bottom of container
    $('input[type="text"]').val('');//reset the input field
	
	var isScrolledToBottom = out.scrollHeight - out.clientHeight <= out.scrollTop + 500;
	$(':input','.sendTerm').val(''); 
}