import { connect, useDispatch } from 'react-redux';
import { StateType } from 'reduxStore/rootReducer';
import { Main } from './Main';
import { MainStateProps } from './types';

const mapStateToProps = (state: StateType): MainStateProps => ({
  id: state.video.id,
  paused: state.video.paused,
  timestamps: state.video.timestamps,
  timestamp: state.video.timestamp,
});

export const MainContainer = connect(mapStateToProps, {})(Main);
