$(document).ready(function() {

    var yes = $("#question1").val();
    var nope = $("#question1").val();

    if (yes.val() === "option1"){
      $(".mainQuestions").toggle();
    }
    else if (nope.val() === "option2") {
      alert("Sorry, this survey is not meant for you!")
    }
    // event.preventDefault();
});
