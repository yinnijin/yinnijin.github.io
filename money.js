
function send() {
	var e = document.getElementById("sources");
var x = e.options[e.selectedIndex].value;
var y=x/7;
	 document.getElementById("new").innerHTML = "You can get back $"+ Number.parseFloat(y).toFixed(2)+ " per day.";

}

function on1() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("text").innerHTML = "We hope your money could motivate you to achieve your daily goal.";
}

function on2() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("text").innerHTML = "Record your activity by uploading photos on time to prove you finish daily goal, then you can get back your money on that day.";
}

function on3() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("text").innerHTML = "You cannot get your money back on that day, and it will become reward to those who accomplish in your group.";
}

function on4() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("text").innerHTML = " If some one in your group fails to punch in on that day, anyone who succeed in punching in can share his money as a reward.";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}