import React, { Component } from 'react';
import './about.scss';

class index extends Component {
  render() {
    return (
      <div>
        <h2>Proposition</h2>
        <p>
          Create SPA (Single Page Application) as mock up follow below
          Requirement
        </p>
        <ol>
          <li>
            Using React and Redux - This Project Using ReactJs, React-Hook,
            Redux, Redux Thunk, Redux Persist
          </li>

          <li>Save all data in local-storage - Data save to localStorage with redux persist</li>
          <li>Provide validation for all fields - validation fields is required</li>
          <li>Write npm start command to run application - Write intallation in readme.md</li>
          <li>Provide CRUD Data form - CRUD Data by react useState, redux</li>
        </ol>
      </div>
    );
  }
}

export default index;
