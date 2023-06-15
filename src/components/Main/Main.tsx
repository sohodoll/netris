import { Timestamps, VideoPlayer } from 'components';
import styles from './styles.module.css';

export const Main = () => {
  return (
    <main className={styles.wrapper}>
      <Timestamps />
      <VideoPlayer />
    </main>
  );
};
