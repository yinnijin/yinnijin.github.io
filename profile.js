
function add() {
	var f = document.getElementById('f').innerHTML;
	if(f=="Follow"){
		var s1 = document.getElementById('follow').innerHTML;
		var s2=parseInt(s1)+1;
		document.getElementById("follow").innerHTML = s2;
		document.getElementById("f").innerHTML = 'Follow &#10003;';
	}else{
		var d1 = document.getElementById('follow').innerHTML;
		var d2=parseInt(d1)-1;
		document.getElementById("follow").innerHTML = d2;
		document.getElementById("f").innerHTML = 'Follow';
	}
	
    
};

