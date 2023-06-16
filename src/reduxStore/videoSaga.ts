import { takeEvery, call, put, select } from 'redux-saga/effects';
import { SET_TIMESTAMPS, setTimestamps, SET_VIDEO_PAUSE, SET_VIDEO_RESUME, SET_CURRENT_TIME, setCurrentTimestamps } from './actions';
import { requestTimeStamps } from 'api';
import { StateType } from 'reduxStore/rootReducer';
import { Timestamp } from './videoReducer';

function* fetchTimestamps(action: any): Generator<any, void, any> {
  try {
    const state: StateType = yield select();
    const videoId = state.video.id;
    const timestamps = state.video.timestamps;

    if (timestamps.length === 0) {
      const response = yield call(requestTimeStamps, videoId);

      const mappedTimestamps = response.data.map((timestamp: Timestamp) => {
        return {
          ...timestamp,
          finish: timestamp.timestamp + timestamp.duration,
        };
      });

      yield put(setTimestamps(mappedTimestamps));
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

function* handleCurrentTimestamps() {
  try {
    const state: StateType = yield select();
    const timestamps = state.video.timestamps;
    const currentTime = state.video.currentTime;
    const currentTimestamps = state.video.currentTimestamps;
    const newCurrentTimestamps: Set<Timestamp> = new Set();

    timestamps.forEach((timestamp: Timestamp) => {
      if (timestamp.timestamp / 1000 <= currentTime && currentTime <= timestamp.finish / 1000) {
        newCurrentTimestamps.add(timestamp);
      }
    });

    yield put(setCurrentTimestamps(Array(...newCurrentTimestamps)));
  } catch (error) {
    console.error('Error setting timestamps:', error);
  }
}

export function* watchVideoActions() {
  yield takeEvery(SET_VIDEO_PAUSE, handleSetVideoPause);
  yield takeEvery(SET_VIDEO_RESUME, handleSetVideoResume);
  yield takeEvery(SET_CURRENT_TIME, handleCurrentTimestamps);
  yield call(fetchTimestamps, { type: SET_TIMESTAMPS });
}
