//get the function callMe to return "maybe".
function callMe() {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  var lyric = "maybe";
  return lyric;

}

// fix the function thisIsCrazy to console.log the string "hey!!!".
function crazy() {
  thisIsCrazy();

  var thisIsCrazy = function (){
    console.log("hey!!!")
  }
}

// get the function to print out "Kristin" to the console.
function sayMyName() {
  var name = "Cricky";

  sayMy();

  function sayMy() {
    console.log(name);
    var name = "Kristin";
  }
}
