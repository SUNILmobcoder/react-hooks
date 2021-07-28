import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import UseReducers from './components/useReducers';
import MainContext from './MainContext';
import TodoReducer from './TodoReducer';
import UseCallbacks from './useCallbacks';
import UseMemo from './UseMemo';
import USEREF from './useRef';
ReactDOM.render(
  <React.StrictMode>
    <div><h1>Counter using useState</h1></div>
    <App />
    <div><h1>Change theme using useContext</h1></div>
    <MainContext />
    <div><h1>Counter using useReducer</h1></div>
    <UseReducers/>
    <div><h1>Todo app using useReducer along with delete and toggle complete</h1></div>
    <TodoReducer />
    <div><h1>useCallback</h1></div>
    <UseCallbacks />
    <div><h1>useMemo</h1></div>
    <UseMemo />
    <div><h1>useRef</h1></div>
    <USEREF />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

