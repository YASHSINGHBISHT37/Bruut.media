const video = document.getElementById('video');

// Play video when hovered
document.querySelector('.pg1-case .video-cont').addEventListener('mouseenter', () => {
  video.play();
});

// Pause video when hover ends
document.querySelector('.pg1-case .video-cont').addEventListener('mouseleave', () => {
  video.pause();
});
