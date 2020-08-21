import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './redux/actions/counter.action';
const App = () => {
  const dispatch = useDispatch();
  const counterReducer = useSelector(({ counterReducer }) => counterReducer);
  return (
    <>
      <h1>Simple SPA</h1>
      <ul className="header">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/stuff">Stuff</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className="content">
        <button onClick={() => dispatch(actions.onIncrementAsync())}>
          Increment after 1 second
        </button>

        <button onClick={() => dispatch(actions.onIncrement())}>
          Increment
        </button>
        <button onClick={() => dispatch(actions.onDecrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(actions.onAdd(10))}>Add</button>
        <hr />
        <div>Clicked: {counterReducer.count}</div>
      </div>
    </>
  );
};

export default App;
