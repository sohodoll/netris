import { Timestamp } from 'redux/timestampsReducer';

export type MainStateProps = {
  id: string;
  paused: boolean;
  timestamps: Timestamp[];
};

export type MainDispatchProps = {
  setTimestamps: (id: string) => void;
};
