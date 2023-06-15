import { connect } from 'react-redux';
import { StateType } from 'redux/rootReducer';
import { Main } from './Main';
import { MainStateProps } from './types';

const mapStateToProps = (state: StateType): MainStateProps => ({
  paused: state.video.paused,
});

export const MainContainer = connect(mapStateToProps, {})(Main);
