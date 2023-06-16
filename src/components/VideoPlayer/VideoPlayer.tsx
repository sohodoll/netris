import { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTime } from 'reduxStore/actions';
import { StateType } from 'reduxStore/rootReducer';
import { Timestamp } from 'reduxStore/videoReducer';
import { EventOverlay } from './EventOverlay';
import styles from './styles.module.css';
import { requestVideoUrl } from 'api';

type VideoPlayerProps = {
  currentTimestamps: Timestamp[];
};

export const VideoPlayer = ({ currentTimestamps }: VideoPlayerProps) => {
  const currentTimestamp = useSelector((state: StateType) => state.video.currentTimestamp);
  const dispatch = useDispatch();
  const playerRef = useRef<ReactPlayer | null>(null);
  const URL = requestVideoUrl();

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.seekTo(currentTimestamp / 1000);
    }
  }, [currentTimestamp]);

  return (
    <div className={styles.player}>
      <ReactPlayer
        ref={playerRef}
        url={URL}
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
