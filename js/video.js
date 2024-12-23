const video = document.querySelector('.video-section video')
const playPauseButton = document.querySelector('.video__play-button')
playPauseButton.addEventListener('click', () => {
  if (video.paused) {
    video.play()
    playPauseButton.style.display = 'none'
  } else {
    video.pause()
  }
})