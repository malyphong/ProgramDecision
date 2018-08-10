$(document).ready(function() {
  $("#survey").submit.change(function(event) {
    event.preventDefault();

    var que1 = ("#question1").val();
    var que2 = ("#question2").val();
    var que3 = ("#question3").val();
    var que4 = ("#question4").val();
    var que5 = ("#question5").val();

    if (que2 === '3' && que3 === '1' && que5 === '3' ! que1 === '2') {
      $(".programLang").show.image('photo/JS.png')
    }
      else if (que2 === '2' && que3 === '2' && que5 === '2' ! que1 === '2') {
        $(".programLang").show.image('photo/csharp.png')
    }
      else if (que3 === '3' && que4 === '2' && que5 === '1' ! que1 === '2') {
        $(".programLang").show.image('photo/php.png');
    }
      else( que1 === '2') {
        alert("This survey is not meant for you!")
      }

  });
});
