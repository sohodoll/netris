import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { MainContainer } from 'components/Main/MainContainer';

const App = () => (
  <Provider store={store}>
    <MainContainer />
  </Provider>
);

export default App;
