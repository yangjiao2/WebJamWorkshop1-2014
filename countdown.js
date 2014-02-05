var timer = function(id) {
  var countdown_div = document.getElementById(id);
  var current_time = new Date();
  var end_time = new Date("Tue, 4 Feb 2014 20:00:00 -0800");
  var time_shift = end_time - current_time;
  var minutes = Math.floor(time_shift / 1000 / 60);
  var seconds = Math.floor((time_shift - minutes * 60 * 1000) / 1000);
  countdown_div.innerText = " " + minutes + " minutes " + seconds + " seconds ";
}
setInterval(function() {
  timer('countdown');
}, 1000)
timer('countdown');
