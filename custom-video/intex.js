const videoPlayer = document.querySelector('.video__player');
const startBtn = videoPlayer.querySelector('.video__btn');
const poster = videoPlayer.querySelector('.video__poster');
const video = videoPlayer.querySelector('.video__item');
const controls = videoPlayer.querySelector('.video__controls');
const playBtn = controls.querySelector('.video__play-btn');
const volumeBtn = controls.querySelector('.video__volume-btn');
const progressBar = controls.querySelector('.video__progress');
const volumeBar = controls.querySelector('.video__volume');

let isPlay = false;
let progressVideo = 0;

const hiddenElements = (elements) => {
  elements.forEach(el => el.classList.add('visually-hidden'));
}

const showElements = (elements) => {
  elements.forEach(el => el.classList.remove('visually-hidden'));
}

const toggleElement = (element, className) => {
  element.classList.toggle(className);
}

const playVideo = () => {
  isPlay = true;
  console.dir(video);
  video.currentTime = progressVideo;
  video.play();
}

const pauseVideo = () => {
  isPlay = false;
  video.pause();
}

const startVideo = () => {
  hiddenElements([poster, startBtn]);
  showElements([video, controls]);
  playVideo();
}

const play = () => {
  if(isPlay) {
    progressVideo = progressBar.value;
    showElements([startBtn]);
    pauseVideo();
  } else {
    hiddenElements([startBtn]);
    playVideo();
  }
  toggleElement(playBtn, 'video__play-btn--play');
}

startBtn.addEventListener('click', startVideo);
playBtn.addEventListener('click', play);