import { all } from 'redux-saga/effects';
import { watchVideoActions } from './videoSaga';

export function* rootSaga() {
  yield all([watchVideoActions()]);
}
