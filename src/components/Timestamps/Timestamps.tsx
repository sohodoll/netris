import { Timestamp } from 'reduxStore/videoReducer';
import styles from './styles.module.css';
import { TimestampCell } from './TimestampCell/TimestampCell';

type TimestampsProps = {
  timestamps: Timestamp[];
  timestamp: number;
};

export const Timestamps = ({ timestamps, timestamp }: TimestampsProps) => {
  return (
    <div className={styles.container}>
      <h2>Timestamps</h2>
      <div className={styles.wrapper}>
        <div className={styles.timestamps}>
          {[...timestamps]
            .sort((a, b) => a.timestamp - b.timestamp)
            .map((timestamp: Timestamp) => (
              <TimestampCell key={timestamp.id} timestamp={timestamp} />
            ))}
        </div>
      </div>
    </div>
  );
};
