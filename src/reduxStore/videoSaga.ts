import { takeEvery, call, put, select } from 'redux-saga/effects';
import { SET_TIMESTAMPS, setTimestamps, SET_VIDEO_PAUSE, SET_VIDEO_RESUME } from './actions';
import { requestTimeStamps } from 'api';
import { StateType } from 'reduxStore/rootReducer';

function* fetchTimestamps(action: any): Generator<any, void, any> {
  try {
    const state: StateType = yield select();
    const videoId = state.video.id;
    const timestamps = state.video.timestamps;

    if (timestamps.length === 0) {
      const response = yield call(requestTimeStamps, videoId);
      const data = response.data;

      yield put(setTimestamps(data));
    }
  } catch (error) {
    console.error('Error setting timestamps:', error);
  }
}

function* handleSetVideoPause() {
  yield console.log('Video paused');
}

function* handleSetVideoResume() {
  yield console.log('Video resumed');
}

export function* watchVideoActions() {
  yield takeEvery(SET_VIDEO_PAUSE, handleSetVideoPause);
  yield takeEvery(SET_VIDEO_RESUME, handleSetVideoResume);
  yield call(fetchTimestamps, { type: SET_TIMESTAMPS });
}
