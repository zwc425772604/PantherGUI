
var audio;
$(document).ready(function(){
  //  $('[data-toggle="tooltip"]').tooltip();


audio = $("audio")[0];
var current = $('span.currentPos');
var time = $('div.timeBar');
var currentPos;
var maxduration;
var percentage;

audio.src = "data/audios/jay.mp3";

$("audio").on("loadedmetadata", function() {
$('#duration').text(audio.duration);

});
//get HTML5 video time duration
});
var isPlaying = false;

function playSong()
{
  alert(audio.currentTime);

  //get the current time and then / totaltime
  //var t = document.get
  // var ti = "3:26";
  // var times = ti.split(":");
  // var minutes = times[0];
  // var seconds = times[1];
  // seconds = parseInt(seconds, 10) + (parseInt(minutes, 10) * 60);
  var aud =   document.getElementById("myAudio");
  if (isPlaying)
  {
    isPlaying = false;
    $("#play-pause-button").text("play_circle_filled");
    aud.pause();
  }
  else
  {
    isPlaying = true;
    $("#play-pause-button").text("pause_circle_filled");
    aud.play();
  }



}
