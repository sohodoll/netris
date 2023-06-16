import { formatDuration } from 'helpers/formatDuration';
import { useDispatch } from 'react-redux';
import { setTimestamp } from 'reduxStore/actions';
import { Timestamp } from 'reduxStore/videoReducer';

type TimestampCellProps = {
  timestamp: Timestamp;
  className: any;
};

export const TimestampCell = ({ timestamp, className }: TimestampCellProps) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setTimestamp(timestamp.timestamp));
  };

  return (
    <div className={className} onClick={handleClick} key={timestamp.id}>
      {formatDuration(timestamp.timestamp)}
    </div>
  );
};
