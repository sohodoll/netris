import { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTime } from 'reduxStore/actions';
import { StateType } from 'reduxStore/rootReducer';
import { Timestamp } from 'reduxStore/videoReducer';
import { EventOverlay } from './EventOverlay';
import styles from './styles.module.css';

type VideoPlayerProps = {
  currentTimestamps: Timestamp[];
};

export const VideoPlayer = ({ currentTimestamps }: VideoPlayerProps) => {
  const currentTimestamp = useSelector((state: StateType) => state.video.currentTimestamp);
  const dispatch = useDispatch();
  const playerRef = useRef<ReactPlayer | null>(null);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.seekTo(currentTimestamp / 1000);
    }
  }, [currentTimestamp]);

  console.log(currentTimestamps);

  return (
    <div className={styles.player}>
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
      {currentTimestamps.map((timestamp) => {
        return (
          <EventOverlay
            key={timestamp.timestamp}
            left={timestamp.zone.left}
            top={timestamp.zone.top}
            width={timestamp.zone.width}
            height={timestamp.zone.height}
          />
        );
      })}
    </div>
  );
};
