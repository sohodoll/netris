export const SET_VIDEO_PAUSE = 'SET_VIDEO_PAUSE';
export const SET_VIDEO_RESUME = 'SET_VIDEO_RESUME';
export const SET_TIMESTAMPS = 'SET_TIMESTAMPS';

export const setVideoPause = () => ({
  type: SET_VIDEO_PAUSE,
});

export const setVideoResume = () => ({
  type: SET_VIDEO_RESUME,
});

export const setTimestamps = (timestamps: any) => ({
  type: SET_TIMESTAMPS,
  payload: timestamps,
});
