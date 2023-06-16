import { Timestamp } from 'reduxStore/videoReducer';

export type MainStateProps = {
  id: string;
  paused: boolean;
  timestamps: Timestamp[];
  timestamp: number;
};

export type MainDispatchProps = {
  setTimestamps: (id: string) => void;
};
