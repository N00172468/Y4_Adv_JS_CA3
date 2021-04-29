import './App.css';

import { Provider } from 'react-redux';
import { store } from './actions/store'; 

import {
  Container, 
  AppBar, 
  Typography 
} from '@material-ui/core';

import Articles from './components/articles';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit">
          <Typography
            variant="h2"
            align="center"
          >
            Articles
          </Typography>
        </AppBar>
        
        <Articles />
      </Container>
    </Provider>
  );
}

export default App;
