import { takeEvery, call, put, select } from 'redux-saga/effects';
import { SET_TIMESTAMPS, setTimestamps, SET_CURRENT_TIME, setCurrentTimestamps } from './actions';
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

function* handleCurrentTimestamps() {
  try {
    const state: StateType = yield select();
    const timestamps = state.video.timestamps;
    const currentTime = state.video.currentTime;

    const currentTimestamps = timestamps.filter(
      (timestamp: Timestamp) => timestamp.timestamp / 1000 <= currentTime && currentTime <= timestamp.finish / 1000
    );

    yield put(setCurrentTimestamps(currentTimestamps));
  } catch (error) {
    console.error('Error setting timestamps:', error);
  }
}

export function* watchVideoActions() {
  yield takeEvery(SET_CURRENT_TIME, handleCurrentTimestamps);
  yield call(fetchTimestamps, { type: SET_TIMESTAMPS });
}
