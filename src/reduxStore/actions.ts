import { Timestamp } from './videoReducer';

export const SET_VIDEO_PAUSE = 'SET_VIDEO_PAUSE';
export const SET_VIDEO_RESUME = 'SET_VIDEO_RESUME';
export const SET_TIMESTAMPS = 'SET_TIMESTAMPS';
export const SET_CURRENT_TIME = 'SET_CURRENT_TIME';
export const SET_CURRENT_TIMESTAMP = 'SET_CURRENT_TIMESTAMP';
export const SET_CURRENT_TIMESTAMPS = 'SET_CURRENT_TIMESTAMPS';

export const setCurrentTime = (time: number) => ({
  type: SET_CURRENT_TIME,
  payload: time,
});

export const setVideoPause = () => ({
  type: SET_VIDEO_PAUSE,
});

export const setVideoResume = () => ({
  type: SET_VIDEO_RESUME,
});

export const setTimestamps = (timestamps: Timestamp[]) => ({
  type: SET_TIMESTAMPS,
  payload: timestamps,
});

export const setTimestamp = (timestamp: number) => ({
  type: SET_CURRENT_TIMESTAMP,
  payload: timestamp,
});

export const setCurrentTimestamps = (timestamps: Timestamp[]) => ({
  type: SET_CURRENT_TIMESTAMPS,
  payload: timestamps,
});
