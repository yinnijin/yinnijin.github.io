
function formCheck() {
	var x = document.getElementsByClassName("username");
	var y = document.getElementsByClassName("email");
	var a = document.getElementsByClassName("pw");
	var b = document.getElementsByClassName("pw2");
	 //var emailFilter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    if (x[0].value == "" || y[0].value == "" || a[0].value == "" || b[0].value == "") {
        alert("Please fill out all fields");
        return false;
    }else if(!validateEmail(y[0].value)){
    	alert("Please enter a valid e-mail address.");
        return false;
    }else if(a[0].value != b[0].value){
    	alert("Re-enter password doesn't match.");
        return false;
    }else{
    	window.location.href = 'homepage.html';
 		return false;
    }
};

function validateEmail(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
}
