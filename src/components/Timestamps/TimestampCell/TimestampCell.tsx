import { formatDuration } from 'helpers/formatDuration';
import { useDispatch } from 'react-redux';
import { setTimestamp } from 'reduxStore/actions';
import { Timestamp } from 'reduxStore/videoReducer';

export const TimestampCell = ({ timestamp }: { timestamp: Timestamp }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setTimestamp(timestamp.timestamp));
  };

  return (
    <div onClick={handleClick} key={timestamp.id}>
      {formatDuration(timestamp.timestamp)}
    </div>
  );
};
