import './App.css';
import { Provider } from 'react-redux';
import { store } from 'reduxStore/store';
import { MainContainer } from 'components/Main/MainContainer';

const App = () => (
  <Provider store={store}>
    <MainContainer />
  </Provider>
);

export default App;
