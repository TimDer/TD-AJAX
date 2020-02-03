/*

TD-AJAX Version 1.0

Other required files:
  1. jQuery (tested with version: v3.3.1)
  
Download url: https://www.github.com/TimDer/TD-AJAX

*/

// configs
var successMessage  = "Success";
var errorMessage    = "Error";
var allowResponse   = false;
var BASE_URL        = "";

$("form.td-ajax").on("submit", function (e) {
    e.preventDefault();
    // form tag
    var formTag = $(this);
    var action  = formTag.attr("action");
    var method  = formTag.attr("method");
    var data    = new FormData($(this)[0]);
    
    // get the data from the input fields
    formTag.find("[name]").each(function () {
        var formDataTag         = $(this);
        var formDataTagName     = formDataTag.attr("name");
        var formDataTagValue    = formDataTag.val();
        
        data.append(formDataTagName, formDataTagValue);
    });

    // enctype 
    if (formTag.attr("enctype")) {
        var enctype = formTag.attr("enctype");
    }
    else {
        var enctype = 'application/x-www-form-urlencoded';
    }

    // submit the data
    $.ajax({
        enctype: enctype,
        url: BASE_URL + action,
        processData: false,
        contentType: false,
        type: method,
        data: data,
        success: function (response) {
            if (successMessage === "" && allowResponse === true) {
                alert(response);
            }
            else if (successMessage !== "" && allowResponse === true) {
                alert(successMessage + ": " + response);
            }
            else {
                alert(successMessage);
            }
        },
        error: function (response) {
            if (errorMessage === "" && allowResponse === true) {
                alert(response);
            }
            else if (errorMessage !== "" && allowResponse === true) {
                alert(errorMessage + ": " + response);
            }
            else {
                alert(errorMessage);
            }
        }
    });
});
