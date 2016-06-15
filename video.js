var max, media, play, progresbar, progress, mute, volume, loop;

addEventListener('load', initialize);

function initialize(){
  max = 500;
  media = document.getElementById('medio');
  play = document.getElementById('play');
  progresbar = document.getElementById('bars');
  progress = document.getElementById('prog'); 
 
  play.addEventListener('click', push); 
  progresbar.addEventListener('click', move); 
}
function push(){
  if(!media.paused && !media.ended) {
    media.pause();
    play.value = 'Play';
    clearInterval(loop);
  }else{
    media.play();
    play.value = 'Pause';
    loop = setInterval(stat, 1000);
  }
}
function stat(){
  if(!media.ended){
    var size = parseInt(media.currentTime * max / media.duration);
    progress.style.width = size + 'px';
  }else{
    progress.style.width = '0px';
    play.innerHTML = 'Play';
    clearInterval(loop);
  }
}

function move(e){
  if(!media.paused && !media.ended){
    var mouseX = e.pageX - bar.offsetLeft;
    var newtime = mouseX * media.duration / maxim;
    media.currentTime = newtime;
    progress.style.width = mouseX + 'px';
  }
}


