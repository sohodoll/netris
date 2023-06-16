import { Timestamps, VideoPlayer } from 'components';
import styles from './styles.module.css';
import { MainStateProps } from './types';

export const Main = (props: MainStateProps) => {
  return (
    <main className={styles.wrapper}>
      <Timestamps timestamps={props.timestamps} currentTimestamp={props.currentTimestamp} currentTimestamps={props.currentTimestamps} />
      <VideoPlayer currentTimestamps={props.currentTimestamps} />
    </main>
  );
};
