import {
  ADDEM,
  DELETEEM,
  UPDATEEM,
  SETSELECTEM,
  SETSELECTEMALL,
  SETCURRENTPAGE,
  RESETEMPLOYEE,
  EDITEMLIST,
} from '../actionTypes';

const setAddEmployeelistAction = (value) => ({
  type: ADDEM,
  payload: value,
});
const setEditEmployeelistAction = (value) => ({
  type: EDITEMLIST,
  payload: 
  value,
});

const setUpdateEmployeelistAction = (value) => ({
  type: UPDATEEM,
  payload: value,
});

const setDeleteEmployeelistAction = (index) => ({
  type: DELETEEM,
  payload: index,
});
const setCheckEmployeelistAction = (index) => ({
  type: SETSELECTEM,
  payload: index,
});
const setCheckAllEmployeelistAction = (index) => ({
  type: SETSELECTEMALL,
  payload: index,
});

const setCurrentPageAction = (index) => ({
  type: SETCURRENTPAGE,
  payload: index,
});

const setResetEmployeeAction = () => ({
  type: RESETEMPLOYEE,
});

export const onAdd = (value) => {
  return (dispatch) => {
    dispatch(setAddEmployeelistAction(value));
  };
};
export const onEditEmList = ( value) => {
  return (dispatch) => {
    dispatch(setEditEmployeelistAction( value));
  };
};
export const onUpdate = (value) => {
  return (dispatch) => {
    dispatch(setUpdateEmployeelistAction(value));
  };
};

export const onDelete = (value) => {
  return (dispatch) => {
    dispatch(setDeleteEmployeelistAction(value));
  };
};

export const onCheck = (value) => {
  return (dispatch) => {
    dispatch(setCheckEmployeelistAction(value));
  };
};

export const onCheckall = (value) => {
  return (dispatch) => {
    dispatch(setCheckAllEmployeelistAction(value));
  };
};

export const onSetCurrentPage = (value) => {
  return (dispatch) => {
    dispatch(setCurrentPageAction(value));
  };
};

export const onReset = () => {
  return (dispatch) => {
    dispatch(setResetEmployeeAction());
  };
};
