$(document).ready(function() {
  $("#survey").submit(.chanege,function(event) {

    var que1 = ("#question1").val();
    var que2 = ("#question2").val();
    var que3 = ("#question3").val();
    var que4 = ("#question4").val();
    var que5 = ("#question5").val();

    if (que2 === '3' && que3 === '1' && que5=== '3') {
      $(".programLang").show.image("#java")
      }
      else if (que 2 === '2' && que3 === '2' && que5 === '2') {
        $(".programLang").show.image("sharp")
      }
      else (que3 === '3' && que4 === '2' && que5 === '1'){
        $(".programLang").show.image("php")
      }
  });
});
