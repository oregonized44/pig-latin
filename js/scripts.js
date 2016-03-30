
// user interface logic
$(document).ready(function() {
  $("#pig-latin").submit(function(event) {
    event.preventDefault();
    var word = $('#word').val();
    var splits = [];
    splits = word.split(' ');
    for (var i = 0; i < splits.length; i++){
      var commas = splits[i].split("");
      if(commas[0] == "a" || commas[0] == "e" || commas[0] == "i" || commas[0] == "o" || commas[0] == "u"){
        splits[i] = splits[i]+'way';
        console.log(splits[i]);
      } else if (commas[1] == "a" || commas[1] == "e" || commas[1] == "i" || commas[1] == "o" || commas[1] == "u")
      {
        var splitso = splits[i].split(commas[0]);
        splits[i] = splitso[1] + commas[0]+'ay';
        console.log(splits[i]);
      } else if (commas[2] == "a" || commas[2] == "e" || commas[2] == "i" || commas[2] == "o" || commas[2] == "u"){
        var splitso = splits[i].split(commas[1]);
        splits[i] = splitso[1] + commas[0] + commas[1]+'ay';
        console.log(splits[i]);
      }
    }
  });
});
