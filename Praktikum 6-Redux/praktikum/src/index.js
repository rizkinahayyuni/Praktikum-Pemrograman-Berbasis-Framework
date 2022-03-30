import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import MainReducer from './reducers/mainReducer';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import CreateTodo from "./containers/createTodo";
import Table from "./containers/table";

const store = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(MainReducer)

ReactDOM.render(
<Provider store={store}>
  <CreateTodo />
  <Table />
</Provider>, 
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
