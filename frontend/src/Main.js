import React, { Component } from 'react';
import { Route, NavLink, HashRouter, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/index';
import About from './pages/About/index';

import * as actions from './redux/actions/counter.action';
import { useDispatch, useSelector } from 'react-redux';

const Main = () => {
  const dispatch = useDispatch();
  const counterReducer = useSelector(({ counterReducer }) => counterReducer);
  
  // render() {
    return (
      <BrowserRouter>
        <div>
          <h1 style={{ marginLeft: '20px' }}>ReactModernCRUD</h1>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <button onClick={() => dispatch(actions.onIncrement())}>
          Increment
        </button>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </BrowserRouter>
    );
  }


export default Main;
