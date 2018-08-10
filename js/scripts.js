$(document).ready(function() {
  alert("omg!")
  $("survey").on("select",function(event) {
    event.preventDefault();

    var que1 = $("#question1").this.val();
    var que2 = $("#question2").this.val();
    var que3 = $("#question3").this.val();
    var que4 = $("#question4").this.val();
    var que5 = $("#question5").this.val();

    if (que1 === '2') {
        alert("This survey is not meant for you!")
        }
      else if (que2 === '2' && que3 === '2' || que3 === '1' && que5 === '2') {
        $("img").show('photo/csharp.png')
        }
      else if (que3 === '3' && que4 === '2' && que5 === '1,') {
        $("img").show('photo/php.png')
        }
      else (que2 === '3' && que3 === '1' && que5 === '3')
          $("img").show('photo/JS.png')
  });
});
