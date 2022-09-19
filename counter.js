//const date = new Date(2022,12,25,12,00);
function count_down(){
  // var xmas = new Date(2022,8,19,14,38,1);
  var xmas  = new Date("December 25, 2022 00:00:00")
  var today = new Date();        
  var timeDiff = xmas.getTime() - today.getTime();
  var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  var remainingTime = timeDiff % (1000 * 60 * 60 * 24);
  var hours = Math.floor(remainingTime / (1000 * 60 * 60));
  var remainingTime = remainingTime % (1000 * 60 * 60);
  var mins = Math.floor(remainingTime / (1000 * 60));
  var remainingTime = remainingTime % (1000 * 60);
  var seconds = Math.floor(remainingTime / (1000));
  document.getElementById("count-down").innerText =  days + " Days " + hours + " Hours " + mins + " Minutes " + seconds + " Seconds Left";
}
count_down();
setInterval(count_down, 1000)

