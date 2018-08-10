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
        alert("This survey is not meant for you!")
        }
      else if (que2 === '2' && que3 === '2') {
        $(".php").show();
        alert("this is php!")
        }
      else if (que3 === '3' && que4 === '2') {
        $(".sharp").show();
        alert("this is sharp##")
        }
      else if (que2 === '3' && que3 === '1') {
          $(".java").show();
        alert("this is javaaaa")
        }
    event.preventDefault();
  });
});
