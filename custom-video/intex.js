const videoPlayer = document.querySelector('.video__player');
const startBtn = videoPlayer.querySelector('.video__btn');
const poster = videoPlayer.querySelector('.video__poster');
const video = videoPlayer.querySelector('.video__item');
const controls = videoPlayer.querySelector('.video__controls');
const playBtn = controls.querySelector('.video__play-btn');
const volumeBtn = controls.querySelector('.video__volume-btn');
const timeline = controls.querySelector('.video__progress');
const volumeBar = controls.querySelector('.video__volume');

let isPlay = false;
let isMute = false;
let isStart = true;
let progressVideo = 0;

const hiddenElements = (elements) => {
  elements.forEach(el => el.classList.add('visually-hidden'));
}

const showElements = (elements) => {
  elements.forEach(el => el.classList.remove('visually-hidden'));
}

const handlerVideo = () => {
  if(isPlay) {
    video.pause();
    isPlay = false;
  } else {
    video.play();
    isPlay = true;
  }

  playBtn.classList.toggle('video__play-btn--play');
  startBtn.classList.toggle('visually-hidden');
}

const updateTimeline = () => {
  const percent = (video.currentTime / video.duration) * 100;
  timeline.style.backgroundSize = `${percent}% 100%`;
  timeline.value = percent;

  if(percent == 100) {
    handlerVideo();
    // finishVideo();
  }
}

const handlerTimeline = () => {
  const time = (timeline.value * video.duration) / 100;
  video.currentTime = time;
}

const mutedVolume = () => {
  video.muted = !video.muted;
  if(video.muted) {
    volumeBtn.classList.add('video__volume-btn--mute')
  } else {
    volumeBtn.classList.remove('video__volume-btn--mute')
    if(volumeBar.value == 0) {
      video.volume = 0.1;
      volumeBar.value = 1;
      volumeBar.style.backgroundSize = '10% 100%';
    }
  }
}

const handlerVolume = () => {
  if(volumeBar.value == 0) {
    volumeBar.style.backgroundSize = '0% 100%';
    mutedVolume();
  } else {
    const percent = volumeBar.value * 10;
    volumeBar.style.backgroundSize = `${percent}% 100%`;
    video.volume = volumeBar.value / 10;
    video.muted = false;
    volumeBtn.classList.remove('video__volume-btn--mute')
  }
}

const startVideo = () => {
  if(isStart) {
    showElements([video, controls]);
    hiddenElements([poster]);
    isStart = false;
  }
  isPlay = false;
  handlerVideo();
}

const finishVideo = () => {
  showElements([poster, startBtn]);
  hiddenElements([video, controls]);
  isStart = true;
  isPlay = false;
  playBtn.classList.remove('video__play-btn--play');
}

playBtn.addEventListener('click', handlerVideo);
startBtn.addEventListener('click', startVideo);
video.addEventListener('click', handlerVideo);
video.addEventListener('timeupdate', updateTimeline);
timeline.addEventListener('change', handlerTimeline);
volumeBtn.addEventListener('click', mutedVolume);
volumeBar.addEventListener('change', handlerVolume);