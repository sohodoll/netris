import { SET_VIDEO_PAUSE, SET_VIDEO_RESUME } from './actions';
import { takeEvery, put } from 'redux-saga/effects';

function* handleSetVideoPause() {
  yield console.log('Video paused');
}

function* handleSetVideoResume() {
  yield console.log('Video resumed');
}

export function* watchVideoActions() {
  yield takeEvery(SET_VIDEO_PAUSE, handleSetVideoPause);
  yield takeEvery(SET_VIDEO_RESUME, handleSetVideoResume);
}
