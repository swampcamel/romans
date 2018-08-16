$(function () {
  //business suit
  var numCheck = function (checkVal) {
    var input = parseInt($("#numInput").val());
    if (/[^0-9]/.test(input)) {
        alert("Please Enter an acutal #.");
    } else if (input > 3999) {
      alert("Value must be less than 3,999.")
    } else {
      return input;
    }
  };

  var convertToRoman = function (input) {
    var result = '';
    var romValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romNotation = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    for (var i=0; i <= romValues.length; i++) {
      while (input%romValues[i] < input) {
        result += romNotation[i];
        input -= romValues[i];
      }
    }
    return result;
  };
  // interface logic
  $("form#form1").submit(function(event) {
    event.preventDefault();
    var numeral = numCheck(numeral);
    var result = convertToRoman(numeral);
    console.log(numeral);
  $("p#result").text(result);
  })
});
