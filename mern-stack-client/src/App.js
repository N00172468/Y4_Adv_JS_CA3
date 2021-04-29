import './App.css';

import { Provider } from 'react-redux';
import { store } from './actions/store'; 

import Articles from './components/articles';

function App() {
  return (
    <Provider store={store}>
      <Articles />
    </Provider>
  );
}

export default App;
