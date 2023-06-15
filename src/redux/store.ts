import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './rootReducer';
import { rootSaga } from './sagas';
import { Store } from 'redux';

const sagaMiddleware = createSagaMiddleware();

export const store: Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

export type StoreType = typeof store;

sagaMiddleware.run(rootSaga);
