import { Timestamp } from 'reduxStore/videoReducer';

export type MainStateProps = {
  id: string;
  paused: boolean;
  timestamps: Timestamp[];
  currentTimestamp: number;
  currentTimestamps: Timestamp[];
};

export type MainDispatchProps = {
  setTimestamps: (id: string) => void;
};
