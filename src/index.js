import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore} from 'redux';

import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './calculator/reducers';
import CalculatorDemo from './calculator/containers/CalculatorDemo';
import { defaulState, btnLists } from './calculator/actions';

// create the store and restore state data if page refresh
const store = createStore(rootReducer, defaulState);

// console.log(store.getState());

ReactDOM.render(
(
<Provider store={store}>
  <CalculatorDemo btnLists={btnLists}/>
</Provider>
)
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
