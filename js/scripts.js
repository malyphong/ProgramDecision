$(document).ready(function() {
  $(".form-group").submit(function(event) {

    var question1 = $("#question1").val();
    var question2 = $("#question2").val();
    var question3 = $("#question3").val();
    var question4 = $("#question4").val();
    var question5 = $("#question5").val();

    if (question1 === '2') {
        $("#noMatch").show();
        $("#mainbody").hide();
    } else if (question2 === '2' && que3stion === '2') {
        $("#php").show();
        $("#sharp").hide();
        $("#java").hide();
        $("#mainbody").hide();
    } else if (question3 === '3' && question4 === '2') {
        $("#sharp").show();
        $("#java").hide();
        $("#php").hide();
        $("#mainbody").hide();
    } else if (question2 === '3' && question3 === '1') {
          $("#java").show();
          $("#php").hide();
          $("#sharp").hide();
          $("#mainbody").hide();
    }
    event.preventDefault();
  });
});
