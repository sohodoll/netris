import { combineReducers } from 'redux';
import { videoReducer } from './videoReducer';

export const rootReducer = combineReducers({
  video: videoReducer,
});

export type StateType = ReturnType<typeof rootReducer>;
