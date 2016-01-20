$(document).ready(function() {
  // - starting point, some way to get current time
  // - some way to display it (HTML + inject clock into HTML + CSS to style it)
  // - way to update the clock, refresh (needs to back to 0/12AM)

  // reminder:
  // $("#someId").css("color", "red");
  // $("#someId").css("font-size", "red");
  // $("#someId").css({
  //   color: "red",
  //   fontSize: "14px",
  //   backgroundColor: "blue"
  // });

  // 4 / 2 -> 2

  // 4 % 2 -> 0
  // 5 % 2 -> 1
  // 6 % 2 -> 0

  // if a number is even then % with 2 will return 0
  // otherwise if a number is odd then % with 2 will return 1

  function startTime() {
    var today = new Date(); //Javascript function that refers to the time and date on your computer
    // today = Thu Jan 07 2016 18:42:12 GMT-0500 (EST)
    var h = today.getHours();
    // h = 18
    var m = today.getMinutes();
    // m = 42
    var s = today.getSeconds();
    // s = 12
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    changeText(m);
    $("#txt").html(h + ":" + m + ":" + s);
    var t = setTimeout(startTime, 500);
  }

  function checkTime(i) {
    // i = 1
    if (i < 10) {
      i = "0" + i
    }
    return i;
  }

  //Question #1

   function changeText(i) {
    if (i % 2 === 0){
     $("#txt").css("color", "blue");
   }
   else {
    $("#txt").css("color", "red"); 
   }
}
        
  //Question #2

    function changeBackground() {
      if ($("body").css("background-color")==="rgb(255, 255, 0)"){
       $("body").css("background-color","green"); 
       }
      else {
        $("body").css("background-color","yellow");
      }
      var b = setTimeout(changeBackground, 10000)
  }

  //Question #3
    var counter = 0;

    function changeFontSize() {
      var fontSizes = ["40px", "14px", "16px", "20px"];
      //pick a random number then us as index
      var randomNumber = Math.floor(Math.random() * 4) + 1; //math random is a random decimal between 0 and 1...math floor rounds number to whole number

      $("body").css("#txt", fontSizes[randomNumber]); //ties the function to the array

      //iterated through the array

      var fontSize = fontSizes[counter];
      $("body").css("#txt", fontSize);
      //update the counter here
      counter = counter + 1; //calling the next number in the array
      if (counter > 3){
        counter = 0; //brings the array back to 0 
      }

      setTimeout(changeFontSize, 1500);

    }
  
  changeFontSize();
  changeBackground();
  startTime();
});
