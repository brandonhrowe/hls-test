const mp4Url = './media/BigSplice_End_1440x1080_2398.mp4';
const hlsUrl = './media/BigSplice_End_1440x1080_2398.m3u8';

const video = document.querySelector('#my-video');

if (Hls.isSupported()) {
  console.log('hls')
  const hls = new Hls();
  hls.loadSource(hlsUrl);
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED, () => {
    video.play();
  })
} else {
  console.log('mp4')
  addSourceToVideo(video, mp4Url, 'video/mp4');
  video.play();
}

const addSourceToVideo = (element, src, type) => {
  const source = document.createElement('source');
  source.type = type;
  source.src = src;
  element.appendChild(source);
}
