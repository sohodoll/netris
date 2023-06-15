import ReactPlayer from 'react-player';

export const VideoPlayer = () => {
  return (
    <div>
      <ReactPlayer
        url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        controls
        width='900px'
        height='540px'
      />
    </div>
  );
};
