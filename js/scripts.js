$(document).ready(function() {
  $("#question1").on(function() {

    var yes = $("#question1").val();
    var nope = $("#question1").val();

    if (yes.val() === "option1"){
      $("#secondBody").show();
    }
    else (nope.val() === "option2") {
      alert("Sorry, this survey is not meant for you!")
    }

  });
});
