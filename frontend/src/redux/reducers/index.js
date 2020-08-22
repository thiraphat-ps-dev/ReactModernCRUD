import counterReducer from './counter.reducer';
import employeeReducer from './employee.reducer';
const { combineReducers } = require('redux');

export default combineReducers({ counterReducer, employeeReducer });
