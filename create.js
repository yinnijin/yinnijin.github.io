

function validateForm(className) {
    var x = document.getElementsByClassName(className);

    if (x[0].value == "") {
        alert("This field must be filled out");
        return false;
    }
}
