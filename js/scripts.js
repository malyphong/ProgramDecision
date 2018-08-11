$(document).ready(function() {
  alert("omg!")
  $(".form-group").submit(function(event) {
    alert("this part works")
    var que1 = $("#question1").val();
    var que2 = $("#question2").val();
    var que3 = $("#question3").val();
    var que4 = $("#question4").val();
    var que5 = $("#question5").val();
// image id tags

    if (que1 === '2') {
        $("#noMatch").show();
        $("#mainbody").hide();
        }
      else if (que2 === '2' && que3 === '2') {
        $(".php").show();
        $(".sharp").hide();
        $(".java").hide();
        alert("this is php!")
        }
      else if (que3 === '3' && que4 === '2') {
        $(".sharp").show();
        $(".java").hide();
        $(".php").hide();
        alert("this is sharp##")
        }
      else if (que2 === '3' && que3 === '1') {
          $(".java").show();
          $(".php").hide();
          $(".sharp").hide();
        alert("this is javaaaa")
        }
    event.preventDefault();
  });
});
