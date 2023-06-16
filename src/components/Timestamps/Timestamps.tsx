import { Timestamp } from 'reduxStore/videoReducer';
import styles from './styles.module.css';
import { TimestampCell } from './TimestampCell/TimestampCell';
import { useEffect } from 'react';

type TimestampsProps = {
  timestamps: Timestamp[];
  currentTimestamp: number;
  currentTimestamps: Timestamp[];
};

export const Timestamps = ({ timestamps, currentTimestamp, currentTimestamps }: TimestampsProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Timestamps</h2>
      <div className={styles.wrapper}>
        <div className={styles.timestamps}>
          {[...timestamps]
            .sort((a, b) => a.timestamp - b.timestamp)
            .map((timestamp: Timestamp) => (
              <TimestampCell
                key={timestamp.id}
                timestamp={timestamp}
                currentTimestamp={currentTimestamp}
                className={currentTimestamps.find((item) => item.id == timestamp.id) ? `${styles.active}` : ''}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
