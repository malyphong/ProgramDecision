$(document).ready(function() {
  alert("omg!")
  $(".form-group").submit(function(event) {
    alert("fuck")
    var que1 = $("#question1").val();
    var que2 = $("#question2").val();
    var que3 = $("#question3").val();
    var que4 = $("#question4").val();
    var que5 = $("#question5").val();

    if (que1 === '2') {
        alert("This survey is not meant for you!")
        }
      else if (que2 === '2' && que3 === '2' || que3 === '1') {
        $(".programLang").show('#php')
        }
      else if (que3 === '3' && que4 === '2') {
        $(".programLand").show('#sharp')
        }
      else (que2 === '3' && que3 === '1')
          $(".programLand").show('#java')
    event.preventDefault();
  });
});
