var current_id = 0;
var name=null;
var money=null;
  name = getUrlVars()["sname"];
  money = getUrlVars()["sources"];
 
  if(name == "undefined" || name === null){
    document.getElementById("show").style.display = "none";
    document.getElementById("hide").style.display = "block";     
  }else{
    document.getElementById("show").style.display = "block";
    document.getElementById("hide").style.display = "none";  
    document.getElementById("write").innerHTML=name;
    document.getElementById("money").innerHTML="$0.00/$"+money;
  };


 function newSchedule(){
  var displayValue = document.getElementById('show').style.display;
  //alert(displayValue);
  if(displayValue == "block"){
    alert("You can't create a new schedule, since you currently have an unfinished schedule.");
  }
  if(displayValue == "none"){
    window.location.href="createSchedule.html";
  }
}



function change_color(event){

   current_id = event.target.id;
   id = String(current_id);
   document.getElementById(id).style.backgroundColor = "#ff6666";

}



function readURL(input) {
    if (input.files && input.files[0]) {

      var reader = new FileReader();

      reader.onload = function (e) {
        $('.file-upload-image').attr('src', e.target.result);
        $('.image-upload-wrap').show();
        $('.image-title').html(input.files[0].name);
      };

      reader.readAsDataURL(input.files[0]);

    }  else {
      $('.image-upload-wrap').hide();
    }
  }

  function removeUpload(){
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.image-upload-wrap').hide();
  }

function postCheck()
  { 
    alert(current_id);
    var content = document.getElementById("text").value;
    if (content.length < 1) {
      alert("Has No Content");

      return false;
    }
    else{
      alert(current_id);
      document.getElementById('current_id').style.backgroundcolor = "#ff6666" ;
      window.location.href = "Schedule2.html";
      return false;

        }
  }


function getUrlVars() {
var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
vars[key] = value;
});
return vars;
}

function doLime()
{
   var dd1 = document.getElementById("d1");
   var dd2 = document.getElementById("yellow_row");
   var dd3 = document.getElementById("money");
   var dd4 = document.getElementById("punch_in");
   // var a = parseFloat("money");
   // console.log(a)
   // var moneyget= 0.143 * a ;
   var moneyget1 = 0.143 * money;
   var moneyget2 = moneyget1.toFixed(2); 
   // console.log ( moneyget)
   console.log( moneyget1)
   console.log( moneyget2)
  
  
  dd1.style.backgroundColor="rgb(136,162,161)";
  dd2.style.width="14.3%";
  dd3.innerHTML="$"+moneyget2+"/$"+money;
  dd4.innerHTML="Congrats, keep going!";

}

function doLime1()
{
   var dd1 = document.getElementById("a1");
  
  
  dd1.style.backgroundColor="#ff6666";
}














