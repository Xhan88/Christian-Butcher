import './BeefVideo.css';

const BeefVideo = () => {
  return (
    <div className='container'>
      <video className='cuting-meat' src="./beefVideo.mp4" autoPlay muted controls></video>
    </div>
  );
}

export default BeefVideo;
