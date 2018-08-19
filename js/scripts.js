$(document).ready(function() {
  $(".form-group").submit(function(event) {

    var que1 = $("#question1").val();
    var que2 = $("#question2").val();
    var que3 = $("#question3").val();
    var que4 = $("#question4").val();
    var que5 = $("#question5").val();

    if (que1 === '2') {
        $("#noMatch").show();
        $("#mainbody").hide();
    } else if (que2 === '2' && que3 === '2') {
        $("#php").show();
        $("#sharp").hide();
        $("#java").hide();
        $("#mainbody").hide();
    } else if (que3 === '3' && que4 === '2') {
        $("#sharp").show();
        $("#java").hide();
        $("#php").hide();
        $("#mainbody").hide();
    } else if (que2 === '3' && que3 === '1') {
          $("#java").show();
          $("#php").hide();
          $("#sharp").hide();
          $("#mainbody").hide();
    }
    event.preventDefault();
  });
});
