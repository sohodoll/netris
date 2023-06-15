import { SET_VIDEO_PAUSE, SET_VIDEO_RESUME } from './actions';
const initialState = {
  paused: true,
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
    default:
      return state;
  }
};
