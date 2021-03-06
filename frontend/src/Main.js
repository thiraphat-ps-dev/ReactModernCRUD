import React from 'react';
import { Route, NavLink, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Edit from './pages/Edit';

const Main = () => {
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
        </ul>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/edit/:id" component={Edit} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Main;
