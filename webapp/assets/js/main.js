const callForm = document.querySelector('#call-form');

let localMediaStream;

function configMediaConnection(mediaConnection) {
  const remoteVideo = document.getElementById('remote-video');

  // play remote video stream
  mediaConnection.on('stream', (stream) => {
    console.log('Media connection: open');
    remoteVideo.srcObject = stream;
    remoteVideo.play();
  });
  mediaConnection.on('close', () => {
    console.log('Media connection: close');
    remoteVideo.srcObject = null;
  });
}

callForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const remoteId = callForm.remoteId.value;
  console.log(`Remote ID: ${remoteId}`);

  const mediaConnection = peer.call(remoteId, localMediaStream);
  configMediaConnection(mediaConnection);
  
  callForm.reset();
});

function init() {
  callForm.reset();

  // capture local media
  navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
      // play local video stream
      const localVideo = document.querySelector('#local-video');
      localVideo.srcObject = stream;
      localVideo.play();
      localMediaStream = stream;
    })
    .catch(err => {
      console.error('mediaDevice.getUserMedia() error: ', err);
    });
}

// event listeners
window.onload = init();
