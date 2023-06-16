import { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTime } from 'reduxStore/actions';
import { StateType } from 'reduxStore/rootReducer';

export const VideoPlayer = () => {
  const currentTimestamp = useSelector((state: StateType) => state.video.timestamp);
  const dispatch = useDispatch();
  const playerRef = useRef<ReactPlayer | null>(null);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.seekTo(currentTimestamp / 1000);
    }
  }, [currentTimestamp]);

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        controls
        width='900px'
        height='540px'
        playing
        progressInterval={100}
        onProgress={({ playedSeconds }) => {
          dispatch(setCurrentTime(playedSeconds));
        }}
      />
    </div>
  );
};
