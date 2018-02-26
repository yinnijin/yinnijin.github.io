
function postCheck() {
	var x = document.getElementById("text1");
	var y = document.getElementById("text");

    if (x.value == "" || y.value == "" ) {
        alert("Please fill out all fields");
        return false;
    }
    
};

