import {
  SET_TIMESTAMPS,
  SET_VIDEO_PAUSE,
  SET_VIDEO_RESUME,
  SET_CURRENT_TIME,
  SET_CURRENT_TIMESTAMPS,
  SET_CURRENT_TIMESTAMP,
} from './actions';

export type Timestamp = {
  id: number;
  timestamp: number;
  duration: number;
  zone: {
    left: number;
    top: number;
    width: number;
    height: number;
  };
  finish: number;
};

const initialState = {
  id: '5e60c5f53300005fcc97bbdd',
  paused: true,
  timestamps: [] as Timestamp[],
  currentTime: 0,
  currentTimestamp: null,
  currentTimestamps: [] as Timestamp[],
};

export const videoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_VIDEO_PAUSE:
      return {
        ...state,
        paused: true,
      };
    case SET_VIDEO_RESUME:
      return {
        ...state,
        paused: false,
      };
    case SET_TIMESTAMPS:
      return {
        ...state,
        timestamps: [...action.payload],
      };
    case SET_CURRENT_TIME:
      return {
        ...state,
        currentTime: action.payload,
      };

    case SET_CURRENT_TIMESTAMP:
      return {
        ...state,
        currentTimestamp: action.payload,
      };

    case SET_CURRENT_TIMESTAMPS:
      return {
        ...state,
        currentTimestamps: [...action.payload],
      };
    default:
      return state;
  }
};
