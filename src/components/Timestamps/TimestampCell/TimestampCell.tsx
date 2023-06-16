import { formatDuration } from 'helpers/formatDuration';
import { useDispatch } from 'react-redux';
import { setTimestamp } from 'reduxStore/actions';
import { Timestamp } from 'reduxStore/videoReducer';

type TimestampCellProps = {
  timestamp: Timestamp;
  className: any;
  currentTimestamp: number;
};

export const TimestampCell = ({ timestamp, className, currentTimestamp }: TimestampCellProps) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (timestamp.timestamp == currentTimestamp) {
      dispatch(setTimestamp(timestamp.timestamp + 1));
    } else {
      dispatch(setTimestamp(timestamp.timestamp));
    }
  };

  return (
    <div className={className} onClick={handleClick} key={timestamp.id}>
      {formatDuration(timestamp.timestamp)}
    </div>
  );
};
