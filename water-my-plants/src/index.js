import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
// import reducer from './reducers';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

// const store = createStore(reducer)


ReactDOM.render(
  // <Provider store={store}>
    <Router>
      <App />
    </Router>,
  document.getElementById('root')
);

