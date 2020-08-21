import React, { Component } from 'react';
import { Route, NavLink, HashRouter, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/index';
import About from './pages/About/index';

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>ReactModernCRUD</h1>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
