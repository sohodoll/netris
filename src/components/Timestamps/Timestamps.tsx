import { Timestamp } from 'redux/videoReducer';
import styles from './styles.module.css';
import { formatDuration } from 'helpers/formatDuration';

type TimestampsProps = {
  timestamps: Timestamp[];
};

export const Timestamps = ({ timestamps }: TimestampsProps) => {
  return (
    <div className={styles.container}>
      <h2>Timestamps</h2>
      <div className={styles.wrapper}>
        <div className={styles.timestamps}>
          {timestamps
            .sort((a, b) => a.timestamp - b.timestamp)
            .map((timestamp: Timestamp) => {
              return <div key={timestamp.id}>{formatDuration(timestamp.timestamp)}</div>;
            })}
        </div>
      </div>
    </div>
  );
};
