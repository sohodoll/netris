import { Timestamps, VideoPlayer } from 'components';
import styles from './styles.module.css';
import { MainStateProps } from './types';
import videoImg from 'assets/video.png';

export const Main = (props: MainStateProps) => {
  return (
    <main className={styles.main}>
      <div className={styles.intro}>
        <h2 className={styles.heading}>Video Assistant</h2>
        <span>
          <img src={videoImg} className={styles.logo} alt='logo' />
        </span>
      </div>
      <div className={styles.wrapper}>
        <Timestamps timestamps={props.timestamps} currentTimestamp={props.currentTimestamp} currentTimestamps={props.currentTimestamps} />
        <VideoPlayer currentTimestamps={props.currentTimestamps} />
      </div>
    </main>
  );
};
