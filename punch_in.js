var current_id = 0;

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



function doLime()
{
   var dd1 = document.getElementById("d1");
  
  
  dd1.style.backgroundColor="#ff6666";
}

function doLime1()
{
   var dd1 = document.getElementById("a1");
  
  
  dd1.style.backgroundColor="#ff6666";
}













