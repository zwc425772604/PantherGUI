$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

function playSong()
{
  //get the current time and then / totaltime
  //var t = document.get
  var times = S.split(":");
  var minutes = times[0];
  var seconds = times[1];
  seconds = parseInt(seconds, 10) + (parseInt(minutes, 10) * 60);
}
