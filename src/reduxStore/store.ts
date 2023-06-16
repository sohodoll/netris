import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootReducer, StateType } from './rootReducer';
import { rootSaga } from './sagas';
import { Store } from 'redux';

const sagaMiddleware = createSagaMiddleware();

export const store: Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

export type StoreType = typeof store;
export type DispatchType = typeof store.dispatch;

sagaMiddleware.run(rootSaga);
